export default function Header() {
  return (
    <header
      style={{
        padding: "1rem",
        background: "#F5F5F5",
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
      {/* Left side: Logo + Title */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src="/Images/LaTrobeLogo.png" alt="Logo" width={60} height={60} />
        <h1
          style={{
            margin: 0,
            font: "bold 24px/1.2 Arial, Helvetica, sans-serif",
            color: "#E4002B", // La Trobe red
          }}
        >
          La Trobe Digital Twin
        </h1>
      </div>

      {/* Right side */}
      <div style={{ marginLeft: "auto", display: "flex", gap: "1rem" }}>
        <a
          href="/"
          style={{
            color: "black",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Home
        </a>
        <a
          href="/about"
          style={{
            color: "black",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          About
        </a>
      </div>

    </header>
  );
}
