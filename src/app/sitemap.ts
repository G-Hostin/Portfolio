import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const host =
    process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-ghostin.vercel.app/";
  return [{ url: `${host}/`, lastModified: new Date() }];
}
