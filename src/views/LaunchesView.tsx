import { Typography } from "antd"
import { Container } from "../components/Container"
import { DownOutlined } from "@ant-design/icons"
const { Title } = Typography

export const LaunchesView = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <Title level={2}>Launches</Title>
      <Container>
        <Title level={3} style={{ marginTop: "22rem", color: "#bada55" }}>
          SR01 - Est. Launch: Feb 16, 2025
        </Title>
        <Title level={4} style={{ marginBottom: "0rem" }}>
          The first launch of the SubRock rocket. This launch will be the first
          of many. Launch is scheduled for February 16, 2025. Stay tuned for
          updates.
        </Title>
        <DownOutlined style={{ fontSize: "1.5rem", marginTop: "3rem" }} />
      </Container>
      <Container>
        <Title level={3} style={{ marginTop: "22rem", color: "#bada55" }}>
          SR02 - Est. Launch: Feb 16, 2025
        </Title>
        <Title level={4} style={{ marginBottom: "0rem" }}>
          The second launch of the SubRock rocket. This is our first rocket in
          color. Launch is scheduled for February 16, 2025. Stay tuned for
          updates.
        </Title>
      </Container>
    </div>
  )
}
