import { theme } from "antd"

export const isMobile = window.innerWidth < 768

export const rocketsBuilt = 1
export const completedLaunches = 0

export const customTheme = {
  algorithm: theme.darkAlgorithm,
  components: {
    Layout: {
      headerBg: "#242424",
      bodyBg: "#242424",
      footerBg: "#242424",
    },
    Statistic: {
      contentFontSize: isMobile ? 24 : 48,
      titleFontSize: isMobile ? 16 : 28,
    },
  },
  token: {
    fontFamily: "Helvetica, Arial, sans-serif",
  },
}
