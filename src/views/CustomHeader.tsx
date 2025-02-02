import { Typography } from "antd"
import "../App.css"
import { isMobile } from "../const"

const { Title } = Typography

type CustomHeaderProps = {
  setView: (view: "home" | "subrock" | "launches" | "mission") => void
  view: "home" | "subrock" | "launches" | "mission"
}

export const CustomHeader = ({ setView, view }: CustomHeaderProps) => {
  const handleViewChange = (
    view: "home" | "subrock" | "launches" | "mission"
  ) => {
    const content = document.getElementById("content")
    setView(view)
    if (content) content.scrollTop = 0
  }
  const handleStyleGeneration = (
    variable: "home" | "subrock" | "launches" | "mission"
  ) => ({
    ...noMargin,
    borderBottom: variable === view ? `3px solid #bada55` : "none",
  })

  return (
    <div style={headerStyle}>
      <Title
        style={{ ...noMargin, cursor: "pointer", color: "#bada55" }}
        onClick={() => handleViewChange("home")}
      >
        Sublime Rocket Co.
      </Title>
      <div className="nav" style={navStyle}>
        <Title
          className="navLink"
          level={5}
          style={handleStyleGeneration("subrock")}
          onClick={() => handleViewChange("subrock")}
        >
          SubRock
        </Title>
        <Title
          className="navLink"
          level={5}
          style={handleStyleGeneration("launches")}
          onClick={() => handleViewChange("launches")}
        >
          Launches
        </Title>
        <Title
          className="navLink"
          level={5}
          style={handleStyleGeneration("mission")}
          onClick={() => handleViewChange("mission")}
        >
          Mission
        </Title>
      </div>
    </div>
  )
}

const headerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "900px",
  margin: "0 auto",
}
const noMargin: React.CSSProperties = {
  margin: 0,
}
const navStyle: React.CSSProperties = {
  display: "flex",
  gap: 20,
}
