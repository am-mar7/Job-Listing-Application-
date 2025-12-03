export interface IdealCandidate {
  age: string;
  gender: string;
  traits: string[];
}

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  postedDate: string;
  deadline: string;
  startDate: string;
  endDate: string;
  logo: string;
  description: string;
  responsibilities: string[];
  idealCandidate: IdealCandidate;
  whenWhere: string;
  categories: string[];
  requiredSkills: string[];
  applicants: number;
  status: string;
}

export type JobType = "All" | "Full-time" | "Part-time" | "Contract";
