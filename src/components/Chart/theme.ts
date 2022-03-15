import { registerTheme } from '@antv/g2';

/**************
 * 主题配置
 ***************/
export const colors = {
  primary: {
    50: 'rgb(236, 239, 248)',
    100: 'rgb(209, 216, 240)',
    200: 'rgb(167, 179, 225)',
    300: 'rgb(128, 144, 211)',
    400: 'rgb(94, 111, 196)',
    500: 'rgb(63, 81, 181)',
    600: 'rgb(51, 66, 161)',
    700: 'rgb(40, 52, 140)',
    800: 'rgb(31, 40, 120)',
    900: 'rgb(23, 29, 99)',
  },
  gray: {
    50: 'rgb(249, 249, 249)',
    100: 'rgb(230, 232, 234)',
    200: 'rgb(198, 202, 205)',
    300: 'rgb(167, 171, 176)',
    400: 'rgb(136, 141, 146)',
    500: 'rgb(107, 112, 117)',
    600: 'rgb(85, 91, 97)',
    700: 'rgb(65, 70, 76)',
    800: 'rgb(46, 50, 56)',
    900: 'rgb(28, 31, 35)',
  },
  red: {
    50: 'rgb(254, 242, 237)',
    100: 'rgb(254, 221, 210)',
    200: 'rgb(253, 183, 165)',
    300: 'rgb(251, 144, 120)',
    400: 'rgb(250, 102, 76)',
    500: 'rgb(249, 57, 32)',
    600: 'rgb(213, 37, 21)',
    700: 'rgb(178, 20, 12)',
    800: 'rgb(142, 8, 5)',
    900: 'rgb(106, 1, 3)',
  },
  green: {
    50: 'rgb(236, 247, 236)',
    100: 'rgb(208, 240, 209)',
    200: 'rgb(164, 224, 167)',
    300: 'rgb(125, 209, 130)',
    400: 'rgb(90, 194, 98)',
    500: 'rgb(59, 179, 70)',
    600: 'rgb(48, 149, 59)',
    700: 'rgb(37, 119, 47)',
    800: 'rgb(27, 89, 36)',
    900: 'rgb(17, 60, 24)',
  },
  yellow: {
    50: 'rgb(255, 253, 234)',
    100: 'rgb(254, 251, 203)',
    200: 'rgb(253, 243, 152)',
    300: 'rgb(252, 232, 101)',
    400: 'rgb(251, 218, 50)',
    500: 'rgb(250, 200, 0)',
    600: 'rgb(208, 170, 0)',
    700: 'rgb(167, 139, 0)',
    800: 'rgb(125, 106, 0)',
    900: 'rgb(83, 72, 0)',
  },
  blue: {
    50: 'rgb(234, 245, 255)',
    100: 'rgb(203, 231, 254)',
    200: 'rgb(152, 205, 253)',
    300: 'rgb(101, 178, 252)',
    400: 'rgb(50, 149, 251)',
    500: 'rgb(0, 119, 250)',
    600: 'rgb(0, 98, 214)',
    700: 'rgb(0, 79, 179)',
    800: 'rgb(0, 61, 143)',
    900: 'rgb(0, 44, 107)',
  },
  purple: {
    50: 'rgb(247, 233, 247)',
    100: 'rgb(239, 202, 240)',
    200: 'rgb(221, 155, 224)',
    300: 'rgb(201, 111, 209)',
    400: 'rgb(180, 73, 194)',
    500: 'rgb(158, 40, 179)',
    600: 'rgb(135, 30, 158)',
    700: 'rgb(113, 22, 138)',
    800: 'rgb(92, 15, 117)',
    900: 'rgb(73, 10, 97)',
  },
  pink: {
    50: 'rgb(253, 236, 239)',
    100: 'rgb(251, 207, 216)',
    200: 'rgb(246, 160, 181)',
    300: 'rgb(242, 115, 150)',
    400: 'rgb(237, 72, 123)',
    500: 'rgb(233, 30, 99)',
    600: 'rgb(197, 19, 86)',
    700: 'rgb(162, 11, 72)',
    800: 'rgb(126, 5, 58)',
    900: 'rgb(90, 1, 43)',
  },
  indigo: {
    50: 'rgb(243, 237, 249)',
    100: 'rgb(226, 209, 244)',
    200: 'rgb(196, 167, 233)',
    300: 'rgb(166, 127, 221)',
    400: 'rgb(136, 91, 210)',
    500: 'rgb(106, 58, 199)',
    600: 'rgb(87, 47, 179)',
    700: 'rgb(70, 37, 158)',
    800: 'rgb(54, 28, 138)',
    900: 'rgb(40, 20, 117)',
  },
  amber: {
    50: 'rgb(254, 251, 235)',
    100: 'rgb(252, 245, 206)',
    200: 'rgb(249, 232, 158)',
    300: 'rgb(246, 216, 111)',
    400: 'rgb(243, 198, 65)',
    500: 'rgb(240, 177, 20)',
    600: 'rgb(200, 138, 15)',
    700: 'rgb(160, 102, 10)',
    800: 'rgb(120, 70, 6)',
    900: 'rgb(80, 43, 3)',
  },
  lightGreen: {
    50: 'rgb(243, 248, 236)',
    100: 'rgb(227, 240, 208)',
    200: 'rgb(200, 226, 165)',
    300: 'rgb(173, 211, 126)',
    400: 'rgb(147, 197, 91)',
    500: 'rgb(123, 182, 60)',
    600: 'rgb(100, 152, 48)',
    700: 'rgb(78, 121, 38)',
    800: 'rgb(57, 91, 27)',
    900: 'rgb(37, 61, 18)',
  },
};

export const fontFamily = `Inter, Noto Serif SC, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`;
export const fontColor = colors.gray[500];
export const darkFontColor = colors.gray[50];
export const darkFillColor = colors.gray[50];

export const textStyle = {
  fontFamily,
  fontSize: 10,
  fill: fontColor,
};

export const darkTextStyle = {
  fontFamily,
  fontSize: 10,
  fill: darkFontColor,
};

export const colors10 = [
  colors.blue[400],
  colors.green[400],
  colors.yellow[400],
  colors.indigo[400],
  colors.red[400],
  colors.purple[400],
  colors.lightGreen[400],
  colors.pink[400],
  colors.amber[400],
];

export const colors20 = [
  colors.blue[400],
  colors.green[400],
  colors.yellow[400],
  colors.indigo[400],
  colors.red[400],
  colors.purple[400],
  colors.lightGreen[400],
  colors.pink[400],
  colors.amber[400],

  colors.blue[300],
  colors.green[300],
  colors.indigo[300],
  colors.purple[300],
  colors.lightGreen[300],
  colors.yellow[300],
  colors.red[300],
  colors.pink[300],
  colors.amber[300],
];

export const axis = {
  title: null,
  tickLine: null,
  subTickLine: null,
  line: { style: { opacity: 0.45, fill: fontColor } },
  grid: {
    line: {
      style: { opacity: 0.15, fill: fontColor, lineDash: [8, 8, 8] },
    },
  },
  label: {
    style: textStyle,
  },
};

export const darkAxis = {
  title: null,
  tickLine: null,
  subTickLine: null,
  line: { style: { opacity: 0.45, stroke: darkFillColor } },
  grid: {
    line: {
      style: { opacity: 0.15, stroke: darkFillColor, lineDash: [8, 8, 8] },
    },
  },
  label: {
    style: darkTextStyle,
  },
};

export const legend = {
  title: { style: textStyle },
  itemName: { spacing: 8, style: { ...textStyle, lineHeight: 1.5 } },
};

export const darkLegend = {
  title: { style: darkTextStyle },
  itemName: { spacing: 8, style: { ...darkTextStyle, lineHeight: 1.5 } },
};

export const tooltip = {
  showTitle: true,
  showMarkers: false,
  follow: true,
  shared: true,
  showCrosshairs: true,
  crosshairs: {
    type: 'xy',
    follow: false,
    line: {
      style: {
        opacity: 0.5,
        stroke: colors10[0],
        lineDash: [6, 6, 6],
      },
    },
  },
};

export const darkTooltip = {
  showTitle: true,
  showMarkers: false,
  follow: true,
  shared: true,
  showCrosshairs: true,
  crosshairs: {
    type: 'xy',
    follow: false,
    line: {
      style: {
        opacity: 0.5,
        stroke: colors.gray[50],
        lineDash: [6, 6, 6],
      },
    },
  },
};

export const annotation = {};
export const darkAnnotation = {};

export const registerChartTheme = () => {
  registerTheme('light', {
    defaultColor: colors.primary[400],
    subColor: colors.blue[400],
    semanticRed: colors.red[400],
    semanticGreen: colors.green[400],
    fontFamily,
    padding: 'auto',

    minColumnWidth: 2, // 柱状图最小宽度，像素值

    colors10,
    colors20,

    labels: {
      style: textStyle,
    },
    pieLabels: {
      style: textStyle,
    },
    components: {
      axis: { common: axis },
      legend: { common: legend },
      tooltip: { common: tooltip },
      annotation: { common: annotation },
    },
  });

  registerTheme('dark', {
    defaultColor: colors.primary[400],
    subColor: colors.blue[400],
    semanticRed: colors.red[400],
    semanticGreen: colors.green[400],
    fontFamily,
    padding: 'auto',

    minColumnWidth: 2, // 柱状图最小宽度，像素值

    colors10,
    colors20,

    labels: {
      style: darkTextStyle,
    },
    pieLabels: {
      style: darkTextStyle,
    },
    components: {
      axis: { common: darkAxis },
      legend: { common: darkLegend },
      tooltip: { common: tooltip },
      annotation: { common: annotation },
    },
  });
};
