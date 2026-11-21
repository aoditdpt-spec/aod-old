import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // aod-old is a copy of the old design, not for search engines (every page also sends noindex).
  return { rules: { userAgent: "*", disallow: "/" } };
}
