import React from 'react';
import { Heart, Clock } from 'lucide-react';
import { Project } from '../../types';
interface ProjectCardProps {
  project: Project;
  onFavoriteToggle?: (projectId: string) => void;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onFavoriteToggle
}) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onFavoriteToggle) {
      onFavoriteToggle(project.id);
    }
  };
  return <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="relative">
        <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" />
        {/* Annotation type badges */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {project.annotationType.map(type => <span key={type} className="bg-black bg-opacity-70 text-white text-xs px-2 py-0.5 rounded">
              {type}
            </span>)}
        </div>
        {/* Difficulty badge */}
        <div className="absolute top-2 right-2">
          <span className={`text-xs px-2 py-0.5 rounded ${project.difficulty === 'easy' ? 'bg-green-100 text-green-800' : project.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
            {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
          </span>
        </div>
        {/* Favorite button */}
        <button className={`absolute bottom-2 right-2 p-2 rounded-full ${project.isFavorite ? 'bg-white text-red-500' : 'bg-white text-gray-400 hover:text-gray-600'}`} onClick={handleFavoriteClick} aria-label={project.isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
          <Heart size={18} fill={project.isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{project.description}</p>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <span className="text-sm text-gray-500">
              {project.requesterName}
            </span>
          </div>
          <div className="text-green-600 font-medium">
            ${project.payout.toFixed(2)} per task
          </div>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.map(tag => <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">
              {tag}
            </span>)}
        </div>
        {/* Progress bar */}
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>{project.completedTasks} completed</span>
            <span>{project.totalTasks} total</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-green-600 h-1.5 rounded-full" style={{
            width: `${project.progress}%`
          }}></div>
          </div>
        </div>
        {/* Posted date */}
        <div className="mt-3 flex items-center text-xs text-gray-500">
          <Clock size={14} className="mr-1" />
          <span>Posted {new Date(project.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>;
};