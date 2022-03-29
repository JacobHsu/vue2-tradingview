import { tvThemeConfig } from "./config"

export const commonConfig = {
    fullscreen: false,
    container_id: 'tradingView_container',
    library_path: '/charting_library/',
    disabled_features: [
      'header_chart_type',
      'header_symbol_search',
      'volume_force_overlay',
      'header_resolutions',
      'header_settings',
      'header_compare',
      'header_undo_redo',
      'header_screenshot',
      'use_localstorage_for_settings',
      'timeframes_toolbar',
      'header_widget'
    ],
    enabled_features: [
      "header_fullscreen_button",
      "dont_show_boolean_study_arguments",
      "remove_library_container_border",
      "save_chart_properties_to_local_storage",
      "side_toolbar_in_fullscreen_mode",
      "hide_last_na_study_output",
      "constraint_dialogs_movement",
      "keep_left_toolbar_visible_on_small_screens",
      "hide_left_toolbar_by_default",
    ],
  }

export const theme0Config = {
    custom_css_url: 'chat.css?v=20190802',
    overrides: {
      "volumePaneSize": "medium",
      "symbolWatermarkProperties.color": "rgba(0,0,0, 0)",
      "paneProperties.background": tvThemeConfig.chartColor,
      "paneProperties.vertGridProperties.color": tvThemeConfig.gridColor,
      "paneProperties.horzGridProperties.color": tvThemeConfig.gridColor,
      "paneProperties.crossHairProperties.color": tvThemeConfig.crossover,
      "paneProperties.crossHairProperties.style": 'LINESTYLE_DASHED',
      "mainSeriesProperties.style": tvThemeConfig.mainSeriesProperties,
      "mainSeriesProperties.showCountdown": false,
      "scalesProperties.showSeriesLastValue": true,
      "mainSeriesProperties.visible": true,
      "mainSeriesProperties.showPriceLine": true,
      "mainSeriesProperties.priceLineWidth": 1,
      "mainSeriesProperties.minTick": "default",
      "mainSeriesProperties.extendedHours": false,
      "editorFontsList": ["Lato", "Arial", "Verdana", "Courier New", "Times New Roman"],
      "paneProperties.topMargin": 10,
      "paneProperties.bottomMargin": 5,
      "paneProperties.leftAxisProperties.autoScale": true,
      "paneProperties.leftAxisProperties.autoScaleDisabled": false,
      "paneProperties.leftAxisProperties.percentage": false,
      "paneProperties.leftAxisProperties.percentageDisabled": false,
      "paneProperties.leftAxisProperties.log": false,
      "paneProperties.leftAxisProperties.logDisabled": false,
      "paneProperties.leftAxisProperties.alignLabels": true,
      "paneProperties.legendProperties.showStudyArguments": true,
      "paneProperties.legendProperties.showStudyTitles": true,
      "paneProperties.legendProperties.showStudyValues": true,
      "paneProperties.legendProperties.showSeriesTitle": true,
      "paneProperties.legendProperties.showSeriesOHLC": true,
      "scalesProperties.showLeftScale": false,
      "scalesProperties.showRightScale": true,
      "scalesProperties.backgroundColor": tvThemeConfig.chartColor,
      "scalesProperties.lineColor": tvThemeConfig.lineColor,
      "scalesProperties.textColor": tvThemeConfig.textColor,
      "scalesProperties.scaleSeriesOnly": true,
      "mainSeriesProperties.priceAxisProperties.autoScale": true,
      "mainSeriesProperties.priceAxisProperties.autoScaleDisabled": false,
      "mainSeriesProperties.priceAxisProperties.percentage": false,
      "mainSeriesProperties.priceAxisProperties.percentageDisabled": false,
      "mainSeriesProperties.priceAxisProperties.log": false,
      "mainSeriesProperties.priceAxisProperties.logDisabled": false,
      "mainSeriesProperties.candleStyle.upColor": tvThemeConfig.riseColor,
      "mainSeriesProperties.candleStyle.downColor": tvThemeConfig.fallColor,
      "mainSeriesProperties.candleStyle.drawWick": true,
      "mainSeriesProperties.candleStyle.drawBorder": false,
      "mainSeriesProperties.candleStyle.borderColor": tvThemeConfig.riseColor,
      "mainSeriesProperties.candleStyle.borderUpColor": tvThemeConfig.riseColor,
      "mainSeriesProperties.candleStyle.borderDownColor": tvThemeConfig.fallColor,
      "mainSeriesProperties.candleStyle.wickColor": tvThemeConfig.riseColor,
      "mainSeriesProperties.candleStyle.wickUpColor": tvThemeConfig.riseColor,
      "mainSeriesProperties.candleStyle.wickDownColor": tvThemeConfig.fallColor,
      "mainSeriesProperties.candleStyle.barColorsOnPrevClose": false,
      "mainSeriesProperties.hollowCandleStyle.upColor": tvThemeConfig.riseColor,
      "mainSeriesProperties.hollowCandleStyle.downColor": tvThemeConfig.fallColor,
      "mainSeriesProperties.hollowCandleStyle.drawWick": true,
      "mainSeriesProperties.hollowCandleStyle.drawBorder": false,
      "mainSeriesProperties.hollowCandleStyle.borderColor": tvThemeConfig.riseColor,
      "mainSeriesProperties.hollowCandleStyle.borderUpColor": tvThemeConfig.riseColor,
      "mainSeriesProperties.hollowCandleStyle.borderDownColor": tvThemeConfig.fallColor,
      "mainSeriesProperties.hollowCandleStyle.wickColor": tvThemeConfig.riseColor,
      "mainSeriesProperties.hollowCandleStyle.wickUpColor": tvThemeConfig.riseColor,
      "mainSeriesProperties.hollowCandleStyle.wickDownColor": tvThemeConfig.fallColor,
      "mainSeriesProperties.haStyle.upColor": tvThemeConfig.riseColor,
      "mainSeriesProperties.haStyle.downColor": tvThemeConfig.fallColor,
      "mainSeriesProperties.haStyle.drawWick": true,
      "mainSeriesProperties.haStyle.drawBorder": false,
      "mainSeriesProperties.haStyle.borderColor": tvThemeConfig.riseColor,
      "mainSeriesProperties.haStyle.borderUpColor": tvThemeConfig.riseColor,
      "mainSeriesProperties.haStyle.borderDownColor": tvThemeConfig.fallColor,
      "mainSeriesProperties.haStyle.wickColor": "#737375",
      "mainSeriesProperties.haStyle.wickUpColor": tvThemeConfig.riseColor,
      "mainSeriesProperties.haStyle.wickDownColor": tvThemeConfig.fallColor,
      "mainSeriesProperties.haStyle.barColorsOnPrevClose": true,
      "mainSeriesProperties.barStyle.upColor": tvThemeConfig.riseColor,
      "mainSeriesProperties.barStyle.downColor": tvThemeConfig.fallColor,
      "mainSeriesProperties.barStyle.barColorsOnPrevClose": false,
      "mainSeriesProperties.barStyle.dontDrawOpen": true,
      "mainSeriesProperties.lineStyle.color": "#0cbef3",
      "mainSeriesProperties.lineStyle.linestyle": 0,
      "mainSeriesProperties.lineStyle.linewidth": 1,
      "mainSeriesProperties.lineStyle.priceSource": "close",
      "mainSeriesProperties.areaStyle.color1": "#0cbef3",
      "mainSeriesProperties.areaStyle.color2": "#0098c4",
      "mainSeriesProperties.areaStyle.linecolor": "#0cbef3",
      "mainSeriesProperties.areaStyle.linestyle": 0,
      "mainSeriesProperties.areaStyle.linewidth": 1,
      "mainSeriesProperties.areaStyle.priceSource": "close",
      "mainSeriesProperties.areaStyle.transparency": 80,
    },
  
  }