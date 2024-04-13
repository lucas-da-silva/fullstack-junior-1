import { NextApiRequest, NextApiResponse } from "next";
import { getAllJobs } from "@/services/jobsService";
import IJob from "@/interfaces/IJob";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

const secret = process.env.SECRET;

type ResponseData = IJob[] | { message: string };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const authHeader = req.headers.authorization;

  if (authHeader !== secret) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: ReasonPhrases.UNAUTHORIZED,
    });
  }

  return res.status(200).json(getAllJobs());
}
