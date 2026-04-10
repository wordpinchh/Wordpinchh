"use client";

import { useState, useEffect } from "react";
import { portfolioSamples } from "@/data/portfolioSamples";
import emailjs from '@emailjs/browser';

// ── colours (matching CSS vars from original) ────────────────────────────────
const C = {
  bg:   "#0E0D0A",
  s1:   "#161410",
  s2:   "#1E1B15",
  b1:   "rgba(255,255,255,0.07)",
  b2:   "rgba(255,255,255,0.13)",
  tx:   "#F0EDE6",
  mu:   "#7A7268",
  mu2:  "#3D3930",
  lm:   "#CAFF4A",
  lm2:  "rgba(202,255,74,0.08)",
  lm3:  "rgba(202,255,74,0.2)",
};

// ── shared input style ───────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  background: C.s2,
  border: `1px solid ${C.b2}`,
  borderRadius: "8px",
  padding: "11px 14px",
  fontFamily: "'Libre Baskerville', serif",
  fontSize: "14px",
  color: C.tx,
  outline: "none",
  width: "100%",
  appearance: "none" as const,
  transition: "border-color .2s, background .2s",
};

// ── intent buttons ───────────────────────────────────────────────────────────
const INTENTS = [
  { value: "looking-to-hire",   title: "Looking to hire",         sub: "Exploring Wordpinchh services" },
  { value: "specific-service",  title: "Need a specific service", sub: "SEO, LinkedIn, Website Copy…"  },
  { value: "research",          title: "Research / benchmarking", sub: "Comparing agencies"             },
  { value: "just-browsing",     title: "Just curious",            sub: "Exploring the work"             },
];

// ── types ────────────────────────────────────────────────────────────────────
interface GateModalProps {
  isOpen: boolean;
  pendingId: string | null;
  onClose: () => void;
  /** called after success animation — parent should then open ContentModal */
  onUnlocked: () => void;
}

// ── component ────────────────────────────────────────────────────────────────
export default function GateModal({ isOpen, pendingId, onClose, onUnlocked }: GateModalProps) {
  const [name,           setName]           = useState("");
  const [phone,          setPhone]          = useState("");
  const [email,          setEmail]          = useState("");
  const [service,        setService]        = useState("");
  const [intent,         setIntent]         = useState("");
  const [showSuccess,    setShowSuccess]    = useState(false);
  const [focusedField,   setFocusedField]   = useState<string | null>(null);

  // reset form when modal opens fresh
  useEffect(() => {
    if (isOpen) {
      setShowSuccess(false);
    }
  }, [isOpen]);

  // close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const sample = pendingId ? portfolioSamples[pendingId] : null;

  const handleSubmit = async () => {
    if (!name || !phone || !email || !intent) {
      alert("Please fill in all required fields and select why you're browsing.");
      return;
    }

    try {
      // Initialize EmailJS (using the same configuration as contact form)
      emailjs.init("msBKOPZLM6rN0C45D");
      
      // Send email using EmailJS
      const templateParams = {
        from_name: name,
        from_email: email,
        phone: phone,
        intent: intent,
        sample_title: sample?.title || 'Portfolio Sample',
        timestamp: new Date().toLocaleString(),
      };
      
      const result = await emailjs.send(
        'service_15r1l2y',    // SMTP service ID (same as contact form)
        'template_0oog8qf',   // Portfolio access template ID
        templateParams
      );
      
      if (result.status === 200) {
        setShowSuccess(true);
        setTimeout(() => {
          onClose();
          onUnlocked();
        }, 1800);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      // Still show success message for better UX
      setShowSuccess(true);
      setTimeout(() => {
        onClose();
        onUnlocked();
      }, 1800);
    }
  };

  const labelStyle = (field: string): React.CSSProperties => ({
    fontFamily: "'DM Mono', monospace",
    fontSize: "9px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: focusedField === field ? C.lm : C.mu,
    transition: "color .2s",
  });

  return (
    // backdrop
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(12px)",
        zIndex: 9500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "all" : "none",
        transition: "opacity .3s",
      }}
    >
      {/* box */}
      <div
        style={{
          background: C.s1,
          border: `1px solid ${C.b2}`,
          borderRadius: "20px",
          width: "100%",
          maxWidth: "580px",
          overflow: "hidden",
          transform: isOpen ? "translateY(0)" : "translateY(24px)",
          transition: "transform .4s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* ── FORM SECTION ── */}
        {!showSuccess && (
          <div>
            {/* HEAD */}
            <div style={{ padding: "28px 32px 22px", borderBottom: `1px solid ${C.b1}`, position: "relative" }}>
              {/* close */}
              <button
                onClick={onClose}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = C.tx; (e.currentTarget as HTMLButtonElement).style.borderColor = C.tx; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = C.mu; (e.currentTarget as HTMLButtonElement).style.borderColor = C.b2; }}
                style={{
                  position: "absolute", top: "18px", right: "18px",
                  width: "30px", height: "30px",
                  border: `1px solid ${C.b2}`, background: "none",
                  color: C.mu, borderRadius: "50%", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "13px", fontFamily: "'DM Mono', monospace",
                  transition: "all .2s",
                }}
              >✕</button>

              {/* eyebrow */}
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: "9px",
                letterSpacing: ".2em", textTransform: "uppercase",
                color: C.lm, marginBottom: "10px",
                display: "flex", alignItems: "center", gap: "8px",
              }}>
                <span style={{ width: "14px", height: "1px", background: C.lm, display: "inline-block" }} />
                Unlock this sample
              </div>

              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.8rem",
                fontWeight: 800, textTransform: "uppercase", lineHeight: 1,
                color: C.tx, marginBottom: "8px",
              }}>
                {sample ? `Unlock: ${sample.title}` : "Read the Full Article"}
              </h2>

              <p style={{ fontSize: "13px", lineHeight: 1.65, color: C.mu, fontStyle: "italic" }}>
                Share a few details to unlock this sample — and all future samples in your session.
              </p>
            </div>

            {/* UNLOCK CHIPS */}
            <div style={{
              display: "flex", gap: "8px",
              padding: "16px 32px",
              borderBottom: `1px solid ${C.b1}`,
              flexWrap: "wrap",
            }}>
              {["Full piece unlocked", "All 11 samples for this session", "No spam, ever"].map(chip => (
                <div key={chip} style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "5px 12px",
                  background: C.lm2, border: `1px solid ${C.lm3}`,
                  borderRadius: "20px",
                  fontFamily: "'DM Mono', monospace", fontSize: "9px",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: C.lm,
                }}>
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: C.lm, flexShrink: 0 }} />
                  {chip}
                </div>
              ))}
            </div>

            {/* FORM */}
            <div style={{ padding: "22px 32px 28px", display: "flex", flexDirection: "column", gap: 0 }}>

              {/* Name + Phone row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "10px" }}>
                {/* Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <label style={labelStyle("name")}>Your name *</label>
                  <input
                    type="text" value={name} placeholder="Jane Smith"
                    onChange={e => setName(e.target.value)}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      ...inputStyle,
                      borderColor: focusedField === "name" ? C.lm : C.b2,
                      background: focusedField === "name" ? "rgba(202,255,74,.03)" : C.s2,
                    }}
                  />
                </div>
                {/* Phone */}
                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  <label style={labelStyle("phone")}>Mobile number *</label>
                  <input
                    type="tel" value={phone} placeholder="+91 98765 43210"
                    onChange={e => setPhone(e.target.value)}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    style={{
                      ...inputStyle,
                      borderColor: focusedField === "phone" ? C.lm : C.b2,
                      background: focusedField === "phone" ? "rgba(202,255,74,.03)" : C.s2,
                    }}
                  />
                </div>
              </div>

              {/* Email full row */}
              <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "14px" }}>
                <label style={labelStyle("email")}>Email address *</label>
                <input
                  type="email" value={email} placeholder="you@company.com"
                  onChange={e => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...inputStyle,
                    borderColor: focusedField === "email" ? C.lm : C.b2,
                    background: focusedField === "email" ? "rgba(202,255,74,.03)" : C.s2,
                  }}
                />
              </div>

              {/* Intent label */}
              <label style={{
                fontFamily: "'DM Mono', monospace", fontSize: "9px",
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: C.mu, marginBottom: "8px", display: "block",
              }}>
                Why are you viewing our portfolio? *
              </label>

              {/* Intent grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "10px" }}>
                {INTENTS.map(({ value, title, sub }) => {
                  const sel = intent === value;
                  return (
                    <button
                      key={value}
                      onClick={() => setIntent(value)}
                      style={{
                        padding: "10px 12px",
                        border: `1px solid ${sel ? C.lm : C.b2}`,
                        borderRadius: "8px",
                        background: sel ? C.lm2 : "none",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all .2s",
                        display: "flex", flexDirection: "column", gap: "3px",
                      }}
                      onMouseEnter={e => { if (!sel) (e.currentTarget as HTMLButtonElement).style.background = C.s2; }}
                      onMouseLeave={e => { if (!sel) (e.currentTarget as HTMLButtonElement).style.background = "none"; }}
                    >
                      <span style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: ".85rem", fontWeight: 700,
                        textTransform: "uppercase", letterSpacing: "0.04em",
                        color: sel ? C.lm : C.mu, transition: "color .2s",
                      }}>{title}</span>
                      <span style={{
                        fontSize: "10px",
                        color: sel ? "rgba(202,255,74,.4)" : C.mu2,
                        fontStyle: "italic", transition: "color .2s",
                      }}>{sub}</span>
                    </button>
                  );
                })}
              </div>

              {/* Service select (optional) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: 0, marginTop: "12px" }}>
                <label style={labelStyle("service")}>Which service interests you most? (optional)</label>
                <select
                  value={service}
                  onChange={e => setService(e.target.value)}
                  onFocus={() => setFocusedField("service")}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...inputStyle,
                    borderColor: focusedField === "service" ? C.lm : C.b2,
                    background: focusedField === "service" ? "rgba(202,255,74,.03)" : C.s2,
                    color: service ? C.tx : C.mu2,
                  }}
                >
                  <option value="">Select a service</option>
                  <option>SEO Blog Writing</option>
                  <option>LinkedIn Ghostwriting</option>
                  <option>Website Copy</option>
                  <option>Landing Page Copywriting</option>
                  <option>GEO Optimization</option>
                  <option>AEO Optimization</option>
                  <option>AI Content Strategy</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.9"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
                style={{
                  width: "100%",
                  padding: "15px 22px",
                  background: C.lm,
                  color: C.bg,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "15px", fontWeight: 700,
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  border: "none", borderRadius: "10px",
                  cursor: "pointer",
                  transition: "opacity .2s, transform .15s",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  marginTop: "14px",
                }}
              >
                <span>Unlock &amp; Read Now</span>
                <span style={{
                  width: "30px", height: "30px",
                  background: "rgba(0,0,0,0.15)",
                  borderRadius: "7px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "14px", flexShrink: 0,
                }}>→</span>
              </button>

              {/* note */}
              <p style={{
                fontFamily: "'DM Mono', monospace", fontSize: "9px",
                letterSpacing: "0.08em", color: C.mu2,
                textAlign: "center", marginTop: "10px",
              }}>
                Your details are never shared or sold · One-time unlock for this session
              </p>
            </div>
          </div>
        )}

        {/* ── SUCCESS STATE ── */}
        {showSuccess && (
          <div style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            textAlign: "center",
            padding: "56px 32px 48px",
            gap: "16px",
          }}>
            <div style={{
              width: "60px", height: "60px", borderRadius: "50%",
              background: C.lm2, border: `1px solid ${C.lm3}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "24px",
            }}>✦</div>

            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "1.8rem", fontWeight: 800,
              textTransform: "uppercase", letterSpacing: "-0.01em",
              color: C.tx,
            }}>Unlocked.</div>

            <p style={{ fontSize: "14px", lineHeight: 1.7, color: C.mu, fontStyle: "italic", maxWidth: "340px" }}>
              Opening the full sample now. All 11 pieces are now accessible in this session.
            </p>

            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: "10px",
              letterSpacing: "0.1em", color: C.lm, textTransform: "uppercase",
            }}>Loading your sample...</div>
          </div>
        )}
      </div>
    </div>
  );
}