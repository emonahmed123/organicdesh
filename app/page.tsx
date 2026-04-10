"use client";
import { useState } from "react";

const C = {
  bg: "#F8F7F2",
  card: "#FFFFFF",
  pri: "#2D6A4F",
  priL: "#40916C",
  priP: "#D8F3DC",
  acc: "#E76F51",
  accL: "#F4A261",
  txt: "#1B1B1B",
  mut: "#6B7280",
  bor: "#E5E7EB",
  warn: "#FEF3C7",
  warnT: "#92400E",
  ok: "#D1FAE5",
  okT: "#065F46",
  danger: "#FEE2E2",
  dangerT: "#991B1B",
};

const MEMBERS = [
  {
    id: 1,
    name: "বাবা (Father)",
    conditions: ["ডায়াবেটিস"],
    avatar: "👨",
    color: "#3B82F6",
  },
  {
    id: 2,
    name: "মা (Mother)",
    conditions: ["থাইরয়েড"],
    avatar: "👩",
    color: "#EC4899",
  },
  {
    id: 3,
    name: "দাদি (Grandma)",
    conditions: ["হৃদরোগ", "কিডনি"],
    avatar: "👵",
    color: "#8B5CF6",
  },
  { id: 4, name: "ছেলে (Son)", conditions: [], avatar: "👦", color: "#10B981" },
];

const MON_ITEMS = [
  {
    id: 1,
    name: "পালং শাক (Spinach)",
    price: 20,
    unit: "bunch",
    score: 92,
    img: "🥬",
    memberStatus: [
      { memberId: 1, status: "good", note: "Iron-rich, good for diabetes" },
      {
        memberId: 2,
        status: "caution",
        note: "Limit intake — goitrogens affect thyroid",
      },
      { memberId: 3, status: "good", note: "Heart-friendly, folate-rich" },
      { memberId: 4, status: "good", note: "Great for growing kids" },
    ],
    cookTip: "সোমবার: পালং শাকের ডাল দিয়ে রান্না করুন",
  },
  {
    id: 2,
    name: "টমেটো (Tomato)",
    price: 40,
    unit: "kg",
    score: 88,
    img: "🍅",
    memberStatus: [
      { memberId: 1, status: "good", note: "Low GI, antioxidant lycopene" },
      { memberId: 2, status: "good", note: "Selenium supports thyroid" },
      { memberId: 3, status: "good", note: "Potassium OK in moderation" },
      { memberId: 4, status: "good", note: "Vitamin C boost" },
    ],
    cookTip: "মঙ্গলবার: টমেটো দিয়ে ঝোল তরকারি",
  },
  {
    id: 3,
    name: "লাল শাক (Red Spinach)",
    price: 15,
    unit: "bunch",
    score: 90,
    img: "🌿",
    memberStatus: [
      { memberId: 1, status: "good", note: "Very low calorie, high fiber" },
      {
        memberId: 2,
        status: "caution",
        note: "Contains oxalates — moderate portion",
      },
      { memberId: 3, status: "caution", note: "High oxalate — kidney concern" },
      { memberId: 4, status: "good", note: "Iron and calcium" },
    ],
    cookTip: "বুধবার: লাল শাক ভাজি",
  },
  {
    id: 4,
    name: "ধনেপাতা (Coriander)",
    price: 10,
    unit: "bunch",
    score: 85,
    img: "🌿",
    memberStatus: [
      { memberId: 1, status: "good", note: "Helps regulate blood sugar" },
      { memberId: 2, status: "good", note: "Anti-inflammatory" },
      { memberId: 3, status: "good", note: "Supports digestion" },
      { memberId: 4, status: "good", note: "Vitamin K" },
    ],
    cookTip: "সব রান্নায় ছিটিয়ে দিন — ফ্রেশ থাকবে ৩ দিন",
  },
];

const THU_ITEMS = [
  {
    id: 5,
    name: "করলা (Bitter Gourd)",
    price: 60,
    unit: "kg",
    score: 96,
    img: "🥒",
    memberStatus: [
      { memberId: 1, status: "excellent", note: "Proven to lower blood sugar" },
      { memberId: 2, status: "good", note: "Anti-inflammatory benefits" },
      { memberId: 3, status: "good", note: "Heart-protective compounds" },
      { memberId: 4, status: "neutral", note: "Bitter taste — may not prefer" },
    ],
    cookTip: "বৃহস্পতিবার: করলা ভর্তা",
  },
  {
    id: 6,
    name: "লাউ (Bottle Gourd)",
    price: 35,
    unit: "piece",
    score: 94,
    img: "🫛",
    memberStatus: [
      { memberId: 1, status: "good", note: "Low GI, high water content" },
      { memberId: 2, status: "good", note: "Light and easy to digest" },
      { memberId: 3, status: "excellent", note: "Low potassium — kidney safe" },
      { memberId: 4, status: "good", note: "Hydrating" },
    ],
    cookTip: "শুক্রবার: লাউ দিয়ে মুরগির ঝোল",
  },
  {
    id: 7,
    name: "গাজর (Carrot)",
    price: 45,
    unit: "kg",
    score: 87,
    img: "🥕",
    memberStatus: [
      {
        memberId: 1,
        status: "caution",
        note: "Moderate GI — limit to 1 serving",
      },
      { memberId: 2, status: "good", note: "Beta-carotene supports thyroid" },
      { memberId: 3, status: "good", note: "Heart-healthy fiber" },
      { memberId: 4, status: "good", note: "Great for eyes" },
    ],
    cookTip: "শনিবার: গাজরের হালুয়া (ছোট পরিমাণে)",
  },
  {
    id: 8,
    name: "ফুলকপি (Cauliflower)",
    price: 40,
    unit: "piece",
    score: 83,
    img: "🥦",
    memberStatus: [
      { memberId: 1, status: "good", note: "Very low carb, high fiber" },
      {
        memberId: 2,
        status: "caution",
        note: "Goitrogen — cook well to reduce",
      },
      { memberId: 3, status: "good", note: "Low potassium, heart-safe" },
      { memberId: 4, status: "good", note: "Vitamin C rich" },
    ],
    cookTip: "রবিবার: ফুলকপির রোস্ট",
  },
];

const INSIGHTS = [
  {
    type: "positive",
    icon: "📈",
    text: "করলা consumption helping Father's blood sugar — 3 weeks consistent",
    member: "বাবা",
  },
  {
    type: "warning",
    icon: "⚠️",
    text: "আলু ordered 4 weeks straight — consider মিষ্টি আলু for lower GI",
    member: "Kitchen",
  },
  {
    type: "positive",
    icon: "💪",
    text: "Iron intake up 35% this month from শাক — great for Mother",
    member: "মা",
  },
  {
    type: "tip",
    icon: "💡",
    text: "Try শিম (beans) this week — high fiber, good for everyone",
    member: "All",
  },
];

function Badge({ children, bg = C.priP, color = C.pri }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: 12,
        fontSize: 11,
        fontWeight: 600,
        background: bg,
        color,
        marginRight: 4,
      }}
    >
      {children}
    </span>
  );
}

function StatusDot({ status }) {
  const colors = {
    excellent: "#059669",
    good: "#10B981",
    caution: "#F59E0B",
    neutral: "#9CA3AF",
    avoid: "#EF4444",
  };
  return (
    <span
      style={{
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: colors[status] || "#9CA3AF",
      }}
    />
  );
}

function ScoreRing({ score, size = 48 }) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const off = circ - (score / 100) * circ;
  const color = score >= 90 ? "#059669" : score >= 80 ? "#F59E0B" : "#EF4444";
  return (
    <div
      style={{ position: "relative", width: size, height: size, flexShrink: 0 }}
    >
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={C.bor}
          strokeWidth="4"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeDasharray={circ}
          strokeDashoffset={off}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 800, color }}>{score}</span>
      </div>
    </div>
  );
}

function ProgressBar({ step, total }) {
  return (
    <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: 3,
            borderRadius: 2,
            background: i <= step ? C.pri : C.bor,
          }}
        />
      ))}
    </div>
  );
}

// ─── SCREEN: LANDING ───
function Landing({ go }) {
  return (
    <div style={{ textAlign: "center", padding: "32px 20px" }}>
      <div style={{ fontSize: 48, marginBottom: 4 }}>🌿</div>
      <h1
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: 28,
          color: C.pri,
          margin: 0,
        }}
      >
        Organicdesh
      </h1>
      <p
        style={{
          color: C.mut,
          fontSize: 12,
          letterSpacing: 2,
          margin: "4px 0 24px",
          textTransform: "uppercase",
        }}
      >
        আপনার রান্নাঘর, আপনার স্বাস্থ্য
      </p>
      {[
        {
          n: "1",
          t: "Build your kitchen profile",
          d: "Add family members + health conditions",
        },
        {
          n: "2",
          t: "AI plans your week",
          d: "Mon + Thu deliveries, warnings per member",
        },
        {
          n: "3",
          t: "We deliver, you cook",
          d: "Fresh organic food, split by shelf life",
        },
        {
          n: "4",
          t: "We learn, you improve",
          d: "Health insights from your consumption data",
        },
      ].map((s) => (
        <div
          key={s.n}
          style={{
            display: "flex",
            gap: 12,
            alignItems: "flex-start",
            textAlign: "left",
            margin: "0 auto 12px",
            maxWidth: 340,
            background: C.card,
            border: `1px solid ${C.bor}`,
            borderRadius: 12,
            padding: "12px 16px",
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: C.priP,
              color: C.pri,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 800,
              flexShrink: 0,
            }}
          >
            {s.n}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{s.t}</div>
            <div style={{ fontSize: 12, color: C.mut }}>{s.d}</div>
          </div>
        </div>
      ))}
      <button
        onClick={() => go("kitchen")}
        style={{
          marginTop: 20,
          padding: "14px 40px",
          background: C.pri,
          color: "#fff",
          border: "none",
          borderRadius: 12,
          fontSize: 15,
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Build My Kitchen Profile →
      </button>
    </div>
  );
}

// ─── SCREEN: KITCHEN PROFILE ───
function KitchenProfile({ go }) {
  const [members, setMembers] = useState(MEMBERS);
  const [showAdd, setShowAdd] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <ProgressBar step={0} total={5} />
      <h2
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: 20,
          color: C.pri,
          margin: "0 0 4px",
        }}
      >
        👨‍👩‍👦‍👦 Kitchen profile
      </h2>
      <p style={{ color: C.mut, fontSize: 13, margin: "0 0 16px" }}>
        Add everyone who eats from your kitchen
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {members.map((m) => (
          <div
            key={m.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: C.card,
              border: `1px solid ${C.bor}`,
              borderRadius: 12,
              padding: "14px 16px",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: m.color + "15",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              {m.avatar}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 14 }}>{m.name}</div>
              <div
                style={{
                  display: "flex",
                  gap: 4,
                  marginTop: 4,
                  flexWrap: "wrap",
                }}
              >
                {m.conditions.length > 0 ? (
                  m.conditions.map((c) => (
                    <Badge key={c} bg="#FEE2E2" color="#991B1B">
                      {c}
                    </Badge>
                  ))
                ) : (
                  <Badge bg={C.ok} color={C.okT}>
                    No conditions
                  </Badge>
                )}
              </div>
            </div>
            <div style={{ color: C.mut, fontSize: 11, textAlign: "right" }}>
              <div>Likes: 5</div>
              <div>Avoids: 2</div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowAdd(!showAdd)}
        style={{
          width: "100%",
          marginTop: 12,
          padding: "12px",
          background: "transparent",
          border: `1.5px dashed ${C.bor}`,
          borderRadius: 12,
          fontSize: 13,
          fontWeight: 600,
          color: C.mut,
          cursor: "pointer",
        }}
      >
        + Add family member
      </button>
      {showAdd && (
        <div
          style={{
            marginTop: 12,
            background: C.card,
            border: `1px solid ${C.bor}`,
            borderRadius: 12,
            padding: 16,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              marginBottom: 12,
            }}
          >
            <div>
              <label style={{ fontSize: 11, fontWeight: 600, color: C.mut }}>
                NAME
              </label>
              <input
                placeholder="নাম লিখুন"
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  border: `1px solid ${C.bor}`,
                  borderRadius: 8,
                  fontSize: 13,
                  marginTop: 4,
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div>
              <label style={{ fontSize: 11, fontWeight: 600, color: C.mut }}>
                AGE
              </label>
              <input
                placeholder="বয়স"
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  border: `1px solid ${C.bor}`,
                  borderRadius: 8,
                  fontSize: 13,
                  marginTop: 4,
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>
          <label style={{ fontSize: 11, fontWeight: 600, color: C.mut }}>
            HEALTH CONDITIONS
          </label>
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 6 }}
          >
            {[
              "ডায়াবেটিস",
              "উচ্চ রক্তচাপ",
              "থাইরয়েড",
              "হৃদরোগ",
              "কিডনি",
              "গ্যাস্ট্রিক",
              "অ্যালার্জি",
              "None",
            ].map((c) => (
              <button
                key={c}
                style={{
                  padding: "6px 12px",
                  borderRadius: 16,
                  border: `1px solid ${C.bor}`,
                  background: "#fff",
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => go("plan")}
        style={{
          width: "100%",
          marginTop: 20,
          padding: "14px",
          background: C.pri,
          color: "#fff",
          border: "none",
          borderRadius: 12,
          fontSize: 15,
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Generate Weekly Plan →
      </button>
    </div>
  );
}

// ─── SCREEN: WEEKLY PLAN ───
function WeeklyPlan({ go }) {
  const [delivery, setDelivery] = useState("mon");
  const [expanded, setExpanded] = useState(null);
  const items = delivery === "mon" ? MON_ITEMS : THU_ITEMS;
  const total = items.reduce((s, i) => s + i.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <ProgressBar step={1} total={5} />
      <h2
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: 20,
          color: C.pri,
          margin: "0 0 4px",
        }}
      >
        📋 Weekly food plan
      </h2>
      <p style={{ color: C.mut, fontSize: 12, margin: "0 0 12px" }}>
        AI-generated for your kitchen — 4 members, 3 conditions
      </p>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {[
          {
            key: "mon",
            label: "Monday delivery",
            sub: "Mon–Wed (perishables)",
            icon: "🥬",
          },
          {
            key: "thu",
            label: "Thursday delivery",
            sub: "Thu–Sun (root + staples)",
            icon: "🥕",
          },
        ].map((d) => (
          <button
            key={d.key}
            onClick={() => {
              setDelivery(d.key);
              setExpanded(null);
            }}
            style={{
              flex: 1,
              padding: "12px 10px",
              border: `2px solid ${delivery === d.key ? C.pri : C.bor}`,
              borderRadius: 12,
              background: delivery === d.key ? C.priP : "#fff",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <div style={{ fontSize: 18 }}>{d.icon}</div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 13,
                color: delivery === d.key ? C.pri : C.txt,
                marginTop: 4,
              }}
            >
              {d.label}
            </div>
            <div style={{ fontSize: 11, color: C.mut }}>{d.sub}</div>
          </button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              background: C.card,
              border: `1px solid ${C.bor}`,
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 14px",
                cursor: "pointer",
              }}
              onClick={() => setExpanded(expanded === item.id ? null : item.id)}
            >
              <ScoreRing score={item.score} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>
                  {item.img} {item.name}
                </div>
                <div style={{ fontSize: 11, color: C.mut, marginTop: 2 }}>
                  {item.cookTip}
                </div>
                <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
                  {item.memberStatus.map((ms) => {
                    const member = MEMBERS.find((m) => m.id === ms.memberId);
                    return (
                      <div
                        key={ms.memberId}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 3,
                          padding: "2px 6px",
                          borderRadius: 8,
                          background:
                            ms.status === "caution"
                              ? C.warn
                              : ms.status === "excellent"
                                ? C.ok
                                : "transparent",
                          border: `1px solid ${ms.status === "caution" ? "#FCD34D" : ms.status === "excellent" ? "#6EE7B7" : C.bor}`,
                        }}
                      >
                        <span style={{ fontSize: 12 }}>{member.avatar}</span>
                        <StatusDot status={ms.status} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: C.pri }}>
                  ৳{item.price}
                </div>
                <div style={{ fontSize: 10, color: C.mut }}>/{item.unit}</div>
              </div>
            </div>
            {expanded === item.id && (
              <div
                style={{
                  borderTop: `1px solid ${C.bor}`,
                  padding: "12px 14px",
                  background: "#FAFAF5",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: C.mut,
                    marginBottom: 8,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  Member safety breakdown
                </div>
                {item.memberStatus.map((ms) => {
                  const member = MEMBERS.find((m) => m.id === ms.memberId);
                  return (
                    <div
                      key={ms.memberId}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        padding: "8px 0",
                        borderBottom: `1px solid ${C.bor}`,
                      }}
                    >
                      <span style={{ fontSize: 16 }}>{member.avatar}</span>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          <span style={{ fontWeight: 600, fontSize: 13 }}>
                            {member.name}
                          </span>
                          <Badge
                            bg={
                              ms.status === "caution"
                                ? C.warn
                                : ms.status === "excellent"
                                  ? C.ok
                                  : C.priP
                            }
                            color={
                              ms.status === "caution"
                                ? C.warnT
                                : ms.status === "excellent"
                                  ? C.okT
                                  : C.pri
                            }
                          >
                            {ms.status === "excellent"
                              ? "Excellent"
                              : ms.status === "good"
                                ? "Good"
                                : ms.status === "caution"
                                  ? "⚠ Caution"
                                  : "Neutral"}
                          </Badge>
                        </div>
                        <div
                          style={{ fontSize: 12, color: C.mut, marginTop: 2 }}
                        >
                          {ms.note}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <button
                  style={{
                    marginTop: 10,
                    padding: "6px 14px",
                    borderRadius: 8,
                    border: `1px solid ${C.bor}`,
                    background: "#fff",
                    fontSize: 11,
                    fontWeight: 600,
                    color: C.acc,
                    cursor: "pointer",
                  }}
                >
                  🔄 Swap this item
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 16,
          padding: "12px 16px",
          background: C.priP,
          borderRadius: 12,
        }}
      >
        <div>
          <div style={{ fontSize: 12, color: C.pri, fontWeight: 600 }}>
            {delivery === "mon" ? "Monday" : "Thursday"} delivery total
          </div>
          <div style={{ fontSize: 11, color: C.mut }}>{items.length} items</div>
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, color: C.pri }}>
          ৳{total}
        </div>
      </div>
      <button
        onClick={() => go("insights")}
        style={{
          width: "100%",
          marginTop: 12,
          padding: "14px",
          background: C.pri,
          color: "#fff",
          border: "none",
          borderRadius: 12,
          fontSize: 15,
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        View Health Insights →
      </button>
    </div>
  );
}

// ─── SCREEN: HEALTH INSIGHTS ───
function HealthInsights({ go }) {
  return (
    <div style={{ padding: 20 }}>
      <ProgressBar step={2} total={5} />
      <h2
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: 20,
          color: C.pri,
          margin: "0 0 4px",
        }}
      >
        📊 Health insights
      </h2>
      <p style={{ color: C.mut, fontSize: 12, margin: "0 0 16px" }}>
        Based on 4 weeks of your kitchen's consumption
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
          marginBottom: 16,
        }}
      >
        {[
          {
            label: "Avg health score",
            value: "89",
            trend: "+4 vs last month",
            good: true,
          },
          {
            label: "Items consumed",
            value: "32",
            trend: "12 unique vegetables",
            good: true,
          },
          {
            label: "Warnings heeded",
            value: "78%",
            trend: "Caution items limited",
            good: true,
          },
          {
            label: "Swap rate",
            value: "18%",
            trend: "Low = good recs",
            good: true,
          },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              background: C.card,
              border: `1px solid ${C.bor}`,
              borderRadius: 12,
              padding: "14px 12px",
            }}
          >
            <div style={{ fontSize: 11, color: C.mut, fontWeight: 600 }}>
              {s.label}
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: C.pri,
                marginTop: 2,
              }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: 11, color: s.good ? C.okT : C.warnT }}>
              {s.trend}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{ fontSize: 13, fontWeight: 700, color: C.txt, marginBottom: 8 }}
      >
        AI recommendations
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          marginBottom: 20,
        }}
      >
        {INSIGHTS.map((ins, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              gap: 10,
              padding: "12px 14px",
              background:
                ins.type === "positive"
                  ? C.ok
                  : ins.type === "warning"
                    ? C.warn
                    : "#EFF6FF",
              borderRadius: 12,
              border: `1px solid ${ins.type === "positive" ? "#6EE7B7" : ins.type === "warning" ? "#FCD34D" : "#93C5FD"}`,
            }}
          >
            <span style={{ fontSize: 16 }}>{ins.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, lineHeight: 1.5 }}>{ins.text}</div>
              <Badge bg={C.priP} color={C.pri}>
                {ins.member}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{ fontSize: 13, fontWeight: 700, color: C.txt, marginBottom: 8 }}
      >
        Per-member health impact
      </div>
      {MEMBERS.map((m) => (
        <div
          key={m.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 14px",
            background: C.card,
            border: `1px solid ${C.bor}`,
            borderRadius: 12,
            marginBottom: 6,
          }}
        >
          <span style={{ fontSize: 22 }}>{m.avatar}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: 13 }}>{m.name}</div>
            <div style={{ fontSize: 11, color: C.mut }}>
              {m.conditions.length > 0 ? m.conditions.join(", ") : "Healthy"}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: C.pri }}>
              Score: {85 + m.id * 2}
            </div>
            <div style={{ fontSize: 10, color: C.okT }}>↑ improving</div>
          </div>
        </div>
      ))}
      <button
        onClick={() => go("subscribe")}
        style={{
          width: "100%",
          marginTop: 16,
          padding: "14px",
          background: C.pri,
          color: "#fff",
          border: "none",
          borderRadius: 12,
          fontSize: 15,
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Choose Subscription →
      </button>
    </div>
  );
}

// ─── SCREEN: SUBSCRIBE ───
function Subscribe({ go }) {
  const [plan, setPlan] = useState("family");
  const plans = [
    {
      id: "solo",
      label: "Solo kitchen",
      members: "1-2 members",
      price: "৳350/wk",
      items: "8-10 items",
      deliveries: "1x/week",
    },
    {
      id: "family",
      label: "Family kitchen",
      members: "3-5 members",
      price: "৳600/wk",
      items: "15-18 items",
      deliveries: "2x/week (Mon+Thu)",
      popular: true,
    },
    {
      id: "joint",
      label: "Joint family",
      members: "6+ members",
      price: "৳900/wk",
      items: "22-25 items",
      deliveries: "2x/week (Mon+Thu)",
    },
  ];
  return (
    <div style={{ padding: 20 }}>
      <ProgressBar step={3} total={5} />
      <h2
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: 20,
          color: C.pri,
          margin: "0 0 16px",
        }}
      >
        📦 Choose your kitchen plan
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginBottom: 20,
        }}
      >
        {plans.map((p) => (
          <button
            key={p.id}
            onClick={() => setPlan(p.id)}
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "16px",
              border: `2px solid ${plan === p.id ? C.pri : C.bor}`,
              borderRadius: 14,
              background: plan === p.id ? C.priP : "#fff",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            {p.popular && (
              <div
                style={{
                  position: "absolute",
                  top: -8,
                  right: 12,
                  padding: "2px 10px",
                  background: C.acc,
                  color: "#fff",
                  borderRadius: 8,
                  fontSize: 10,
                  fontWeight: 700,
                }}
              >
                POPULAR
              </div>
            )}
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                border: `2px solid ${plan === p.id ? C.pri : C.bor}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {plan === p.id && (
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: C.pri,
                  }}
                />
              )}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{p.label}</div>
              <div style={{ fontSize: 12, color: C.mut }}>
                {p.members} — {p.items} — {p.deliveries}
              </div>
            </div>
            <div style={{ fontWeight: 800, fontSize: 18, color: C.pri }}>
              {p.price}
            </div>
          </button>
        ))}
      </div>
      <div
        style={{
          background: C.warn,
          borderRadius: 12,
          padding: "12px 14px",
          marginBottom: 16,
          fontSize: 12,
          color: C.warnT,
        }}
      >
        <strong>Monthly saves 15%:</strong> ৳600/wk → ৳2,040/month (instead of
        ৳2,400)
      </div>
      <button
        onClick={() => go("checkout")}
        style={{
          width: "100%",
          padding: "14px",
          background: C.pri,
          color: "#fff",
          border: "none",
          borderRadius: 12,
          fontSize: 15,
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Proceed to Checkout →
      </button>
    </div>
  );
}

// ─── SCREEN: CHECKOUT ───
function Checkout({ go }) {
  const [paying, setPaying] = useState(false);
  const [done, setDone] = useState(false);
  const handlePay = () => {
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      setDone(true);
    }, 1500);
  };

  if (done)
    return (
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: C.priP,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 12px",
            fontSize: 28,
            color: C.pri,
          }}
        >
          ✓
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: 22,
            color: C.pri,
            margin: "0 0 6px",
          }}
        >
          Subscription active!
        </h2>
        <p style={{ color: C.mut, fontSize: 13, marginBottom: 20 }}>
          First Monday delivery arriving in 3 days
        </p>
        {[
          "Monday: পালং শাক, টমেটো, লাল শাক, ধনেপাতা",
          "Thursday: করলা, লাউ, গাজর, ফুলকপি",
          "Post-delivery SMS feedback after each delivery",
          "Health insights update every Sunday",
        ].map((t, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              textAlign: "left",
              maxWidth: 360,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: C.pri,
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 13 }}>{t}</span>
          </div>
        ))}
        <button
          onClick={() => go("landing")}
          style={{
            marginTop: 24,
            padding: "12px 32px",
            background: C.pri,
            color: "#fff",
            border: "none",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          ← Restart demo
        </button>
      </div>
    );

  return (
    <div style={{ padding: 20 }}>
      <ProgressBar step={4} total={5} />
      <h2
        style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: 20,
          color: C.pri,
          margin: "0 0 12px",
        }}
      >
        💳 Checkout
      </h2>
      <div
        style={{
          background: C.card,
          border: `1px solid ${C.bor}`,
          borderRadius: 14,
          padding: 16,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: C.mut,
            textTransform: "uppercase",
            letterSpacing: 1,
            marginBottom: 8,
          }}
        >
          Weekly plan — Family kitchen
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
            padding: "6px 0",
            borderBottom: `1px solid ${C.bor}`,
          }}
        >
          <span>Monday delivery (4 items)</span>
          <span style={{ fontWeight: 600 }}>৳85</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
            padding: "6px 0",
            borderBottom: `1px solid ${C.bor}`,
          }}
        >
          <span>Thursday delivery (4 items)</span>
          <span style={{ fontWeight: 600 }}>৳180</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
            padding: "6px 0",
            borderBottom: `1px solid ${C.bor}`,
            color: C.mut,
          }}
        >
          <span>Delivery fee</span>
          <span>৳30 × 2</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            fontWeight: 800,
            padding: "10px 0 0",
            borderTop: `2px solid ${C.pri}`,
            marginTop: 6,
          }}
        >
          <span>Total</span>
          <span style={{ color: C.pri }}>৳325/week</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {["bKash", "Nagad", "COD"].map((m, i) => (
          <button
            key={m}
            style={{
              flex: 1,
              padding: "12px 8px",
              border: `1.5px solid ${i === 0 ? C.acc : C.bor}`,
              borderRadius: 10,
              background: i === 0 ? "#FFF0EB" : "#fff",
              fontSize: 13,
              fontWeight: 700,
              color: i === 0 ? C.acc : C.mut,
              cursor: "pointer",
            }}
          >
            {m}
          </button>
        ))}
      </div>
      <button
        onClick={handlePay}
        disabled={paying}
        style={{
          width: "100%",
          padding: "16px",
          background: paying ? C.mut : C.acc,
          color: "#fff",
          border: "none",
          borderRadius: 12,
          fontSize: 16,
          fontWeight: 800,
          cursor: paying ? "default" : "pointer",
        }}
      >
        {paying ? "Processing..." : "Pay ৳325 with bKash →"}
      </button>
    </div>
  );
}

// ─── MAIN ───
export default function App() {
  const [screen, setScreen] = useState("landing");
  const screens = {
    landing: <Landing go={setScreen} />,
    kitchen: <KitchenProfile go={setScreen} />,
    plan: <WeeklyPlan go={setScreen} />,
    insights: <HealthInsights go={setScreen} />,
    subscribe: <Subscribe go={setScreen} />,
    checkout: <Checkout go={setScreen} />,
  };
  const navItems = [
    { key: "landing", icon: "🏠", label: "Home" },
    { key: "plan", icon: "📋", label: "Plan" },
    { key: "insights", icon: "📊", label: "Insights" },
    { key: "kitchen", icon: "👨‍👩‍👦", label: "Kitchen" },
  ];
  return (
    <div
      style={{
        fontFamily: "'DM Sans','Noto Sans Bengali',sans-serif",
        background: C.bg,
        maxWidth: 480,
        margin: "0 auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {screen !== "landing" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 20px",
            borderBottom: `1px solid ${C.bor}`,
            background: "#fff",
          }}
        >
          <button
            onClick={() => setScreen("landing")}
            style={{
              background: "none",
              border: "none",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            ←
          </button>
          <span
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 15,
              fontWeight: 700,
              color: C.pri,
            }}
          >
            🌿 Organicdesh
          </span>
          <span style={{ fontSize: 16 }}>🛒</span>
        </div>
      )}
      <div style={{ flex: 1, overflowY: "auto", paddingBottom: 64 }}>
        {screens[screen]}
      </div>
      <div
        style={{
          position: "sticky",
          bottom: 0,
          display: "flex",
          borderTop: `1px solid ${C.bor}`,
          background: "#fff",
          padding: "6px 0 10px",
        }}
      >
        {navItems.map((n) => (
          <button
            key={n.key}
            onClick={() => setScreen(n.key)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
            }}
          >
            <span style={{ fontSize: 18 }}>{n.icon}</span>
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: screen === n.key ? C.pri : C.mut,
              }}
            >
              {n.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
