import React, { useEffect, useState } from 'react';
import { Search, Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Project } from '../types';
import { getProjects, getFavoriteProjects } from '../mock-api/projects';
export const Dashboard: React.FC = () => {
  const {
    user
  } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [favoriteProjects, setFavoriteProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeProjectType, setActiveProjectType] = useState('All Projects');
  const [activeModel, setActiveModel] = useState('All Models');
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [allProjects, favorites] = await Promise.all([getProjects(), getFavoriteProjects()]);
        setProjects(allProjects);
        setFavoriteProjects(favorites);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const projectTypes = ['All Projects', 'Object Detection', 'Classification', 'Instance Segmentation', 'Keypoint Detection', 'Semantic Segmentation', 'Multimodal'];
  const modelTypes = ['All Models', 'RF-DETR', 'YOLOv12', 'YOLOv11', 'YOLOv10', 'YOLOv9', 'YOLO-NAS', 'YOLOv8', 'YOLOv5'];
  return <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-200">
      {/* Hero section */}
      <div className="pt-16 pb-8 text-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-purple-600 rounded-full p-3 mr-3">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-purple-700">
              Explore the DataCrowd Universe
            </h1>
          </div>
          <p className="text-xl text-gray-700 mb-6">
            The world's largest collection of open source annotation datasets
            and APIs.
          </p>
          <div className="flex justify-center space-x-10 text-gray-700">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="font-mono">500 MILLION+ IMAGES</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              <span className="font-mono">1,000,000+ DATASETS</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
              </svg>
              <span className="font-mono">250,000+ FINE-TUNED MODELS</span>
            </div>
          </div>
        </div>
      </div>
      {/* Search bar */}
      <div className="container mx-auto px-4 mb-8">
        <div className="relative max-w-4xl mx-auto">
          <input type="text" placeholder="Search 500,000+ Open Source Computer Vision Projects..." className="w-full py-3 px-5 pl-12 rounded-full border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white p-2 rounded-full">
            <Search size={20} />
          </div>
        </div>
      </div>
      {/* Filter tabs */}
      <div className="container mx-auto px-4 mb-8">
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-2">BY PROJECT TYPE:</p>
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {projectTypes.map(type => <button key={type} className={`whitespace-nowrap px-4 py-1 rounded-full text-sm font-medium ${activeProjectType === type ? 'bg-purple-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`} onClick={() => setActiveProjectType(type)}>
                {type}
              </button>)}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-2">BY MODEL:</p>
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {modelTypes.map(model => <button key={model} className={`whitespace-nowrap px-4 py-1 rounded-full text-sm font-medium ${activeModel === model ? 'bg-purple-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`} onClick={() => setActiveModel(model)}>
                {model}
              </button>)}
          </div>
        </div>
      </div>
      {/* Favorite projects */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex items-center mb-6">
          <Heart className="text-purple-700 mr-2" size={24} />
          <h2 className="text-2xl font-bold text-gray-800">
            Favorite Projects
          </h2>
        </div>
        {isLoading ? <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-700 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading projects...</p>
          </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteProjects.map(project => <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative">
                  <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-1">
                    <span className="font-bold text-sm px-2">
                      ★ {Math.floor(Math.random() * 500) + 100}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.annotationType.map(type => <span key={type} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {type}
                      </span>)}
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      Model
                    </span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      snap
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    by {project.requesterName}
                  </p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{Math.floor(Math.random() * 10000)} images</span>
                    <span>•</span>
                    <span>{Math.floor(Math.random() * 10) + 1} models</span>
                    <span>•</span>
                    <span>Updated recently</span>
                  </div>
                </div>
              </div>)}
          </div>}
      </div>
    </div>;
};