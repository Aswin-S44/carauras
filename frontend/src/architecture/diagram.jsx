import { useState } from "react";

const colors = {
  bg: "#0a0a0f",
  surface: "#12121a",
  card: "#1a1a26",
  border: "#2a2a3d",
  accent: "#ff6b35",
  accent2: "#4ecdc4",
  accent3: "#ffe66d",
  text: "#e8e8f0",
  muted: "#7a7a9a",
  purple: "#7c3aed",
  green: "#22c55e",
  blue: "#3b82f6",
  red: "#ef4444",
};

const Section = ({ title, children, accent = colors.accent }) => (
  <div
    style={{
      background: colors.card,
      border: `1px solid ${colors.border}`,
      borderRadius: 16,
      padding: 28,
      marginBottom: 24,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: `linear-gradient(90deg, ${accent}, transparent)`,
      }}
    />
    <h2
      style={{
        fontFamily: "'Courier New', monospace",
        color: accent,
        fontSize: 13,
        letterSpacing: 3,
        textTransform: "uppercase",
        marginBottom: 20,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <span style={{ opacity: 0.4 }}>▶</span> {title}
    </h2>
    {children}
  </div>
);

const Badge = ({ children, color = colors.accent }) => (
  <span
    style={{
      background: color + "22",
      color,
      border: `1px solid ${color}44`,
      borderRadius: 6,
      padding: "2px 10px",
      fontSize: 11,
      fontFamily: "monospace",
      fontWeight: 700,
      letterSpacing: 1,
    }}
  >
    {children}
  </span>
);

const Block = ({ label, sub, color, icon, w = 120 }) => (
  <div
    style={{
      background: color + "18",
      border: `1.5px solid ${color}55`,
      borderRadius: 10,
      padding: "10px 14px",
      width: w,
      textAlign: "center",
      flexShrink: 0,
    }}
  >
    <div style={{ fontSize: 20, marginBottom: 4 }}>{icon}</div>
    <div
      style={{
        color,
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "monospace",
        letterSpacing: 0.5,
      }}
    >
      {label}
    </div>
    {sub && (
      <div style={{ color: colors.muted, fontSize: 9, marginTop: 3 }}>
        {sub}
      </div>
    )}
  </div>
);

const Arrow = ({ dir = "right", color = colors.muted }) => {
  const styles = {
    right: { content: "→", writing: "horizontal-tb" },
    down: { content: "↓", writing: "horizontal-tb" },
  };
  return (
    <div
      style={{
        color,
        fontSize: dir === "right" ? 20 : 18,
        opacity: 0.6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 4px",
      }}
    >
      {dir === "right" ? "→" : "↓"}
    </div>
  );
};

const DBCard = ({ name, type, color, reasons, icon }) => (
  <div
    style={{
      background: colors.surface,
      border: `1.5px solid ${color}44`,
      borderRadius: 12,
      padding: 20,
      flex: 1,
      minWidth: 200,
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 12,
      }}
    >
      <span style={{ fontSize: 24 }}>{icon}</span>
      <div>
        <div
          style={{
            color,
            fontWeight: 700,
            fontSize: 14,
            fontFamily: "monospace",
          }}
        >
          {name}
        </div>
        <div style={{ color: colors.muted, fontSize: 10 }}>{type}</div>
      </div>
    </div>
    {reasons.map((r, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          gap: 8,
          marginBottom: 6,
          alignItems: "flex-start",
        }}
      >
        <span style={{ color, fontSize: 10, marginTop: 2 }}>✦</span>
        <span style={{ color: colors.text, fontSize: 11, lineHeight: 1.5 }}>
          {r}
        </span>
      </div>
    ))}
  </div>
);

const APIRow = ({ method, path, desc, auth }) => {
  const mc = {
    GET: colors.green,
    POST: colors.blue,
    PUT: colors.accent2,
    DELETE: colors.red,
    PATCH: colors.accent3,
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "8px 12px",
        borderRadius: 8,
        background: colors.surface,
        marginBottom: 6,
      }}
    >
      <span
        style={{
          color: mc[method] || colors.muted,
          fontWeight: 700,
          fontSize: 11,
          fontFamily: "monospace",
          width: 50,
        }}
      >
        {method}
      </span>
      <span
        style={{
          color: colors.text,
          fontSize: 11,
          fontFamily: "monospace",
          flex: 1,
        }}
      >
        {path}
      </span>
      <span style={{ color: colors.muted, fontSize: 10, flex: 2 }}>{desc}</span>
      {auth && <Badge color={colors.accent3}>🔒 JWT</Badge>}
    </div>
  );
};

const Layer = ({ label, items, color }) => (
  <div
    style={{
      border: `1.5px dashed ${color}44`,
      borderRadius: 12,
      padding: "12px 16px",
      marginBottom: 10,
    }}
  >
    <div
      style={{
        color,
        fontSize: 10,
        fontFamily: "monospace",
        letterSpacing: 2,
        marginBottom: 10,
        opacity: 0.7,
      }}
    >
      {label}
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            background: color + "18",
            border: `1px solid ${color}33`,
            borderRadius: 8,
            padding: "6px 12px",
            color: colors.text,
            fontSize: 11,
            fontFamily: "monospace",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

export default function Diagram() {
  const [tab, setTab] = useState("architecture");

  const tabs = [
    { id: "architecture", label: "Architecture" },
    { id: "diagram", label: "Block Diagram" },
    { id: "database", label: "Database Design" },
    { id: "api", label: "API Design" },
    { id: "flow", label: "User Flows" },
    { id: "infra", label: "Infrastructure" },
  ];

  return (
    <div
      style={{
        background: colors.bg,
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        color: colors.text,
        padding: "0 0 60px 0",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, #12121a 0%, #1a0a2e 100%)`,
          borderBottom: `1px solid ${colors.border}`,
          padding: "32px 40px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 300,
            height: 300,
            background: `radial-gradient(circle, ${colors.accent}18 0%, transparent 70%)`,
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 8,
          }}
        >
          <span style={{ fontSize: 32 }}>🚗</span>
          <div>
            <h1
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: 22,
                fontWeight: 900,
                letterSpacing: 2,
                color: colors.text,
                margin: 0,
              }}
            >
              USED CAR MARKETPLACE
            </h1>
            <div
              style={{
                color: colors.muted,
                fontSize: 11,
                letterSpacing: 3,
                marginTop: 2,
              }}
            >
              SYSTEM DESIGN DOCUMENT · v1.0
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}
        >
          <Badge color={colors.accent}>Microservice-Ready</Badge>
          <Badge color={colors.accent2}>PostgreSQL + Redis</Badge>
          <Badge color={colors.accent3}>REST API</Badge>
          <Badge color={colors.purple}>JWT Auth</Badge>
          <Badge color={colors.green}>Cloud Storage</Badge>
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 0,
          borderBottom: `1px solid ${colors.border}`,
          background: colors.surface,
          overflowX: "auto",
          padding: "0 40px",
        }}
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              background: "none",
              border: "none",
              borderBottom:
                tab === t.id
                  ? `2px solid ${colors.accent}`
                  : "2px solid transparent",
              color: tab === t.id ? colors.accent : colors.muted,
              fontFamily: "monospace",
              fontSize: 11,
              letterSpacing: 1.5,
              padding: "14px 20px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: "32px 40px", maxWidth: 1100, margin: "0 auto" }}>
        {/* ARCHITECTURE TAB */}
        {tab === "architecture" && (
          <div>
            <Section title="System Overview" accent={colors.accent}>
              <p
                style={{
                  color: colors.muted,
                  fontSize: 13,
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                A{" "}
                <strong style={{ color: colors.text }}>
                  monolithic-first, microservice-ready
                </strong>{" "}
                architecture for a used car marketplace. Users can browse
                listings publicly, while sellers need accounts to post cars. The
                system is built for{" "}
                <strong style={{ color: colors.text }}>scalability</strong>,
                clean separation of concerns, and a smooth UX.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  {
                    label: "Frontend",
                    val: "React.js / Next.js",
                    color: colors.blue,
                  },
                  {
                    label: "Backend",
                    val: "Node.js + Express",
                    color: colors.green,
                  },
                  {
                    label: "Primary DB",
                    val: "PostgreSQL",
                    color: colors.accent2,
                  },
                  { label: "Cache", val: "Redis", color: colors.red },
                  {
                    label: "Storage",
                    val: "AWS S3 / Cloudinary",
                    color: colors.accent3,
                  },
                  {
                    label: "Auth",
                    val: "JWT + Refresh Tokens",
                    color: colors.purple,
                  },
                  {
                    label: "Search",
                    val: "Elasticsearch (phase 2)",
                    color: colors.accent,
                  },
                  {
                    label: "Deploy",
                    val: "AWS / Railway / Render",
                    color: colors.muted,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: item.color + "11",
                      border: `1px solid ${item.color}33`,
                      borderRadius: 8,
                      padding: "8px 14px",
                      flex: "1 1 180px",
                    }}
                  >
                    <div
                      style={{
                        color: item.color,
                        fontSize: 9,
                        fontFamily: "monospace",
                        letterSpacing: 2,
                        marginBottom: 4,
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        color: colors.text,
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {item.val}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Core Modules" accent={colors.accent2}>
              {[
                {
                  icon: "🔐",
                  name: "Auth Service",
                  color: colors.purple,
                  desc: "Handles user registration, login, JWT issuance, refresh token rotation, password reset via email OTP. Stores hashed passwords (bcrypt). Supports role-based access: Buyer, Seller, Admin.",
                  features: [
                    "Register / Login",
                    "JWT + Refresh Tokens",
                    "Role: Buyer / Seller / Admin",
                    "Email OTP Reset",
                    "OAuth2 (Google) — Phase 2",
                  ],
                },
                {
                  icon: "🚗",
                  name: "Listing Service",
                  color: colors.accent,
                  desc: "Core of the platform. Sellers create/edit/delete car listings with photos. Each listing has status: ACTIVE, SOLD, PENDING, REJECTED. Admins can moderate listings.",
                  features: [
                    "Create / Edit / Delete Listing",
                    "Multi-photo Upload (S3)",
                    "Status Management",
                    "Admin Moderation",
                    "View Count Tracking",
                  ],
                },
                {
                  icon: "🔍",
                  name: "Search & Filter",
                  color: colors.accent3,
                  desc: "Buyers can filter by make, model, year, price range, mileage, location, fuel type, transmission. Phase 2 adds full-text search via Elasticsearch for fuzzy matching.",
                  features: [
                    "Multi-filter Query",
                    "Sort by Price/Date/Mileage",
                    "Pagination (cursor-based)",
                    "Saved Searches",
                    "Elasticsearch (Phase 2)",
                  ],
                },
                {
                  icon: "💬",
                  name: "Messaging / Inquiry",
                  color: colors.accent2,
                  desc: "Buyers can send inquiries to sellers per listing. A simple thread-based message system. No real-time needed in Phase 1 — polling works. Phase 2 adds WebSocket.",
                  features: [
                    "Inquiry per Listing",
                    "Thread-based Messages",
                    "Unread Count Badge",
                    "Email Notification",
                    "WebSocket — Phase 2",
                  ],
                },
                {
                  icon: "👤",
                  name: "User Profile",
                  color: colors.green,
                  desc: "Sellers have public profiles with their active listings, rating, and join date. Buyers have private profiles with saved/favorited listings and inquiry history.",
                  features: [
                    "Public Seller Profile",
                    "Saved / Favorited Cars",
                    "Rating & Reviews",
                    "Account Settings",
                    "Avatar Upload",
                  ],
                },
                {
                  icon: "🛡️",
                  name: "Admin Panel",
                  color: colors.red,
                  desc: "Admins can moderate listings (approve/reject), ban users, view analytics dashboard, manage reported listings, and see platform-wide stats.",
                  features: [
                    "Approve / Reject Listings",
                    "Ban / Unban Users",
                    "Platform Analytics",
                    "Reported Content Queue",
                    "Audit Logs",
                  ],
                },
              ].map((mod, i) => (
                <div
                  key={i}
                  style={{
                    background: colors.surface,
                    border: `1px solid ${mod.color}33`,
                    borderRadius: 12,
                    padding: 18,
                    marginBottom: 12,
                    display: "flex",
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: "1 1 300px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 8,
                      }}
                    >
                      <span style={{ fontSize: 20 }}>{mod.icon}</span>
                      <span
                        style={{
                          color: mod.color,
                          fontWeight: 700,
                          fontSize: 14,
                          fontFamily: "monospace",
                        }}
                      >
                        {mod.name}
                      </span>
                    </div>
                    <p
                      style={{
                        color: colors.muted,
                        fontSize: 12,
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {mod.desc}
                    </p>
                  </div>
                  <div
                    style={{
                      flex: "1 1 200px",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      alignContent: "flex-start",
                    }}
                  >
                    {mod.features.map((f, j) => (
                      <div
                        key={j}
                        style={{
                          background: mod.color + "15",
                          color: mod.color,
                          border: `1px solid ${mod.color}33`,
                          borderRadius: 6,
                          padding: "3px 10px",
                          fontSize: 10,
                          fontFamily: "monospace",
                        }}
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Section>
          </div>
        )}

        {/* BLOCK DIAGRAM TAB */}
        {tab === "diagram" && (
          <div>
            <Section title="High-Level Block Diagram" accent={colors.accent}>
              {/* Client Layer */}
              <Layer
                label="CLIENT LAYER"
                color={colors.blue}
                items={[
                  "Web Browser (React/Next.js)",
                  "Mobile App (React Native — Phase 2)",
                ]}
              />

              <div
                style={{
                  textAlign: "center",
                  color: colors.muted,
                  fontSize: 11,
                  fontFamily: "monospace",
                  margin: "6px 0",
                }}
              >
                ↕ HTTPS / REST API
              </div>

              {/* CDN + Gateway */}
              <Layer
                label="EDGE LAYER"
                color={colors.accent3}
                items={[
                  "CDN (CloudFront / Cloudflare)",
                  "API Gateway / Nginx Reverse Proxy",
                  "Rate Limiter",
                  "SSL Termination",
                ]}
              />

              <div
                style={{
                  textAlign: "center",
                  color: colors.muted,
                  fontSize: 11,
                  fontFamily: "monospace",
                  margin: "6px 0",
                }}
              >
                ↕ Internal Routing
              </div>

              {/* Backend Services */}
              <Layer
                label="APPLICATION LAYER"
                color={colors.accent}
                items={[
                  "Auth Service",
                  "Listing Service",
                  "Search Service",
                  "Messaging Service",
                  "User Service",
                  "Admin Service",
                  "Media Service (uploads)",
                ]}
              />

              <div style={{ display: "flex", gap: 12, marginBottom: 10 }}>
                <div
                  style={{
                    flex: 1,
                    textAlign: "center",
                    color: colors.muted,
                    fontSize: 11,
                    fontFamily: "monospace",
                  }}
                >
                  ↕ Read/Write
                </div>
                <div
                  style={{
                    flex: 1,
                    textAlign: "center",
                    color: colors.muted,
                    fontSize: 11,
                    fontFamily: "monospace",
                  }}
                >
                  ↕ Cache Lookup
                </div>
                <div
                  style={{
                    flex: 1,
                    textAlign: "center",
                    color: colors.muted,
                    fontSize: 11,
                    fontFamily: "monospace",
                  }}
                >
                  ↕ Store Media
                </div>
              </div>

              {/* Data Layer */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <Layer
                    label="PRIMARY DATABASE"
                    color={colors.accent2}
                    items={[
                      "PostgreSQL",
                      "Users · Listings · Messages · Reviews",
                    ]}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <Layer
                    label="CACHE LAYER"
                    color={colors.red}
                    items={["Redis", "Sessions · Search Cache · Rate Limits"]}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <Layer
                    label="OBJECT STORAGE"
                    color={colors.accent3}
                    items={["AWS S3 / Cloudinary", "Car Photos · Avatars"]}
                  />
                </div>
              </div>

              {/* Background jobs */}
              <Layer
                label="BACKGROUND SERVICES"
                color={colors.purple}
                items={[
                  "Email Queue (Nodemailer / SendGrid)",
                  "Image Optimization Worker",
                  "Listing Expiry Job (CRON)",
                  "Search Index Sync (Phase 2)",
                ]}
              />
            </Section>

            <Section title="Request Flow Diagram" accent={colors.accent2}>
              <div style={{ overflowX: "auto" }}>
                {/* Browse flow */}
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      color: colors.accent2,
                      fontSize: 11,
                      fontFamily: "monospace",
                      letterSpacing: 2,
                      marginBottom: 10,
                    }}
                  >
                    FLOW 1 — BROWSE LISTINGS (Public)
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      flexWrap: "wrap",
                    }}
                  >
                    <Block
                      label="User Browser"
                      icon="🌐"
                      color={colors.blue}
                      w={100}
                    />
                    <Arrow />
                    <Block
                      label="CDN / Nginx"
                      icon="⚡"
                      color={colors.accent3}
                      w={100}
                    />
                    <Arrow />
                    <Block
                      label="Listing API"
                      icon="🚗"
                      color={colors.accent}
                      w={100}
                    />
                    <Arrow />
                    <Block
                      label="Redis Cache"
                      sub="HIT?"
                      icon="⚡"
                      color={colors.red}
                      w={100}
                    />
                    <Arrow />
                    <Block
                      label="PostgreSQL"
                      sub="MISS"
                      icon="🗄️"
                      color={colors.accent2}
                      w={100}
                    />
                  </div>
                </div>

                {/* Post listing flow */}
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      color: colors.accent,
                      fontSize: 11,
                      fontFamily: "monospace",
                      letterSpacing: 2,
                      marginBottom: 10,
                    }}
                  >
                    FLOW 2 — POST A LISTING (Authenticated)
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      flexWrap: "wrap",
                    }}
                  >
                    <Block
                      label="Seller"
                      icon="👤"
                      color={colors.green}
                      w={80}
                    />
                    <Arrow />
                    <Block
                      label="Auth Check"
                      sub="JWT"
                      icon="🔐"
                      color={colors.purple}
                      w={90}
                    />
                    <Arrow />
                    <Block
                      label="Upload Photos"
                      sub="S3"
                      icon="📸"
                      color={colors.accent3}
                      w={100}
                    />
                    <Arrow />
                    <Block
                      label="Save Listing"
                      sub="PostgreSQL"
                      icon="🗄️"
                      color={colors.accent2}
                      w={110}
                    />
                    <Arrow />
                    <Block
                      label="Invalidate Cache"
                      sub="Redis"
                      icon="🔄"
                      color={colors.red}
                      w={110}
                    />
                  </div>
                </div>

                {/* Auth flow */}
                <div>
                  <div
                    style={{
                      color: colors.purple,
                      fontSize: 11,
                      fontFamily: "monospace",
                      letterSpacing: 2,
                      marginBottom: 10,
                    }}
                  >
                    FLOW 3 — LOGIN FLOW
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      flexWrap: "wrap",
                    }}
                  >
                    <Block label="User" icon="👤" color={colors.blue} w={80} />
                    <Arrow />
                    <Block
                      label="Auth Service"
                      icon="🔐"
                      color={colors.purple}
                      w={100}
                    />
                    <Arrow />
                    <Block
                      label="Verify Hash"
                      sub="bcrypt"
                      icon="🔒"
                      color={colors.accent}
                      w={100}
                    />
                    <Arrow />
                    <Block
                      label="Issue JWT"
                      sub="+ Refresh"
                      icon="🎫"
                      color={colors.green}
                      w={100}
                    />
                    <Arrow />
                    <Block
                      label="Store Session"
                      sub="Redis"
                      icon="💾"
                      color={colors.red}
                      w={100}
                    />
                  </div>
                </div>
              </div>
            </Section>
          </div>
        )}

        {/* DATABASE TAB */}
        {tab === "database" && (
          <div>
            <Section
              title="Why PostgreSQL as Primary Database?"
              accent={colors.accent2}
            >
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  marginBottom: 20,
                }}
              >
                <DBCard
                  name="PostgreSQL"
                  type="Relational SQL"
                  color={colors.accent2}
                  icon="🐘"
                  reasons={[
                    "ACID transactions — critical for listing status changes and payments",
                    "Complex JOINs across users, listings, messages, reviews",
                    "JSONB column for flexible car specs (extra attributes)",
                    "Full-text search built-in (tsvector) for Phase 1 search",
                    "PostGIS extension for location-based queries",
                    "Proven at scale — Airbnb, Shopify use PostgreSQL",
                  ]}
                />
                <DBCard
                  name="Redis"
                  type="In-Memory Cache"
                  color={colors.red}
                  icon="⚡"
                  reasons={[
                    "Cache popular listing queries (avoids DB hits)",
                    "Store JWT refresh token blacklist",
                    "Rate limiting counters per IP",
                    "Session data storage",
                    "Pub/Sub for real-time messaging (Phase 2)",
                  ]}
                />
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <DBCard
                  name="AWS S3 / Cloudinary"
                  type="Object Storage"
                  color={colors.accent3}
                  icon="🪣"
                  reasons={[
                    "Store car images — not in DB (keeps DB lean)",
                    "CDN delivery via CloudFront for fast image loads",
                    "Automatic image resizing / thumbnails",
                    "Unlimited scalable storage",
                  ]}
                />
                <DBCard
                  name="Elasticsearch"
                  type="Search Engine (Phase 2)"
                  color={colors.purple}
                  icon="🔍"
                  reasons={[
                    "Fuzzy search: 'camry' matches 'Toyota Camry 2020'",
                    "Faceted filtering with aggregations",
                    "Faster than PostgreSQL for complex search",
                    "Not needed in Phase 1 — PostgreSQL FTS is enough",
                  ]}
                />
              </div>
            </Section>

            <Section title="Database Schema" accent={colors.green}>
              {[
                {
                  table: "users",
                  color: colors.green,
                  cols: [
                    { name: "id", type: "UUID PK" },
                    { name: "email", type: "VARCHAR UNIQUE" },
                    { name: "password_hash", type: "VARCHAR" },
                    { name: "role", type: "ENUM: buyer|seller|admin" },
                    { name: "name", type: "VARCHAR" },
                    { name: "avatar_url", type: "TEXT" },
                    { name: "is_verified", type: "BOOLEAN" },
                    { name: "created_at", type: "TIMESTAMP" },
                  ],
                },
                {
                  table: "listings",
                  color: colors.accent,
                  cols: [
                    { name: "id", type: "UUID PK" },
                    { name: "seller_id", type: "UUID FK → users" },
                    { name: "title", type: "VARCHAR" },
                    { name: "make", type: "VARCHAR" },
                    { name: "model", type: "VARCHAR" },
                    { name: "year", type: "INTEGER" },
                    { name: "price", type: "DECIMAL" },
                    { name: "mileage", type: "INTEGER" },
                    { name: "fuel_type", type: "ENUM" },
                    { name: "transmission", type: "ENUM" },
                    { name: "location", type: "VARCHAR" },
                    { name: "description", type: "TEXT" },
                    { name: "specs", type: "JSONB (flexible)" },
                    {
                      name: "status",
                      type: "ENUM: active|sold|pending|rejected",
                    },
                    { name: "view_count", type: "INTEGER" },
                    { name: "created_at", type: "TIMESTAMP" },
                  ],
                },
                {
                  table: "listing_images",
                  color: colors.accent3,
                  cols: [
                    { name: "id", type: "UUID PK" },
                    { name: "listing_id", type: "UUID FK → listings" },
                    { name: "url", type: "TEXT (S3 URL)" },
                    { name: "is_primary", type: "BOOLEAN" },
                    { name: "sort_order", type: "INTEGER" },
                  ],
                },
                {
                  table: "messages",
                  color: colors.accent2,
                  cols: [
                    { name: "id", type: "UUID PK" },
                    { name: "listing_id", type: "UUID FK → listings" },
                    { name: "sender_id", type: "UUID FK → users" },
                    { name: "receiver_id", type: "UUID FK → users" },
                    { name: "body", type: "TEXT" },
                    { name: "is_read", type: "BOOLEAN" },
                    { name: "created_at", type: "TIMESTAMP" },
                  ],
                },
                {
                  table: "saved_listings",
                  color: colors.purple,
                  cols: [
                    { name: "user_id", type: "UUID FK → users" },
                    { name: "listing_id", type: "UUID FK → listings" },
                    { name: "saved_at", type: "TIMESTAMP" },
                  ],
                },
                {
                  table: "reviews",
                  color: colors.green,
                  cols: [
                    { name: "id", type: "UUID PK" },
                    { name: "reviewer_id", type: "UUID FK" },
                    { name: "seller_id", type: "UUID FK" },
                    { name: "rating", type: "INTEGER (1-5)" },
                    { name: "comment", type: "TEXT" },
                    { name: "created_at", type: "TIMESTAMP" },
                  ],
                },
              ].map((t, i) => (
                <div key={i} style={{ marginBottom: 14 }}>
                  <div
                    style={{
                      color: t.color,
                      fontFamily: "monospace",
                      fontSize: 12,
                      fontWeight: 700,
                      marginBottom: 6,
                    }}
                  >
                    📋 {t.table}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {t.cols.map((c, j) => (
                      <div
                        key={j}
                        style={{
                          background: colors.surface,
                          border: `1px solid ${colors.border}`,
                          borderRadius: 6,
                          padding: "4px 10px",
                          fontSize: 10,
                          fontFamily: "monospace",
                        }}
                      >
                        <span style={{ color: t.color }}>{c.name}</span>
                        <span style={{ color: colors.muted }}> · {c.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Section>
          </div>
        )}

        {/* API TAB */}
        {tab === "api" && (
          <div>
            <Section title="Auth Endpoints" accent={colors.purple}>
              <APIRow
                method="POST"
                path="/api/auth/register"
                desc="Register new user (buyer or seller)"
              />
              <APIRow
                method="POST"
                path="/api/auth/login"
                desc="Login, receive JWT + refresh token"
              />
              <APIRow
                method="POST"
                path="/api/auth/refresh"
                desc="Refresh access token"
              />
              <APIRow
                method="POST"
                path="/api/auth/logout"
                desc="Invalidate refresh token"
                auth
              />
              <APIRow
                method="POST"
                path="/api/auth/forgot-password"
                desc="Send OTP to email"
              />
              <APIRow
                method="POST"
                path="/api/auth/reset-password"
                desc="Reset with OTP + new password"
              />
            </Section>

            <Section title="Listings Endpoints" accent={colors.accent}>
              <APIRow
                method="GET"
                path="/api/listings"
                desc="Get all listings (with filters & pagination)"
              />
              <APIRow
                method="GET"
                path="/api/listings/:id"
                desc="Get single listing details"
              />
              <APIRow
                method="POST"
                path="/api/listings"
                desc="Create new car listing"
                auth
              />
              <APIRow
                method="PUT"
                path="/api/listings/:id"
                desc="Update listing (seller only)"
                auth
              />
              <APIRow
                method="DELETE"
                path="/api/listings/:id"
                desc="Delete listing"
                auth
              />
              <APIRow
                method="PATCH"
                path="/api/listings/:id/status"
                desc="Mark as SOLD"
                auth
              />
              <APIRow
                method="POST"
                path="/api/listings/:id/images"
                desc="Upload photos to listing"
                auth
              />
              <APIRow
                method="GET"
                path="/api/listings/my"
                desc="Get current seller's listings"
                auth
              />
            </Section>

            <Section title="Users & Profiles" accent={colors.green}>
              <APIRow
                method="GET"
                path="/api/users/:id"
                desc="Get public seller profile"
              />
              <APIRow
                method="GET"
                path="/api/users/me"
                desc="Get current user profile"
                auth
              />
              <APIRow
                method="PUT"
                path="/api/users/me"
                desc="Update profile (name, avatar, phone)"
                auth
              />
              <APIRow
                method="GET"
                path="/api/users/me/saved"
                desc="Get saved/favorited listings"
                auth
              />
              <APIRow
                method="POST"
                path="/api/listings/:id/save"
                desc="Save a listing"
                auth
              />
              <APIRow
                method="DELETE"
                path="/api/listings/:id/save"
                desc="Unsave a listing"
                auth
              />
            </Section>

            <Section title="Messages" accent={colors.accent2}>
              <APIRow
                method="POST"
                path="/api/messages"
                desc="Send inquiry to seller about a listing"
                auth
              />
              <APIRow
                method="GET"
                path="/api/messages/inbox"
                desc="Get all conversations"
                auth
              />
              <APIRow
                method="GET"
                path="/api/messages/:threadId"
                desc="Get messages in a thread"
                auth
              />
            </Section>

            <Section title="Admin" accent={colors.red}>
              <APIRow
                method="GET"
                path="/api/admin/listings"
                desc="Get all listings with status filters"
                auth
              />
              <APIRow
                method="PATCH"
                path="/api/admin/listings/:id/approve"
                desc="Approve a listing"
                auth
              />
              <APIRow
                method="PATCH"
                path="/api/admin/listings/:id/reject"
                desc="Reject a listing with reason"
                auth
              />
              <APIRow
                method="GET"
                path="/api/admin/users"
                desc="Get all users"
                auth
              />
              <APIRow
                method="PATCH"
                path="/api/admin/users/:id/ban"
                desc="Ban a user"
                auth
              />
            </Section>
          </div>
        )}

        {/* USER FLOWS TAB */}
        {tab === "flow" && (
          <div>
            {[
              {
                title: "Seller Posts a Car",
                color: colors.accent,
                steps: [
                  "Seller registers with email & password → role: 'seller'",
                  "Confirms email via OTP link (optional Phase 1)",
                  "Goes to 'Post a Car' → fills form: make, model, year, price, mileage, fuel, description",
                  "Uploads 1–10 photos → uploaded to S3, URLs saved to listing_images table",
                  "Listing created with status: PENDING (admin review) or ACTIVE (auto-approve in Phase 1)",
                  "Seller can manage: edit, mark as sold, delete from dashboard",
                ],
              },
              {
                title: "Buyer Browses & Contacts Seller",
                color: colors.accent2,
                steps: [
                  "Buyer visits site — no login needed to browse",
                  "Applies filters: make=Toyota, year≥2018, price≤15000, city=Kochi",
                  "Scrolling paginated grid of listing cards (photo + title + price + mileage)",
                  "Clicks a card → full detail page with photo gallery, specs, seller info",
                  "To contact → must register/login as buyer",
                  "Sends inquiry message → stored in messages table → seller gets email notification",
                  "Can also save listing to favorites",
                ],
              },
              {
                title: "Admin Moderation",
                color: colors.red,
                steps: [
                  "Admin logs in with admin account",
                  "Sees queue of PENDING listings",
                  "Reviews each: approve → status = ACTIVE, visible to public",
                  "Or reject with a reason → seller gets email with reason",
                  "Can ban users who violate policies",
                  "Views platform stats: total listings, new users today, messages sent",
                ],
              },
            ].map((flow, i) => (
              <Section key={i} title={flow.title} accent={flow.color}>
                <div>
                  {flow.steps.map((step, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        gap: 12,
                        marginBottom: 10,
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          background: flow.color + "22",
                          border: `1px solid ${flow.color}55`,
                          color: flow.color,
                          fontSize: 11,
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          fontFamily: "monospace",
                        }}
                      >
                        {j + 1}
                      </div>
                      <p
                        style={{
                          color: colors.text,
                          fontSize: 13,
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>
            ))}
          </div>
        )}

        {/* INFRA TAB */}
        {tab === "infra" && (
          <div>
            <Section title="Deployment Architecture" accent={colors.accent3}>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {[
                  {
                    phase: "Phase 1 — MVP",
                    color: colors.green,
                    stack: [
                      "Frontend: Vercel / Netlify (free tier)",
                      "Backend: Railway or Render (Node.js)",
                      "Database: Railway PostgreSQL or Supabase",
                      "Redis: Upstash Redis (serverless)",
                      "Images: Cloudinary (free tier)",
                      "Email: Resend.com or SendGrid free",
                      "Cost: ~$0–$20/month",
                    ],
                  },
                  {
                    phase: "Phase 2 — Scale",
                    color: colors.accent,
                    stack: [
                      "Frontend: AWS CloudFront + S3",
                      "Backend: AWS EC2 / ECS (Docker)",
                      "DB: AWS RDS PostgreSQL (Multi-AZ)",
                      "Cache: AWS ElastiCache Redis",
                      "Storage: AWS S3 + CloudFront CDN",
                      "Search: Elasticsearch (AWS OpenSearch)",
                      "Queue: SQS + Lambda for background jobs",
                    ],
                  },
                ].map((p, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      minWidth: 250,
                      background: colors.surface,
                      border: `1.5px solid ${p.color}44`,
                      borderRadius: 12,
                      padding: 18,
                    }}
                  >
                    <div
                      style={{
                        color: p.color,
                        fontWeight: 700,
                        fontSize: 13,
                        fontFamily: "monospace",
                        marginBottom: 14,
                      }}
                    >
                      {p.phase}
                    </div>
                    {p.stack.map((s, j) => (
                      <div
                        key={j}
                        style={{ display: "flex", gap: 8, marginBottom: 8 }}
                      >
                        <span
                          style={{ color: p.color, fontSize: 10, marginTop: 2 }}
                        >
                          ▸
                        </span>
                        <span style={{ color: colors.text, fontSize: 12 }}>
                          {s}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Security Checklist" accent={colors.red}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "✅ Passwords hashed with bcrypt (salt rounds 12)",
                  "✅ JWT with short expiry (15min) + refresh tokens",
                  "✅ Refresh tokens stored in Redis, rotated on use",
                  "✅ Rate limiting on auth endpoints (5 req/min)",
                  "✅ SQL injection prevention via parameterized queries",
                  "✅ XSS prevention — sanitize all user inputs",
                  "✅ CORS configured — whitelist frontend domain only",
                  "✅ Helmet.js for HTTP security headers",
                  "✅ File upload validation — type + size limits",
                  "✅ Role-based access control (RBAC) on all routes",
                  "✅ HTTPS everywhere (SSL/TLS)",
                  "✅ Environment variables for all secrets (never in code)",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: colors.surface,
                      border: `1px solid ${colors.border}`,
                      borderRadius: 8,
                      padding: "6px 12px",
                      fontSize: 11,
                      color: colors.text,
                      flex: "1 1 280px",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Performance Optimizations" accent={colors.accent2}>
              {[
                {
                  tip: "Redis caching for listings",
                  desc: "Cache /api/listings responses for 5min. Invalidate when a new listing is posted or edited. Reduces DB load by ~70% for browse traffic.",
                },
                {
                  tip: "Pagination (cursor-based)",
                  desc: "Use cursor-based pagination instead of OFFSET. Much faster at scale. Return 20 cards per page with a next_cursor token.",
                },
                {
                  tip: "Image optimization",
                  desc: "Use Cloudinary's auto-format and auto-quality. Serve WebP to modern browsers. Generate thumbnails server-side on upload.",
                },
                {
                  tip: "Database indexes",
                  desc: "Index: listings.make, listings.model, listings.price, listings.status, listings.seller_id, listings.created_at. Use EXPLAIN ANALYZE to tune.",
                },
                {
                  tip: "Lazy loading & code splitting",
                  desc: "React lazy load listing images. Next.js automatic code splitting. Only load admin routes for admin users.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: colors.surface,
                    border: `1px solid ${colors.border}`,
                    borderRadius: 10,
                    padding: "12px 16px",
                    marginBottom: 8,
                    display: "flex",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      color: colors.accent2,
                      fontSize: 16,
                      flexShrink: 0,
                    }}
                  >
                    ⚡
                  </span>
                  <div>
                    <div
                      style={{
                        color: colors.accent2,
                        fontWeight: 700,
                        fontSize: 12,
                        fontFamily: "monospace",
                        marginBottom: 4,
                      }}
                    >
                      {item.tip}
                    </div>
                    <div
                      style={{
                        color: colors.muted,
                        fontSize: 12,
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </Section>
          </div>
        )}
      </div>
    </div>
  );
}
