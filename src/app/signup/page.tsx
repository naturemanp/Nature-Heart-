"use client";

import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

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
          maxWidth: "450px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            marginBottom: "10px",
          }}
        >
          🌿
        </div>

        <h1
          style={{
            fontSize: "38px",
            margin: "0 0 8px",
            color: "#66bb6a",
          }}
        >
          Nature Heart
        </h1>

        <p
          style={{
            color: "#b7c8bd",
            fontSize: "16px",
            marginBottom: "30px",
          }}
        >
          Create your account and start connecting.
        </p>

        <div
          style={{
            background: "#0d2115",
            border: "1px solid #1d3d27",
            borderRadius: "18px",
            padding: "28px",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "26px",
              marginBottom: "24px",
            }}
          >
            Create Account
          </h2>

          <label>Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "14px",
              marginTop: "8px",
              marginBottom: "18px",
              borderRadius: "10px",
              border: "1px solid #315a3f",
              background: "#07130d",
              color: "white",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "14px",
              marginTop: "8px",
              marginBottom: "18px",
              borderRadius: "10px",
              border: "1px solid #315a3f",
              background: "#07130d",
              color: "white",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />

          <label>Password</label>

          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "8px",
                marginBottom: "18px",
                borderRadius: "10px",
                border: "1px solid #315a3f",
                background: "#07130d",
                color: "white",
                boxSizing: "border-box",
                fontSize: "16px",
              }}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "17px",
                background: "transparent",
                border: "none",
                color: "#66bb6a",
                cursor: "pointer",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="button"
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              borderRadius: "12px",
              background: "#2e7d32",
              color: "white",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Create Account 🌿
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#9caf9f",
              marginTop: "22px",
            }}
          >
            Already have an account?{" "}
            <a
              href="/login"
              style={{
                color: "#66bb6a",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Log In
            </a>
          </p>
        </div>

        <p
          style={{
            color: "#718174",
            fontSize: "13px",
            marginTop: "20px",
          }}
        >
          By creating an account, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </main>
  );
            }
