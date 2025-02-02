import { Button, Typography } from "antd"
import { DownOutlined } from "@ant-design/icons"

import { Container } from "../components/Container"
import Sr01Silo from "../assets/SR-01_Silo.png"
import { Dispatch } from "react"
import { SetStateAction } from "react"

const { Title } = Typography

export const HomeView = ({
  setView,
}: {
  setView: Dispatch<SetStateAction<"home" | "subrock" | "launches" | "mission">>
}) => {
  return (
    <div>
      <Title level={2}>Home</Title>
      <Container>
        <Title
          level={3}
          onClick={() => {
            const content = document.getElementById("content")
            setView("subrock")
            if (content) content.scrollTop = 0
          }}
          style={{
            marginTop: "22rem",
            color: "#bada55",
            cursor: "pointer",
          }}
        >
          SubRock by Sublime Rocket Co
        </Title>
        <Title level={4} style={{ color: "#fff", marginBottom: "3rem" }}>
          The rocket that started it all
        </Title>
        <DownOutlined style={{ fontSize: "1.5rem" }} />
      </Container>
      <Container doubleHeight={true}>
        <div style={containerStyle}>
          <div style={imageContainerStyle} />
          <div style={textContainerStyle}>
            <div style={{ height: "50%" }}>
              <Title
                level={2}
                style={{
                  color: "#242424",
                  marginTop: "40%",
                }}
              >
                Future Launches
              </Title>
              <Title
                level={3}
                style={{
                  color: "#242424",
                  marginBottom: "3rem",
                }}
              >
                Check out the launch schedule.
              </Title>
              <Button
                onClick={() => {
                  const content = document.getElementById("content")
                  setView("launches")
                  if (content) content.scrollTop = 0
                }}
              >
                View Schedule
              </Button>
            </div>
            <div style={{ height: "50%" }}>
              <Title
                level={2}
                style={{
                  color: "#242424",
                  marginTop: "40%",
                }}
              >
                Mission
              </Title>
              <Title
                level={3}
                style={{ color: "#242424", marginBottom: "3rem" }}
              >
                Learn more about our mission.
              </Title>
              <Button
                onClick={() => {
                  const content = document.getElementById("content")
                  setView("mission")
                  if (content) content.scrollTop = 0
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

const containerStyle: React.CSSProperties = {
  backgroundColor: "rgb(186, 218, 85, 0.85)",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100vw",
}

const imageContainerStyle: React.CSSProperties = {
  background: `url(${Sr01Silo})`,
  backgroundSize: "cover",
  backgroundPosition: "45% center",
  backgroundRepeat: "no-repeat",
  width: "50%",
  height: "100%",
  display: "block",
  paddingTop: "100%",
}

const textContainerStyle: React.CSSProperties = {
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}
