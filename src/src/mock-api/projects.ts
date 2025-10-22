import { Project } from '../types';
export const mockProjects: Project[] = [{
  id: 'proj1',
  title: 'Traffic Sign Detection',
  description: 'Annotate traffic signs in urban environments for autonomous driving systems',
  thumbnail: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=500&auto=format&fit=crop',
  requesterId: 'user2',
  requesterName: 'Robin Requester',
  annotationType: ['Object Detection'],
  difficulty: 'easy',
  payout: 0.15,
  tags: ['automotive', 'safety', 'detection'],
  progress: 67,
  totalTasks: 1200,
  completedTasks: 804,
  createdAt: '2023-09-15T10:30:00Z',
  isFavorite: true
}, {
  id: 'proj2',
  title: 'Medical Imaging Segmentation',
  description: 'Segment organs in CT scans for medical diagnosis assistance',
  thumbnail: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=500&auto=format&fit=crop',
  requesterId: 'user2',
  requesterName: 'MedTech Research',
  annotationType: ['Segmentation'],
  difficulty: 'hard',
  payout: 0.45,
  tags: ['medical', 'healthcare', 'segmentation'],
  progress: 32,
  totalTasks: 500,
  completedTasks: 160,
  createdAt: '2023-10-02T14:45:00Z'
}, {
  id: 'proj3',
  title: 'Product Classification',
  description: 'Classify retail products into categories for inventory management',
  thumbnail: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=500&auto=format&fit=crop',
  requesterId: 'user3',
  requesterName: 'RetailTech Inc',
  annotationType: ['Classification'],
  difficulty: 'medium',
  payout: 0.08,
  tags: ['retail', 'inventory', 'classification'],
  progress: 89,
  totalTasks: 3000,
  completedTasks: 2670,
  createdAt: '2023-08-20T09:15:00Z'
}, {
  id: 'proj4',
  title: 'Facial Keypoint Detection',
  description: 'Annotate facial keypoints for emotion recognition systems',
  thumbnail: 'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&w=500&auto=format&fit=crop',
  requesterId: 'user4',
  requesterName: 'EmotionAI Labs',
  annotationType: ['Keypoints'],
  difficulty: 'medium',
  payout: 0.22,
  tags: ['facial', 'emotion', 'keypoints'],
  progress: 45,
  totalTasks: 800,
  completedTasks: 360,
  createdAt: '2023-11-05T11:20:00Z',
  isFavorite: true
}, {
  id: 'proj5',
  title: 'Wildlife Monitoring',
  description: 'Identify and track wildlife species in conservation areas',
  thumbnail: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef3?q=80&w=500&auto=format&fit=crop',
  requesterId: 'user5',
  requesterName: 'EcoTrack Foundation',
  annotationType: ['Object Detection', 'Classification'],
  difficulty: 'medium',
  payout: 0.18,
  tags: ['wildlife', 'conservation', 'tracking'],
  progress: 52,
  totalTasks: 1500,
  completedTasks: 780,
  createdAt: '2023-10-18T16:30:00Z'
}, {
  id: 'proj6',
  title: 'Satellite Imagery Analysis',
  description: 'Identify and segment features in satellite imagery for urban planning',
  thumbnail: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=500&auto=format&fit=crop',
  requesterId: 'user6',
  requesterName: 'GeoSpatial Research',
  annotationType: ['Segmentation', 'Object Detection'],
  difficulty: 'hard',
  payout: 0.4,
  tags: ['satellite', 'urban', 'planning'],
  progress: 21,
  totalTasks: 700,
  completedTasks: 147,
  createdAt: '2023-11-22T13:45:00Z'
}];
export const getProjects = async (): Promise<Project[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  return mockProjects;
};
export const getProjectById = async (id: string): Promise<Project | undefined> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 400));
  return mockProjects.find(project => project.id === id);
};
export const getFavoriteProjects = async (): Promise<Project[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));
  return mockProjects.filter(project => project.isFavorite);
};