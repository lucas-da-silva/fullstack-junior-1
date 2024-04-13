import { getJobById } from "@/services/jobsService";
import { StatusCodes } from "http-status-codes";
import { NextApiResponse } from "next";

export function GET(
  response: NextApiResponse,
  { params }: { params: { id: string } }
) {
  const jobFound = getJobById(Number(params.id));

  if (jobFound === undefined) {
    return response
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Job not found" });
  }

  return Response.json(jobFound);
}
