"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user already responded
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setTimeout(() => setVisible(true), 1500);
    }

    // Detect dark/light mode
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mq.matches);
    const handler = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const accept = () => {
    Cookies.set("cookie_consent", "accepted", { expires: 365 });
    setVisible(false);
  };

  const decline = () => {
    Cookies.set("cookie_consent", "declined", { expires: 365 });
    setVisible(false);
  };

  if (!visible) return null;

  const bg = darkMode ? "#1a1a1a" : "#ffffff";
  const text = darkMode ? "#f0ede6" : "#1a1a1a";
  const subtext = darkMode ? "#888" : "#666";
  const border = darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const acceptBg = "#CAFF4A";
  const acceptText = "#0b0b09";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 999999,
        width: "320px",
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: "16px",
        padding: "20px",
        boxShadow: darkMode
          ? "0 8px 32px rgba(0,0,0,0.5)"
          : "0 8px 32px rgba(0,0,0,0.12)",
        animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Icon + Title */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
        <div style={{
          width: "32px", height: "32px",
          background: "rgba(202,255,74,0.15)",
          borderRadius: "8px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "16px"
        }}>
          🍪
        </div>
        <span style={{ fontSize: "15px", fontWeight: 600, color: text }}>
          Cookie Preferences
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize: "13px", color: subtext, lineHeight: 1.6, margin: "0 0 16px" }}>
        We use cookies to understand how you use our site and improve your experience. 
        Analytics help us see what's working.
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={accept}
          style={{
            flex: 1,
            padding: "10px",
            background: acceptBg,
            color: acceptText,
            border: "none",
            borderRadius: "10px",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Accept All
        </button>
        <button
          onClick={decline}
          style={{
            flex: 1,
            padding: "10px",
            background: "transparent",
            color: subtext,
            border: `1px solid ${border}`,
            borderRadius: "10px",
            fontSize: "13px",
            fontWeight: 500,
            cursor: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = text;
            e.currentTarget.style.color = text;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = border;
            e.currentTarget.style.color = subtext;
          }}
        >
          Decline
        </button>
      </div>

      {/* Privacy link */}
      <p style={{ fontSize: "11px", color: subtext, textAlign: "center", marginTop: "12px", marginBottom: 0 }}>
        By accepting, you agree to our{" "}
        <a href="/privacy" style={{ color: "#CAFF4A", textDecoration: "none" }}>
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
