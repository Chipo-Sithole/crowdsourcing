import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Search, Heart, DollarSign, GraduationCap, UserCircle, Settings, LogOut, Users, FolderPlus, Folders, CreditCard } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
interface SidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
}
export const Sidebar: React.FC<SidebarProps> = ({
  isMobile = false,
  onClose
}) => {
  const {
    user,
    logout
  } = useAuth();
  const location = useLocation();
  const annotatorLinks = [{
    to: '/dashboard',
    icon: <LayoutDashboard size={20} />,
    label: 'Dashboard'
  }, {
    to: '/dashboard/jobs',
    icon: <Search size={20} />,
    label: 'Browse Jobs'
  }, {
    to: '/dashboard/favorites',
    icon: <Heart size={20} />,
    label: 'Favorites'
  }, {
    to: '/dashboard/earnings',
    icon: <DollarSign size={20} />,
    label: 'Earnings'
  }, {
    to: '/dashboard/training',
    icon: <GraduationCap size={20} />,
    label: 'Training'
  }, {
    to: '/dashboard/profile',
    icon: <UserCircle size={20} />,
    label: 'Profile'
  }, {
    to: '/dashboard/settings',
    icon: <Settings size={20} />,
    label: 'Settings'
  }];
  const requesterLinks = [{
    to: '/dashboard',
    icon: <LayoutDashboard size={20} />,
    label: 'Dashboard'
  }, {
    to: '/dashboard/workspaces',
    icon: <Folders size={20} />,
    label: 'My Workspaces'
  }, {
    to: '/dashboard/create',
    icon: <FolderPlus size={20} />,
    label: 'Create Project'
  }, {
    to: '/dashboard/projects',
    icon: <Folders size={20} />,
    label: 'Projects'
  }, {
    to: '/dashboard/team',
    icon: <Users size={20} />,
    label: 'Team'
  }, {
    to: '/dashboard/billing',
    icon: <CreditCard size={20} />,
    label: 'Billing'
  }, {
    to: '/dashboard/settings',
    icon: <Settings size={20} />,
    label: 'Settings'
  }];
  const links = user?.role === 'requester' ? requesterLinks : annotatorLinks;
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <aside className={`bg-gradient-to-b from-[#38b48f] to-[#2e5d4f] border-r border-[#38b48f] flex flex-col ${isMobile ? 'w-full h-full' : 'w-64 h-screen sticky top-0'}`}>
      <div className="p-4 border-b border-[#2e5d4f]">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-white">DataCrowd</span>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-2">
          {links.map(link => <li key={link.to}>
              <Link to={link.to} className={`flex items-center px-3 py-2 rounded-md transition-all ${isActive(link.to) ? 'bg-white text-[#38b48f] shadow-md' : 'text-white/90 hover:bg-white/20 hover:text-white'}`} onClick={isMobile ? onClose : undefined}>
                <span className="mr-3">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            </li>)}
        </ul>
      </div>
      <div className="p-4 border-t border-[#2e5d4f]">
        <button onClick={() => logout()} className="flex items-center w-full px-3 py-2 text-white/90 hover:bg-white/20 hover:text-white rounded-md transition-all">
          <LogOut size={20} className="mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </aside>;
};