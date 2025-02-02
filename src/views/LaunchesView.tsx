import { Typography } from "antd"
import { Container } from "../components/Container"
import { DownOutlined } from "@ant-design/icons"

import { isMobile } from "../const"

const { Title } = Typography

export const LaunchesView = () => {
  return (
    <div style={rootStyles}>
      <Container>
        <Title level={3} style={containerTitleStyles}>
          SR01 - Est. Launch: Feb 16, 2025
        </Title>
        <Title level={4} style={containerTextStyles}>
          The first launch of the SubRock rocket. This launch will be the first
          of many. Launch is scheduled for February 16, 2025. Stay tuned for
          updates.
        </Title>
        <DownOutlined style={{ fontSize: "1.5rem", marginTop: "3rem" }} />
      </Container>
      <Container>
        <Title level={3} style={containerTitleStyles}>
          SR02 - Est. Launch: Feb 16, 2025
        </Title>
        <Title level={4} style={containerTextStyles}>
          The second launch of the SubRock rocket. This is our first rocket in
          color. Launch is scheduled for February 16, 2025. Stay tuned for
          updates.
        </Title>
      </Container>
    </div>
  )
}

const rootStyles: React.CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
}
const containerTitleStyles: React.CSSProperties = {
  marginTop: isMobile ? "13rem" : "22rem",
  color: "#bada55",
}
const containerTextStyles: React.CSSProperties = {
  marginBottom: "0rem",
}
