import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '../../components/dashboard/Sidebar';
import { WorkspaceSelector } from '../../components/dashboard/WorkspaceSelector';
import { Menu, Bell, User, Plus } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Project, Workspace } from '../../types';
import { getProjects } from '../../mock-api/projects';
import { Button } from '../../components/common/Button';
// Mock workspaces
const mockWorkspaces: Workspace[] = [{
  id: 'ws1',
  name: 'Main Workspace',
  ownerId: 'user2',
  members: ['user2'],
  projects: ['proj1', 'proj2'],
  createdAt: new Date().toISOString()
}, {
  id: 'ws2',
  name: 'Research Team',
  ownerId: 'user2',
  members: ['user2', 'user3', 'user4'],
  projects: ['proj3'],
  createdAt: new Date().toISOString()
}];
export const RequesterDashboard: React.FC = () => {
  const {
    user
  } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeWorkspace, setActiveWorkspace] = useState<Workspace>(mockWorkspaces[0]);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const allProjects = await getProjects();
        setProjects(allProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleCreateWorkspace = () => {
    // In a real app, this would open a modal to create a new workspace
    console.log('Create workspace clicked');
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
              {/* Workspace selector */}
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-start">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <WorkspaceSelector workspaces={mockWorkspaces} activeWorkspace={activeWorkspace} onWorkspaceChange={setActiveWorkspace} onCreateWorkspace={handleCreateWorkspace} />
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
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                          Welcome to {activeWorkspace.name}
                        </h1>
                        <p className="mt-1 text-gray-600">
                          Manage your annotation projects and teams.
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Button variant="primary" leftIcon={<Plus size={16} />}>
                          Create New Project
                        </Button>
                      </div>
                    </div>
                    {/* Quick stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                      <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                        <p className="text-sm font-medium text-gray-500">
                          Active Projects
                        </p>
                        <p className="mt-1 text-2xl font-semibold text-gray-900">
                          3
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                        <p className="text-sm font-medium text-gray-500">
                          Team Members
                        </p>
                        <p className="mt-1 text-2xl font-semibold text-gray-900">
                          {activeWorkspace.members.length}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                        <p className="text-sm font-medium text-gray-500">
                          Tasks Completed
                        </p>
                        <p className="mt-1 text-2xl font-semibold text-gray-900">
                          1,284
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                        <p className="text-sm font-medium text-gray-500">
                          Budget Used
                        </p>
                        <p className="mt-1 text-2xl font-semibold text-gray-900">
                          $348.50
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Projects */}
                  <div className="bg-white shadow-sm rounded-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold">Your Projects</h2>
                      <Button variant="outline" size="sm">
                        View All
                      </Button>
                    </div>
                    {isLoading ? <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
                        <p className="mt-4 text-gray-600">
                          Loading projects...
                        </p>
                      </div> : <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Project
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Progress
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tasks
                              </th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Created
                              </th>
                              <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Actions</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {projects.slice(0, 5).map(project => <tr key={project.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                      <img className="h-10 w-10 rounded-md object-cover" src={project.thumbnail} alt="" />
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">
                                        {project.title}
                                      </div>
                                      <div className="text-sm text-gray-500">
                                        {project.description.substring(0, 50)}
                                        ...
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {project.annotationType.join(', ')}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-green-600 h-2.5 rounded-full" style={{
                            width: `${project.progress}%`
                          }}></div>
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">
                                    {project.progress}% complete
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {project.completedTasks} /{' '}
                                  {project.totalTasks}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {new Date(project.createdAt).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <a href="#" className="text-green-600 hover:text-green-900">
                                    View
                                  </a>
                                </td>
                              </tr>)}
                          </tbody>
                        </table>
                      </div>}
                  </div>
                </>} />
            {/* Additional routes would be added here */}
            <Route path="/workspaces" element={<div>My Workspaces</div>} />
            <Route path="/create" element={<div>Create Project</div>} />
            <Route path="/projects" element={<div>Projects</div>} />
            <Route path="/team" element={<div>Team</div>} />
            <Route path="/billing" element={<div>Billing</div>} />
            <Route path="/settings" element={<div>Settings</div>} />
          </Routes>
        </main>
      </div>
    </div>;
};