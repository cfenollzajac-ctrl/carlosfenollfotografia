import { NextRequest, NextResponse } from "next/server";

const SECRET_KEY = "cfphoto";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/locked")) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("cf_access");
  const keyParam = request.nextUrl.searchParams.get("key");

  if (cookie?.value === SECRET_KEY) {
    return NextResponse.next();
  }

  if (keyParam === SECRET_KEY) {
    const url = request.nextUrl.clone();
    url.searchParams.delete("key");
    const response = NextResponse.redirect(url);
    response.cookies.set("cf_access", SECRET_KEY, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = "/locked";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|images).*)"],
};
