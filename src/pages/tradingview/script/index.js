import { widget as TvWidget } from '../../../../public/charting_library/charting_library.min';
import Vue from "vue";
import Datafeeds from './datafeed'
import TestData from "./data";
import { commonConfig } from "./tvconfig" // , theme0Config

const doc = dom => document.querySelector(dom);
const docEle = document.documentElement;

const metaInterval = ["1D", "1W", "1M"];



export default {
  widget: null,
  dataFeed: null,
  dataCache: {}, // 缓存数据
  getBarTimer: null,
  vue: null,
  ws: null,
  cancelSendObj: {},
  init: function (options, ws) {
    this.styles = options.styles;                                            // 样式
    this.ws = ws;                                                            // websocket实例
    this.vue = new Vue();                                                    // vue 实例
    this.dataCache = {};                                                     // 缓存数据
    this.dataFeed = new Datafeeds(this, options);                            // 图表库Widget的构造函数
    // this.langType = i18n[handlerGetCookie('lang')].TradingView;           // 国际化
    this.widget = new TvWidget({
      symbol: options.symbol,
      interval: options.interval,
      datafeed: this.dataFeed,
      ...commonConfig,
      // ...theme0Config,
      numeric_formatting: {
        decimal_sign: '.'
      },
      timezone: options.timezone,
      locale: options.language,
      customFormatters: {
        dateFormatter: {
          format: (date) => date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1) + '-' + date.getUTCDate()
        }
      },
      debug: false,
      autosize: true,
      allow_symbol_change: true,
      drawings_access: {
        type: 'black',
        tools: [
          {name: "Trend Line", grayed: true},
          {name: "Trend Angle", grayed: true}
        ]
      },
      studies_overrides: {
        "volume.volume.color.0": options.fallColor,
        "volume.volume.color.1": options.riseColor,
        "volume.volume.transparency": "53",
        // "volume.volume ma.plottype": "line"
      },

    });

    // MA线 移动平均线
    this.widget.onChartReady(() => {
      this.widget.chart().createStudy('Moving Average', false, false, [5], null, {
        'Plot.color': 'rgba(125,150,235,0.6)',
        "precision": options.precision,
      });  // 蓝色
      this.widget.chart().createStudy('Moving Average', false, false, [10], null, {
        'Plot.color': 'rgba(58,169,194,0.6)',
        "precision": options.precision,
      });  // 绿色
      this.widget.chart().createStudy('Moving Average', false, false, [30], null, {
        'Plot.color': 'rgba(235,172,125,0.6)',
        "precision": options.precision,
      });  // 黄色
      this.widget.chart().createStudy('Moving Average', false, false, [60], null, {
        'Plot.color': 'rgba(241,75,146,0.6)',
        "precision": options.precision,
      });  // 红色
    });
  },
  deleteCache(ticker) {
    let item = `${ticker}.${this.resolution}`;
    delete this.dataCache[item];
  },
  handleClearDWMResolution(options) {
    let specialMeta = options.symbol + '_' + this.widget.chart().resolution();
    if (metaInterval.includes(this.widget.chart().resolution())) this.dataFeed.unsubscribeBars(specialMeta);
  },
  handleCancelSend() {
    if (this.cancelSendObj) this.subscribeKline(this.cancelSendObj);
  },
  handleClearHistoryStatus() {
    this.historyType = "";
  },
  getBars: function (symbolInfo, resolution, from, to, callBack) {
    callBack && callBack({s: 'ok', bars: TestData})
  },
  onUpdateData(result) {
    if (!result.data) return;
    result.symbol = result.symbol.toUpperCase();
    let cacheItem = `${result.symbol}.${result.type}`;

    if (!this.dataCache[cacheItem]) {
      this.dataCache[cacheItem] = [];
    }

    if (result.topic === "kline.req") {
      this.toggleStyles(this.styles);
      this.dataCache[cacheItem] = result.data;
    } else if (result.topic === "kline") {
      result.data.interval = result.type;
      this.dataFeed.update(result.data);
    }
  },
  subscribeKline(params, callBack) {
    this.ws.send(JSON.stringify(params));
    this.ws.onmessage = e => {
      let data = JSON.parse(e.data);
      if (data.topic === "kline.req" || data.topic === "kline") {
        callBack && callBack(data);
      }
    };
  },
  remove() {
    this.widget.remove();
  },
  toggleThemeName(styles, overrides, studies, theme) {
    let meta = this.widget.chart().getAllStudies()[0];
    let vol = this.widget.chart().getStudyById(meta.id);
    this.styles = styles;
    this.vue.$nextTick(() => {
      this.toggleStyles(styles);
      this.widget.applyOverrides(overrides);
      vol.applyOverrides(studies);
      if (theme === 'black') {
        docEle.className = "xxx";
      } else {
        docEle.className = "xxx";
        document.styleSheets[0].insertRule('body::after { background: black }', 0);
      }
    });
  },
  /*
  切换图表主题
  具体在TV的iframe主题上的html根节点添加主题class，然后对应的手动更改自己的图表配置颜色
  * */
  toggleStyles(theMe) {
    let clsPrefix = theMe.split("_")[0];
    let iframeHTMLElement = doc("#tradingView_container iframe").contentWindow.document.documentElement || false;
    if (iframeHTMLElement) {
      let classList = iframeHTMLElement.classList;
      if (classList.value.indexOf(clsPrefix) > -1) {
        for (let i = 0; i < classList.length; i++) {
          let eleClass = classList[i];
          if (clsPrefix === eleClass.split("_")[0]) {
            classList.remove(eleClass);
          }
        }
      }
      classList.add(theMe);
    }
  },
  setSymbol(market, resolution, callBack) {
    this.widget.setSymbol(market, resolution, callBack);
  },
  // 全屏方法
  showFullScreen() {
    this.widget._innerAPI()._chartWidgetCollection.startFullscreen();
  },
  // 关闭全屏
  hideFullScreen() {
    this.widget._innerAPI()._chartWidgetCollection.exitFullscreen();
  },
  // 显示确认对话框
  showConfirmDialog() {
    this.widget.showConfirmDialog();
  },
  // 显示加载对话框
  showLoadChartDialog() {
    this.widget.showLoadChartDialog();
  },
  // 显示通知对话框
  showNoticeDialog() {
    this.widget.showNoticeDialog();
  },
  // 显示保存对话框
  showSaveAsChartDialog() {
    this.widget.showSaveAsChartDialog();
  },
  // 设置语言
  setLanguage(lang) {
    this.widget.setLanguage(lang);
  },
  // 设置分辨率
  setResolution(r) {
    this.widget._innerAPI()._chartWidgetCollection.setResolution(r);
  },
  changeChatType(type) {
    this.widget.applyOverrides({
      'mainSeriesProperties.style': type
    });
  },
  chartSetResolution(r) {
    this.widget.chart().setResolution(r, () => {
    });
  },
  executeActionById(actionId) {
    // chartProperties      图表属性
    // compareOrAdd         比较或添加
    // scalesProperties     比例属性
    // tmzProperties        时区
    // paneObjectTree       窗格对象树
    // insertIndicator      插入指标
    // symbolSearch         符号搜索
    // changeInterval       改变间隔
    // timeScaleReset       时间比例重置
    // drawingToolbarAction 绘图工具栏
    this.widget.chart().executeActionById(actionId);
  },
}

