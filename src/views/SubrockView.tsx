import { Dispatch, SetStateAction } from "react"
import { Button, Image, Statistic, Typography } from "antd"
import { DownOutlined } from "@ant-design/icons"

import { isMobile } from "../const"
import subrock from "../assets/SR-01_Silo.png"

import { Container } from "../components/Container"

const { Title } = Typography

type SubrockViewTypes = {
  setView: Dispatch<SetStateAction<"launches" | "home" | "subrock" | "mission">>
}

export const SubrockView = ({ setView }: SubrockViewTypes) => {
  return (
    <div>
      <Container>
        <Title
          level={3}
          style={{
            color: "#bada55",
            marginTop: isMobile ? "13rem" : "22rem",
          }}
        >
          SubRock by Sublime Rocket Co
        </Title>
        <Title level={4} style={{ color: "#fff", marginBottom: "3rem" }}>
          The rocket that started it all
        </Title>
        <DownOutlined style={{ fontSize: "1.5rem" }} />
      </Container>
      <Container>
        <div style={statisticContainerRightStyle}>
          <Statistic
            style={statisticStyle}
            title="SR01"
            value="SR01 is the first rocket we designed and 3D printed. It is an all black rocket with 95% reusability. Created in January 2025."
          />
          <div style={imageStyle}>
            <Image preview={false} src={subrock} />
          </div>
        </div>
      </Container>
      <Container>
        <div style={statisticContainerLeftStyle}>
          <Statistic
            style={statisticLeftStyle}
            title="SR02"
            value="SR02 is the first color rocket we designed and 3D printed. It is a multi-color rocket with 95% reusability. Created in January 2025."
          />
          <div style={imageStyle}>
            <Image preview={false} src={subrock} />
          </div>
        </div>
      </Container>
      <Container>
        <div style={statisticContainerRightStyle}>
          <Statistic
            style={statisticAltStyle}
            title="Future Launches"
            value="SR01 will be launched in the coming weeks. Check out the launch schedule."
          />
          <div style={ctaStyles}>
            <Title
              level={5}
              style={{
                color: "#242424",
                marginBottom: "1rem",
                marginTop: "1rem",
                textAlign: "left",
              }}
            >
              Dont miss future launches!
            </Title>
            <Button
              onClick={() => {
                const content = document.getElementById("content")
                setView("launches")
                if (content) content.scrollTop = 0
              }}
              size="large"
            >
              Launch Schedule
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

const statisticStyle: React.CSSProperties = {
  margin: "0 auto",
  marginRight: isMobile ? "auto" : "4%",
  marginBottom: isMobile ? "2rem" : "0",
  paddingTop: isMobile ? "4rem" : "0",
  width: isMobile ? "80%" : "48%",
}
const statisticLeftStyle: React.CSSProperties = {
  margin: "0 auto",
  marginLeft: isMobile ? "auto" : "4%",
  marginBottom: isMobile ? "2rem" : "0",
  paddingTop: isMobile ? "4rem" : "0",
  width: isMobile ? "80%" : "48%",
}
const statisticAltStyle: React.CSSProperties = {
  margin: "0 auto",
  marginRight: isMobile ? "auto" : "4%",
  marginBottom: isMobile ? "2rem" : "0",
  paddingTop: isMobile ? "4rem" : "0",
  width: isMobile ? "80%" : "63%",
}

const statisticContainerRightStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "900px",
  margin: "0 auto",
}
const statisticContainerLeftStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: isMobile ? "column" : "row-reverse",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "900px",
  margin: "0 auto",
}
const imageStyle: React.CSSProperties = {
  backdropFilter: "blur(20px)",
  borderRadius: "5rem 3rem 7rem 1rem",
  backgroundColor: "#bada55",
  display: "flex",
  alignItems: "center",
  width: isMobile ? "50%" : "48%",
}
const ctaStyles: React.CSSProperties = {
  backdropFilter: "blur(20px)",
  borderRadius: "5rem 3rem 7rem 1rem",
  backgroundColor: "#bada55",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "3rem 2.5rem",
  width: isMobile ? "75%" : "33%",
}
