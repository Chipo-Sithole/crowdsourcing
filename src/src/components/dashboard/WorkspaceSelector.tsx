import React, { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import { Workspace } from '../../types';
interface WorkspaceSelectorProps {
  workspaces: Workspace[];
  activeWorkspace: Workspace | null;
  onWorkspaceChange: (workspace: Workspace) => void;
  onCreateWorkspace?: () => void;
}
export const WorkspaceSelector: React.FC<WorkspaceSelectorProps> = ({
  workspaces,
  activeWorkspace,
  onWorkspaceChange,
  onCreateWorkspace
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full md:w-64 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500">
        <span className="block truncate">
          {activeWorkspace ? activeWorkspace.name : 'Select Workspace'}
        </span>
        <ChevronDown size={16} className="ml-2" />
      </button>
      {isOpen && <div className="absolute mt-1 w-full z-10 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {workspaces.map(workspace => <div key={workspace.id} className={`cursor-pointer select-none relative py-2 pl-3 pr-9 ${activeWorkspace?.id === workspace.id ? 'bg-green-100 text-green-900' : 'text-gray-900 hover:bg-gray-100'}`} onClick={() => {
        onWorkspaceChange(workspace);
        setIsOpen(false);
      }}>
              <span className="block truncate">{workspace.name}</span>
            </div>)}
          {onCreateWorkspace && <div className="cursor-pointer select-none relative py-2 pl-3 pr-9 border-t border-gray-200 text-green-600 hover:bg-gray-100" onClick={() => {
        setIsOpen(false);
        if (onCreateWorkspace) onCreateWorkspace();
      }}>
              <div className="flex items-center">
                <Plus size={16} className="mr-2" />
                <span>Create New Workspace</span>
              </div>
            </div>}
        </div>}
    </div>;
};