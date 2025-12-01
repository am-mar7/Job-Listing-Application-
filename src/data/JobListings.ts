import type { Job } from './../types/job';


export const jobListings: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120k - $160k",
    type: "Full-time",
    experience: "5+ years",
    applicants: 45,
    postedDate: "2 days ago",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=TechCorp",
    description: "We're looking for an experienced Frontend Developer to join our team. You'll work on cutting-edge projects using React, TypeScript, and modern web technologies.",
    requirements: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    rating: 4.8
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "Remote",
    salary: "$90k - $130k",
    type: "Full-time",
    experience: "3+ years",
    applicants: 32,
    postedDate: "5 days ago",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=DesignHub",
    description: "Join our creative team to design beautiful and intuitive user experiences. We value innovation and user-centered design principles.",
    requirements: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    rating: 4.6
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    company: "StartupXYZ",
    location: "New York, NY",
    salary: "$100k - $150k",
    type: "Full-time",
    experience: "4+ years",
    applicants: 67,
    postedDate: "1 week ago",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=StartupXYZ",
    description: "Build scalable web applications from frontend to backend. Work with a passionate team on innovative solutions.",
    requirements: ["Node.js", "React", "MongoDB", "AWS"],
    rating: 4.7
  },
  {
    id: 4,
    title: "Product Manager",
    company: "InnovateLabs",
    location: "Austin, TX",
    salary: "$110k - $140k",
    type: "Full-time",
    experience: "6+ years",
    applicants: 28,
    postedDate: "3 days ago",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=InnovateLabs",
    description: "Lead product strategy and execution for our flagship products. Drive innovation and deliver exceptional user experiences.",
    requirements: ["Product Strategy", "Agile", "Data Analysis", "Stakeholder Management"],
    rating: 4.9
  }
];