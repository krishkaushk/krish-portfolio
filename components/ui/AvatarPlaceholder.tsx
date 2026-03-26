"use client";

import { motion } from "framer-motion";

interface AvatarPlaceholderProps {
  size?: "sm" | "lg";
}

export default function AvatarPlaceholder({ size = "lg" }: AvatarPlaceholderProps) {
  const dim = size === "lg" ? 280 : 160;
  const ringPad = size === "lg" ? 14 : 8;
  const totalDim = dim + ringPad * 2;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: totalDim, height: totalDim }}
    >
      {/* Rotating gradient ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #7C3AED, #06B6D4, #EC4899, #7C3AED)",
          animation: "spin-slow 8s linear infinite",
          padding: ringPad,
          borderRadius: "50%",
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "var(--bg-primary)" }}
        />
      </motion.div>

      {/* Avatar SVG */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="relative z-10"
      >
        <svg
          width={dim}
          height={dim}
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Krish Zhao Kaushik avatar"
        >
          {/* Hexagon background */}
          <defs>
            <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a28" />
              <stop offset="100%" stopColor="#111118" />
            </linearGradient>
            <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <clipPath id="hexClip">
              <polygon points="140,18 254,79 254,201 140,262 26,201 26,79" />
            </clipPath>
          </defs>

          {/* Hex fill */}
          <polygon
            points="140,18 254,79 254,201 140,262 26,201 26,79"
            fill="url(#hexGrad)"
          />

          {/* Hex border */}
          <polygon
            points="140,18 254,79 254,201 140,262 26,201 26,79"
            fill="none"
            stroke="url(#accentGrad)"
            strokeWidth="2"
            opacity="0.6"
          />

          {/* Stylised face / figure — geometric */}
          {/* Head circle */}
          <circle cx="140" cy="100" r="38" fill="url(#accentGrad)" opacity="0.9" />

          {/* Face detail — eyes */}
          <circle cx="126" cy="97" r="5" fill="white" opacity="0.95" />
          <circle cx="154" cy="97" r="5" fill="white" opacity="0.95" />
          <circle cx="128" cy="98" r="2.5" fill="#1a1a28" />
          <circle cx="156" cy="98" r="2.5" fill="#1a1a28" />

          {/* Subtle smile */}
          <path
            d="M 128 112 Q 140 122 152 112"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Body / shoulders */}
          <path
            d="M 80 200 Q 80 155 140 150 Q 200 155 200 200"
            fill="url(#accentGrad)"
            opacity="0.5"
            clipPath="url(#hexClip)"
          />

          {/* Monogram — KZK — subtle, top-right corner of hex */}
          <text
            x="185"
            y="52"
            fontFamily="monospace"
            fontSize="13"
            fontWeight="700"
            fill="url(#accentGrad)"
            opacity="0.7"
            letterSpacing="1"
          >
            KZK
          </text>

          {/* Small decorative dots */}
          <circle cx="60" cy="140" r="3" fill="#7C3AED" opacity="0.4" />
          <circle cx="220" cy="140" r="3" fill="#06B6D4" opacity="0.4" />
          <circle cx="140" cy="248" r="3" fill="#EC4899" opacity="0.4" />
        </svg>
      </motion.div>
    </div>
  );
}
