import { StatusCodes, ReasonPhrases } from "http-status-codes";

type RequestBody = {
  name?: string;
  age?: number;
  phone?: string;
  state?: string;
  city?: string;
};

const validateJob = (job: RequestBody) => {
  if (!job.name) {
    return "Name is required";
  }

  if (!job.age) {
    return "Age is required";
  }

  if (!job.phone) {
    return "Phone is required";
  }

  if (!job.state) {
    return "State is required";
  }

  if (!job.city) {
    return "City is required";
  }

  return null;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const error = validateJob(body);

    if (error !== null) {
      return Response.json(
        { message: error },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    return Response.json(
      {
        message: `Thank you for your application, ${body.name}`,
      },
      { status: StatusCodes.CREATED }
    );
  } catch (error) {
    return Response.json(
      { message: ReasonPhrases.INTERNAL_SERVER_ERROR },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
