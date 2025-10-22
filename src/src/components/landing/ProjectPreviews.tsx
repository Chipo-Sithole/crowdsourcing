import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { mockProjects } from '../../mock-api/projects';
export const ProjectPreviews: React.FC = () => {
  // Use the first 3 projects from our mock data
  const previewProjects = mockProjects.slice(0, 3);
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore some of the annotation projects currently available on our
            platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProjects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
        <div className="mt-12 text-center">
          <a href="#" onClick={e => e.preventDefault()} className="inline-flex items-center text-green-600 font-medium hover:text-green-700">
            View all projects <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>;
};
const ProjectCard: React.FC<{
  project: Project;
}> = ({
  project
}) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="relative">
        <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" />
        {/* Annotation type badges */}
        <div className="absolute top-2 right-2 flex flex-wrap gap-2 justify-end">
          {project.annotationType.map(type => <span key={type} className="bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
              {type}
            </span>)}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-sm font-medium">{project.requesterName}</span>
          </div>
          <div className="text-green-600 font-medium">
            ${project.payout.toFixed(2)} per task
          </div>
        </div>
        {/* Progress bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>{project.completedTasks} completed</span>
            <span>{project.totalTasks} total</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{
            width: `${project.progress}%`
          }}></div>
          </div>
        </div>
      </div>
    </div>;
};