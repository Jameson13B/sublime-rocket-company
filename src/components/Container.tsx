export const Container = ({
  bgColor = "transparent",
  bgImage = null,
  doubleHeight = false,
  last = false,
  children,
}: {
  bgColor?: string
  bgImage?: React.ReactNode | null
  doubleHeight?: boolean
  last?: boolean
  children: React.ReactNode
}) => {
  const height = last ? "75dvh" : "100dvh"
  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: doubleHeight ? "175dvh" : height,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: bgImage ? `url(${bgImage})` : "transparent",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "overlay",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    </div>
  )
}
