import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { NextRequest, NextResponse } from "next/server";

const SECRET = process.env.SECRET;

export function middleware(request: NextRequest) {
  const secret = request.headers.get("Authorization");

  if (secret !== SECRET) {
    return new Response(ReasonPhrases.UNAUTHORIZED, {
      status: StatusCodes.UNAUTHORIZED,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/jobs",
};
