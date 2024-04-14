import { getJobById } from "@/services/jobsService";
import { StatusCodes } from "http-status-codes";

export function GET(request: Request, { params }: { params: { id: string } }) {
  const jobFound = getJobById(Number(params.id));

  if (jobFound === undefined) {
    return Response.json(
      { message: "Job not found" },
      { status: StatusCodes.NOT_FOUND }
    );
  }

  return Response.json(jobFound);
}
