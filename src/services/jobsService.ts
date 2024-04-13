import jobs from "@/database/jobs";

export const getAllJobs = () => jobs;

export const getJobsByLevel = (level: string) =>
  jobs.filter((job) => job.level === level);

export const getJobById = (id: number) => jobs.find((job) => job.id === id);
