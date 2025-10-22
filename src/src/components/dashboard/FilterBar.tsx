import React, { useState } from 'react';
import { Search, Filter, SortAsc } from 'lucide-react';
interface FilterBarProps {
  onFilterChange?: (filters: any) => void;
  onSearchChange?: (query: string) => void;
}
export const FilterBar: React.FC<FilterBarProps> = ({
  onFilterChange,
  onSearchChange
}) => {
  const annotationTypes = ['All Projects', 'Object Detection', 'Classification', 'Segmentation', 'Keypoints', 'NLP'];
  const [activeFilter, setActiveFilter] = useState('All Projects');
  const [searchQuery, setSearchQuery] = useState('');
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    if (onFilterChange) {
      onFilterChange({
        type: filter === 'All Projects' ? null : filter
      });
    }
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (onSearchChange) {
      onSearchChange(e.target.value);
    }
  };
  return <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search bar */}
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input type="text" placeholder="Search projects, keywords, or requesters" value={searchQuery} onChange={handleSearchChange} className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" />
        </div>
        {/* Filter and sort buttons - for mobile */}
        <div className="flex md:hidden gap-2">
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <Filter size={18} className="mr-2" />
            <span>Filter</span>
          </button>
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <SortAsc size={18} className="mr-2" />
            <span>Sort</span>
          </button>
        </div>
      </div>
      {/* Filter tabs */}
      <div className="mt-4 border-b border-gray-200">
        <div className="flex overflow-x-auto space-x-4 pb-1">
          {annotationTypes.map(type => <button key={type} className={`whitespace-nowrap px-3 py-2 border-b-2 text-sm font-medium ${activeFilter === type ? 'border-green-500 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`} onClick={() => handleFilterClick(type)}>
              {type}
            </button>)}
        </div>
      </div>
    </div>;
};