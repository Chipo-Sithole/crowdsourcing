import { User, UserRole } from '../types';
const STORAGE_KEY = 'crowdsource_user';
// Mock users
const mockUsers: User[] = [{
  id: 'user1',
  email: 'annotator@example.com',
  name: 'Alex Annotator',
  role: 'annotator',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
  isNewUser: false,
  createdAt: new Date().toISOString(),
  preferences: {
    position: ['Data Annotator / Labeler'],
    education: "Bachelor's Degree",
    heardFrom: 'Social Media',
    availability: 20,
    annotationTypes: ['Object Detection', 'Classification']
  }
}, {
  id: 'user2',
  email: 'requester@example.com',
  name: 'Robin Requester',
  role: 'requester',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop',
  isNewUser: false,
  createdAt: new Date().toISOString(),
  preferences: {
    position: ['Data Scientist', 'Machine Learning Engineer'],
    education: "Master's Degree",
    heardFrom: 'Colleague',
    annotationTypes: ['Segmentation', 'Keypoints']
  }
}];
// Helper to save current user to localStorage
const saveCurrentUser = (user: User | null) => {
  if (user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
};
// Mock login function
export const mockLogin = async (provider: string, credentials?: {
  email: string;
}): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  let user: User;
  if (credentials?.email) {
    // Check if user exists
    const existingUser = mockUsers.find(u => u.email === credentials.email);
    if (existingUser) {
      user = existingUser;
    } else {
      // Create new user with email login
      user = {
        id: `user${Math.floor(Math.random() * 10000)}`,
        email: credentials.email,
        name: credentials.email.split('@')[0],
        role: 'annotator',
        // Default role
        isNewUser: true,
        createdAt: new Date().toISOString()
      };
    }
  } else {
    // Simulate OAuth login - just return the first mock user
    user = mockUsers[Math.floor(Math.random() * mockUsers.length)];
  }
  // Store auth token
  localStorage.setItem('auth_token', `mock_token_${user.id}`);
  saveCurrentUser(user);
  return user;
};
// Get current user from localStorage
export const mockGetCurrentUser = async (): Promise<User | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  const token = localStorage.getItem('auth_token');
  if (!token) return null;
  const storedUser = localStorage.getItem(STORAGE_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
};
// Update user data
export const mockUpdateUser = async (userId: string, data: Partial<User>): Promise<User> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const currentUser = await mockGetCurrentUser();
  if (!currentUser) {
    throw new Error('User not found');
  }
  const updatedUser = {
    ...currentUser,
    ...data
  };
  // If this was a real API, we would update the user in the database
  saveCurrentUser(updatedUser);
  return updatedUser;
};