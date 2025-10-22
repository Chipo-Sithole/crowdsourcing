import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '../../components/dashboard/Sidebar';
import { FilterBar } from '../../components/dashboard/FilterBar';
import { ProjectCard } from '../../components/dashboard/ProjectCard';
import { Menu, Bell, User, Search } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Project } from '../../types';
import { getProjects, getFavoriteProjects } from '../../mock-api/projects';
export const AnnotatorDashboard: React.FC = () => {
  const {
    user
  } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [favoriteProjects, setFavoriteProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  const handleFavoriteToggle = (projectId: string) => {
    setProjects(projects.map(project => project.id === projectId ? {
      ...project,
      isFavorite: !project.isFavorite
    } : project));
    // Update favorites list
    const updatedProject = projects.find(p => p.id === projectId);
    if (updatedProject) {
      if (updatedProject.isFavorite) {
        setFavoriteProjects(favoriteProjects.filter(p => p.id !== projectId));
      } else {
        setFavoriteProjects([...favoriteProjects, {
          ...updatedProject,
          isFavorite: true
        }]);
      }
    }
  };
  return <div className="flex h-screen bg-gray-50">
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <Sidebar isMobile onClose={() => setMobileMenuOpen(false)} />
          </div>
        </div>}
      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <Sidebar />
      </div>
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navigation */}
        <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="flex items-center lg:hidden">
                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500" onClick={() => setMobileMenuOpen(true)}>
                  <span className="sr-only">Open sidebar</span>
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              {/* Search */}
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-start">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input id="search" name="search" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="Search" type="search" />
                  </div>
                </div>
              </div>
              {/* User menu */}
              <div className="flex items-center lg:ml-4">
                <button className="flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="ml-3 relative">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <span className="hidden md:block mr-2 text-sm font-medium text-gray-700">
                        {user?.name}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        {user?.avatar ? <img className="h-8 w-8 rounded-full" src={user.avatar} alt={user.name} /> : <User className="h-5 w-5 text-gray-400" aria-hidden="true" />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Main content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<>
                  {/* Welcome banner */}
                  <div className="bg-white shadow-sm rounded-lg mb-6 p-6">
                    <h1 className="text-2xl font-bold text-gray-900">
                      Welcome, {user?.name}!
                    </h1>
                    <p className="mt-1 text-gray-600">
                      Ready to label? Find your next annotation task below.
                    </p>
                    {/* Quick stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                      <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                        <p className="text-sm font-medium text-gray-500">
                          Tasks Completed
                        </p>
                        <p className="mt-1 text-2xl font-semibold text-gray-900">
                          128
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                        <p className="text-sm font-medium text-gray-500">
                          Rating
                        </p>
                        <p className="mt-1 text-2xl font-semibold text-gray-900">
                          4.8/5.0
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                        <p className="text-sm font-medium text-gray-500">
                          Earnings
                        </p>
                        <p className="mt-1 text-2xl font-semibold text-gray-900">
                          $257.50
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                        <p className="text-sm font-medium text-gray-500">
                          Available Tasks
                        </p>
                        <p className="mt-1 text-2xl font-semibold text-gray-900">
                          43
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Filters */}
                  <FilterBar />
                  {/* Favorite Projects */}
                  {favoriteProjects.length > 0 && <div className="mb-8">
                      <h2 className="text-xl font-semibold mb-4">
                        Favorite Projects
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {favoriteProjects.map(project => <ProjectCard key={project.id} project={project} onFavoriteToggle={handleFavoriteToggle} />)}
                      </div>
                    </div>}
                  {/* Available Projects */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Available Projects
                    </h2>
                    {isLoading ? <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
                        <p className="mt-4 text-gray-600">
                          Loading projects...
                        </p>
                      </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map(project => <ProjectCard key={project.id} project={project} onFavoriteToggle={handleFavoriteToggle} />)}
                      </div>}
                  </div>
                </>} />
            {/* Additional routes would be added here */}
            <Route path="/jobs" element={<div>Browse Jobs</div>} />
            <Route path="/favorites" element={<div>Favorites</div>} />
            <Route path="/earnings" element={<div>Earnings</div>} />
            <Route path="/training" element={<div>Training</div>} />
            <Route path="/profile" element={<div>Profile</div>} />
            <Route path="/settings" element={<div>Settings</div>} />
          </Routes>
        </main>
      </div>
    </div>;
};