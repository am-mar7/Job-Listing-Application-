export interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    experience: string;
    applicants: number;
    postedDate: string;
    avatar: string;
    description: string;
    requirements: string[];
    rating: number;
  }
  
  export type FilterType = 'all' | 'full-time' | 'remote';