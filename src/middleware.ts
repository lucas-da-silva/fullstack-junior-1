import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { NextRequest, NextResponse } from "next/server";

const SECRET = process.env.SECRET;

export function middleware(request: NextRequest) {
  const secret = request.headers.get("Authorization");

  if (secret !== SECRET) {
    return Response.json(
      { message: ReasonPhrases.UNAUTHORIZED },
      { status: StatusCodes.UNAUTHORIZED }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/jobs", "/api/jobs/:id*", "/api/jobs/submit"],
};
