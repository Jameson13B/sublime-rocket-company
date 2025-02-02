import { Typography } from "antd"
import "../App.css"

const { Title } = Typography

type CustomHeaderProps = {
  setView: (view: "home" | "subrock" | "launches" | "mission") => void
  view: "home" | "subrock" | "launches" | "mission"
}

export const CustomHeader = ({ setView, view }: CustomHeaderProps) => {
  return (
    <div style={headerStyle}>
      <Title
        style={{ ...noMargin, cursor: "pointer", color: "#bada55" }}
        onClick={() => {
          const content = document.getElementById("content")

          setView("home")
          if (content) content.scrollTop = 0
        }}
      >
        Sublime Rocket Co.
      </Title>
      <div className="nav" style={navStyle}>
        <Title
          className="navLink"
          level={5}
          style={{
            ...noMargin,
            borderBottom: view === "subrock" ? `3px solid #bada55` : "none",
          }}
          onClick={() => {
            const content = document.getElementById("content")

            setView("subrock")
            if (content) content.scrollTop = 0
          }}
        >
          SubRock
        </Title>
        <Title
          className="navLink"
          level={5}
          style={{
            ...noMargin,
            borderBottom: view === "launches" ? `3px solid #bada55` : "none",
          }}
          onClick={() => {
            const content = document.getElementById("content")

            setView("launches")
            if (content) content.scrollTop = 0
          }}
        >
          Launches
        </Title>
        <Title
          className="navLink"
          level={5}
          style={{
            ...noMargin,
            borderBottom: view === "mission" ? `3px solid #bada55` : "none",
          }}
          onClick={() => {
            const content = document.getElementById("content")

            setView("mission")
            if (content) content.scrollTop = 0
          }}
        >
          Mission
        </Title>
      </div>
    </div>
  )
}

const headerStyle: React.CSSProperties = {
  display: "flex",
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
