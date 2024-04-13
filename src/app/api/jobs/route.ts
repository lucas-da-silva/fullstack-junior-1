import { getAllJobs } from "@/services/jobsService";

export function GET() {
  return Response.json(getAllJobs());
}
