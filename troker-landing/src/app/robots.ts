import { MetadataRoute } from "next";
import { getDomainConfig } from "@/lib/getDomainConfig";

export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  const config = getDomainConfig();
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
    ],
    sitemap: `https://${config.domain}/sitemap.xml`,
  };
}
