export type UserRole = 'annotator' | 'requester';
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  isNewUser: boolean;
  createdAt: string;
  preferences?: UserPreferences;
}
export interface UserPreferences {
  position?: string[];
  education?: string;
  heardFrom?: string;
  availability?: number;
  annotationTypes?: string[];
}
export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  requesterId: string;
  requesterName: string;
  annotationType: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  payout: number;
  tags: string[];
  progress: number;
  totalTasks: number;
  completedTasks: number;
  createdAt: string;
  isFavorite?: boolean;
}
export interface Workspace {
  id: string;
  name: string;
  ownerId: string;
  members: string[];
  projects: string[];
  createdAt: string;
}
export interface Task {
  id: string;
  projectId: string;
  status: 'pending' | 'in_progress' | 'completed' | 'rejected';
  assignedTo?: string;
  completedBy?: string;
  data: any;
  createdAt: string;
}