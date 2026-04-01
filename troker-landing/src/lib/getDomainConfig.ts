import { headers } from "next/headers";
import { domainMap } from "@/content/domains";
import { defaultConfig, DomainConfig } from "@/content/config";

export function getDomainConfig(): DomainConfig {
  const headersList = headers();
  const host = headersList.get("host") || "";
  const hostname = host.replace(/:\d+$/, "").replace(/^www\./, "");

  // Allow overriding domain in development
  const devDomain = process.env.NEXT_PUBLIC_DEV_DOMAIN;
  const resolvedHost = devDomain || hostname;

  return domainMap[resolvedHost] || defaultConfig;
}
