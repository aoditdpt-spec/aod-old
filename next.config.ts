import type { NextConfig } from "next";

// aod-old: the old aod.co.in design with no backend. It isn't for search engines (noindex on
// every response, robots.ts disallows everything) and has no subdomains: the artist portal, admin
// and Dispute Desk stay at /artists, /admin and /resolve.

const media = (() => {
  try {
    return process.env.NEXT_PUBLIC_MEDIA_URL ? new URL(process.env.NEXT_PUBLIC_MEDIA_URL).origin : "";
  } catch {
    return "";
  }
})();

// Content Security Policy: everything from the site itself (and NEXT_PUBLIC_MEDIA_URL for the hero
// footage). Production only: `next dev` needs eval and its own websocket.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: ${media}`,
  `media-src 'self' blob: ${media}`,
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
]
  .map((d) => d.replace(/\s+/g, " ").trim())
  .join("; ");

const headers = [
  ...(process.env.NODE_ENV === "production" ? [{ key: "Content-Security-Policy", value: csp }] : []),
  { key: "X-Robots-Tag", value: "noindex, nofollow" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
];

const longCache = [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    return [
      { source: "/:path*", headers },
      ...["/media/:path*", "/brands/:path*", "/categories/:path*"].map((source) => ({ source, headers: longCache })),
      { source: "/sw.js", headers: [{ key: "Cache-Control", value: "no-cache, max-age=0, must-revalidate" }] },
    ];
  },
  async redirects() {
    // Business bookings happen in the business portal only.
    return [{ source: "/book/business", destination: "/business", permanent: false }];
  },
};

export default nextConfig;
