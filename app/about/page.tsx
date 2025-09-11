import Header from "../components/Header";
import styles from "../page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <Header />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: "calc(100vh - 80px)",
          marginTop: "120px", 
          width: "100%",
          padding: "0 1rem",
          color: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "800px", width: "100%" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
            About the La Trobe 3D Campus Viewer
          </h1>
          <p style={{ fontSize: "1.125rem", marginBottom: "1.5rem" }}>
            The <strong>La Trobe 3D Campus Viewer</strong> is an interactive VR experience
            that allows you to explore the campus in full 3D. Navigate through buildings,
            outdoor spaces, and facilities with real-time points of interest. This immersive
            platform provides students, staff, and visitors with a realistic and engaging
            virtual tour of La Trobe University.
          </p>

          <a
            href="/VR/Defend%20The%20Base.zip"
            download
            style={{
              display: "inline-block",
              background: "#e22333",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              borderRadius: "12px",
              fontWeight: "bold",
            }}
          >
            Download the VR Campus Viewer (EXAMPLE)
          </a>
        </div>
      </main>
    </div>
  );
}