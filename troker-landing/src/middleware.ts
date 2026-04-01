import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  if (hostname.startsWith("www.")) {
    const nonWwwHost = hostname.replace(/^www\./, "");
    const url = request.nextUrl.clone();
    url.host = nonWwwHost;
    url.protocol = "https";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|apple-icon\\.png|icon\\.png).*)",
  ],
};
