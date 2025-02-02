import { useState } from "react"
import { ConfigProvider, Layout } from "antd"

import "./App.css"
import { customTheme } from "./const"

import { CustomHeader } from "./views/CustomHeader"
import { CustomFooter } from "./views/CustomFooter"
import { HomeView } from "./views/HomeView"
import { SubrockView } from "./views/SubrockView"
import { LaunchesView } from "./views/LaunchesView"
import { MissionView } from "./views/MissionView"

const { Header, Content, Footer } = Layout

function App() {
  const [view, setView] = useState<"home" | "subrock" | "launches" | "mission">(
    "home"
  )

  return (
    <ConfigProvider theme={customTheme}>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <CustomHeader setView={setView} view={view} />
        </Header>
        <Content id="content" style={contentStyle}>
          {view === "home" && <HomeView setView={setView} />}
          {view === "subrock" && <SubrockView setView={setView} />}
          {view === "launches" && <LaunchesView />}
          {view === "mission" && <MissionView />}
        </Content>
        <Footer>
          <CustomFooter />
        </Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default App

const layoutStyle: React.CSSProperties = {
  color: "#fff",
  textAlign: "center",
  overflow: "hidden",
  height: "100%",
}

const headerStyle: React.CSSProperties = {
  height: 72,
  padding: 0,
  position: "fixed",
  top: 0,
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  width: "100%",
}

const contentStyle: React.CSSProperties = {
  height: `calc(100vh - 200px - ${headerStyle.height}px)`,
  paddingTop: headerStyle.height,
  overflow: "auto",
}
