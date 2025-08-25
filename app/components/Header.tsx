type HeaderProps = {
  title?: string;
  leftSide?: string;
};

export default function Header({
  title = "La Trobe Digital Twin",
  leftSide = "left Area",
}: HeaderProps) {
  return (
    <header
      style={{
        padding: "1rem",
        background: "grey",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      {/* Left side: Student info */}
      <div>{leftSide}</div>

      {/* Centered title */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      >
        <h1 id="title" style={{ margin: 0 }}>
          {title}
        </h1>
      </div>
    </header>
  );
}
