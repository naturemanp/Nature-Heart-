"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    alert("Login system coming soon 🌿");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#07130d",
        color: "white",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          background: "#0d2115",
          border: "1px solid #1d3d27",
          borderRadius: "20px",
          padding: "32px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div style={{ fontSize: "48px", marginBottom: "10px" }}>
            🌿
          </div>

          <h1
            style={{
              fontSize: "32px",
              margin: "0 0 10px",
              color: "#66bb6a",
            }}
          >
            Nature Heart
          </h1>

          <p
            style={{
              color: "#9caf9f",
              margin: 0,
              fontSize: "15px",
            }}
          >
            Welcome back. Your connections are waiting.
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#d8e5da",
            }}
          >
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "1px solid #315f41",
              background: "#07130d",
              color: "white",
              fontSize: "16px",
            }}
          />

          <label
            style={{
              display: "block",
              marginBottom: "8px",
              color: "#d8e5da",
            }}
          >
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              marginBottom: "24px",
              borderRadius: "10px",
              border: "1px solid #315f41",
              background: "#07130d",
              color: "white",
              fontSize: "16px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "10px",
              background: "#2e7d32",
              color: "white",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Log In 🌿
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            color: "#9caf9f",
            marginTop: "25px",
          }}
        >
          Don't have an account?{" "}
          <a
            href="/signup"
            style={{
              color: "#66bb6a",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Create one
          </a>
        </p>

        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
          }}
        >
          <a
            href="/"
            style={{
              color: "#7f9b87",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            ← Back to Nature Heart
          </a>
        </div>
      </div>
    </main>
  );
          }
