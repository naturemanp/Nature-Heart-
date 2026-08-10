export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#07130d",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "24px",
      }}
    >
      <nav
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#66bb6a",
          }}
        >
          🌿 Nature Heart
        </div>

        <a
  href="/login"
  style={{
    background: "transparent",
    color: "white",
    border: "1px solid #3b5f45",
    borderRadius: "10px",
    padding: "10px 16px",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
  }}
>
  Log In
</a>
      </nav>

      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          padding: "90px 10px 60px",
        }}
      >
        <div
          style={{
            fontSize: "58px",
            marginBottom: "20px",
          }}
        >
          🌿
        </div>

        <h1
          style={{
            fontSize: "clamp(42px, 8vw, 72px)",
            margin: "0",
            lineHeight: "1.05",
          }}
        >
          Nature Heart
        </h1>

        <p
          style={{
            color: "#8bd48f",
            fontSize: "20px",
            marginTop: "18px",
          }}
        >
          Every Connection Begins with Nature Heart.
        </p>

        <p
          style={{
            maxWidth: "600px",
            margin: "25px auto",
            color: "#b8c5bb",
            fontSize: "17px",
            lineHeight: "1.7",
          }}
        >
          Discover new people, build genuine friendships, share interests,
          and create meaningful connections in a community built around you.
        </p>

        <button
          style={{
            background: "#2e7d32",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "15px 28px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(46, 125, 50, 0.25)",
          }}
        >
          Get Started 🌱
        </button>
      </section>

      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "18px",
          paddingBottom: "50px",
        }}
      >
        {[
          {
            icon: "🤝",
            title: "Friendship",
            text: "Meet people who share your interests and build genuine friendships.",
          },
          {
            icon: "🌐",
            title: "Networking",
            text: "Connect with people and discover useful communities and opportunities.",
          },
          {
            icon: "💚",
            title: "Meaningful Connections",
            text: "Create connections that grow naturally around shared interests.",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            style={{
              background: "#0d2115",
              border: "1px solid #1d3d27",
              borderRadius: "18px",
              padding: "25px",
            }}
          >
            <div style={{ fontSize: "32px" }}>{feature.icon}</div>

            <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
              {feature.title}
            </h2>

            <p
              style={{
                color: "#9caf9f",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              {feature.text}
            </p>
          </div>
        ))}
      </section>

      <footer
        style={{
          textAlign: "center",
          borderTop: "1px solid #1d3d27",
          padding: "25px 0",
          color: "#718174",
        }}
      >
        © 2026 Nature Heart
      </footer>
    </main>
  );
      }
