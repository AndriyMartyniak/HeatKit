import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const defaultLang = "en";

  // Перевіряємо, чи є параметр lang у URL
  if (!searchParams.has("lang")) {
    const url = new URL(req.url);
    url.searchParams.set("lang", defaultLang);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
