import { Nation } from "./language";
import { ExperienceLevel } from "./project";

export interface UserDetail {
  id: string;
  username: string;
  email: string;
  phone: string;
  dob: number;
  role: "freelancer" | "enterprise" | "admin";
  address: string;
  nation: Nation[string];
  isVerified: boolean;
  averageRating: number;
  ratingCount: number;
  projectCount: number;
  createdAt: number;
  language: string[];
  description: string;
}

export interface FreelancerDetail extends UserDetail {
  firstName: string;
  middleName: string;
  lastName: string;
  profilePicture: string;
  desireSalary: number;
  experienceLevel: ExperienceLevel;
  jobRole: string;
}

export interface UserDetailTable extends UserDetail {
  key: string;
  dobString: string;
  status: string;
}
