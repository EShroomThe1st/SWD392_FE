// type Experience = {
//   name: string;
//   level: "junior" | "senior" | "expert";
//   time: string;
// };

export type ExperienceLevel = "junior" | "senior" | "expert";

export type OptionalRequirements = {
  minimumCompletedProjects: "Tất cả" | "Ít nhất 3" | "Ít nhất 5" | "Ít nhất 10";
  rating: "Tất cả" | "Trên 3 sao" | "Trên 4 sao";
  location: "Tất cả" | "HCM";
  language: "Tất cả" | "English" | "Vietnamese";
  skills: Skill[];
  questions?: string[];
};

export type Skill = {
  label: string;
  value: string;
};

export type SkillField = {
  label: string;
  value: string;
  skills: Skill[];
};

export interface Project {
  id: string;
  title: string;
  language: "English" | "Vietnamese";
  location: "Tất cả" | string;
  projectField: SkillField;
  description: string;
  contract?: string;
  funding: "hourly" | "fixed";
  initialFunding: number;
  freelancerRequirement: ExperienceLevel;
  optionalRequirements: OptionalRequirements;
  timeToComplete: 1 | 2 | 3;
  publishedTime: number;
  createdBy: string;
  createdById: string;
  paidAmount: number;
  projectType: "longterm" | "shortterm" | "unknown";
  isCompleted: boolean;
  isVerified: boolean;
  privacy: "public" | "private" | "freelancer";
  applicationCount: number;
  inviteSent: number;
  inviteAccepted: number;
}

export interface CreateProject {
  title: string;
  language: "English" | "Vietnamese";
  location: "Tất cả" | string;
  projectField: string;
  description: string;
  contract?: string;
  funding?: "hourly" | "fixed";
  initialFunding?: number;
  freelancerRequirement?: ExperienceLevel;
  timeToComplete: 1 | 2 | 3;
  publishTime: number;
  createdBy: string;
  applicantCount: number;
  paidAmount: number;
  isCompleted: boolean;
  isVerified: boolean;
}

export interface FreelancerProject extends Project {
  startDate: number;
  endDate?: number;
  status: "doing" | "stopped" | "contracting" | "verifying" | "denied";
}

export interface FreelancerProjectContract extends FreelancerProject {
  signature?: string;
}
