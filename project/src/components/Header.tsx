import React from 'react';
import { Search, Filter, Github, BarChart3 } from 'lucide-react';
import { NCOJob } from '../data/ncoData';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onToggleFilters: () => void;
  isFiltersOpen: boolean;
  filteredJobs: NCOJob[];
  levelCounts: { [key: string]: number };
}

const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  onToggleFilters,
  isFiltersOpen,
  filteredJobs,
  levelCounts
}) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <Github className="h-8 w-8 text-gray-900" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">NCO India</h1>
              <p className="text-sm text-gray-600">National Classification of Occupations</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search occupations, codes, or definitions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filters Button */}
          <button
            onClick={onToggleFilters}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
              isFiltersOpen
                ? 'bg-blue-50 border-blue-200 text-blue-800'
                : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Stats Bar */}
        <div className="flex items-center justify-between py-3 border-t border-gray-100">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <BarChart3 className="h-4 w-4" />
            <span>{filteredJobs.length} total occupations</span>
          </div>
          
          <div className="flex items-center space-x-6">
            {Object.entries(levelCounts).map(([level, count]) => (
              <div key={level} className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-600">L{level}:</span>
                <span className="text-sm font-semibold text-gray-900">{count}</span>
                <div className={`w-2 h-2 rounded-full ${
                  level === '1' ? 'bg-purple-500' :
                  level === '2' ? 'bg-blue-500' :
                  level === '3' ? 'bg-green-500' :
                  'bg-orange-500'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;