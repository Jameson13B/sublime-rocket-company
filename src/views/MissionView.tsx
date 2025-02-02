import { Statistic, Typography } from "antd"
import { DownOutlined } from "@ant-design/icons"
import { Container } from "../components/Container"

const { Title } = Typography

const rocketsBuilt = 1
const completedLaunches = 0

export const MissionView = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <Title level={2}>Our Mission</Title>
      <Container>
        <Title level={3} style={{ marginTop: "22rem", color: "#bada55" }}>
          Memories and Magic
        </Title>
        <Title level={4} style={{ color: "#fff", marginBottom: "3rem" }}>
          A Moment You'll Never Forget
        </Title>
        <DownOutlined style={{ fontSize: "1.5rem" }} />
      </Container>
      <Container>
        <div style={statisticContainerStyle}>
          <Statistic
            style={statisticStyle}
            title="Rockets Built"
            value={rocketsBuilt}
          />
          <Statistic
            style={statisticStyle}
            title="Completed Launches"
            value={completedLaunches}
          />
          <Statistic
            style={statisticStyle}
            title="Reused Rockets"
            value={completedLaunches - rocketsBuilt}
          />
        </div>
      </Container>
      <Container>
        <Statistic
          style={statistic2Style}
          title="Reusability"
          value="We design and 3D print rockets that are 95% reusable, resulting in less waste. Since rockets are modular, we can reuse the same rocket for multiple launches and only print and replace specific parts as needed."
        />
      </Container>
      <Container last={true}>
        <Statistic
          style={statistic2Style}
          title="History"
          value="The first step was simply a random thought. The thought was followed up with a few hours of research. The first rocket we printed was the sexy, all black SR01. The first launch which will be SR01 will be in the coming weeks."
        />
      </Container>
    </div>
  )
}

const statisticStyle: React.CSSProperties = {
  margin: "0 auto",
  width: "50%",
}
const statistic2Style: React.CSSProperties = {
  margin: "0 auto",
}
const statisticContainerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
}
