import { getAllJobs, getJobsByLevel } from "@/services/jobsService";
import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const level = request.nextUrl.searchParams.get("level");

  if (level) {
    return Response.json(getJobsByLevel(level));
  }

  return Response.json(getAllJobs());
}
