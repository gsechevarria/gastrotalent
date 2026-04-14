import { type NextRequest, NextResponse } from "next/server";

// AUTH DESHABILITADA TEMPORALMENTE — acceso libre para revisión de UI
// TODO: restaurar con: return await updateSession(request);
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
