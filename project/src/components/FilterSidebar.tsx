import React from 'react';
import { X, ChevronRight, Info } from 'lucide-react';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLevels: string[];
  onLevelToggle: (level: string) => void;
  resultCount: number;
  totalCount: number;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  onClose,
  selectedLevels,
  onLevelToggle,
  resultCount,
  totalCount
}) => {
  const levels = [
    {
      level: '1',
      title: 'Level 1',
      subtitle: 'Major Groups',
      description: 'Broad occupational categories',
      color: 'text-purple-600'
    },
    {
      level: '2',
      title: 'Level 2',
      subtitle: 'Sub-major Groups',
      description: 'Detailed occupational categories',
      color: 'text-blue-600'
    },
    {
      level: '3',
      title: 'Level 3',
      subtitle: 'Minor Groups',
      description: 'Specific occupational categories',
      color: 'text-green-600'
    },
    {
      level: '4',
      title: 'Level 4',
      subtitle: 'Unit Groups',
      description: 'Individual occupations',
      color: 'text-orange-600'
    }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        {/* Results Counter */}
        <div className="p-6 border-b border-gray-200">
          <div className="text-sm text-gray-600">Results</div>
          <div className="flex items-center mt-1">
            <div className="flex-1 bg-blue-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(resultCount / totalCount) * 100}%` }}
              />
            </div>
            <span className="ml-3 text-sm font-medium text-gray-900">
              {resultCount} of {totalCount}
            </span>
          </div>
        </div>

        {/* Filter Options */}
        <div className="p-6">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Hierarchy Levels</h3>
          
          <div className="space-y-3">
            {levels.map((levelData) => (
              <div key={levelData.level} className="flex items-start space-x-3">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id={`level-${levelData.level}`}
                    checked={selectedLevels.includes(levelData.level)}
                    onChange={() => onLevelToggle(levelData.level)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor={`level-${levelData.level}`}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      <ChevronRight className={`h-4 w-4 ${levelData.color}`} />
                      <span className="text-sm font-medium text-gray-900">
                        {levelData.title}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 ml-6">
                      {levelData.subtitle}
                    </div>
                    <div className="text-xs text-gray-500 ml-6">
                      {levelData.description}
                    </div>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About NCO Section */}
        <div className="p-6 border-t border-gray-200 mt-auto">
          <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
            <Info className="h-4 w-4 mr-2 text-blue-500" />
            About NCO
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            The National Classification of Occupations (NCO) is India's comprehensive system for 
            categorizing jobs and occupations, based on the International Standard Classification 
            of Occupations (ISCO-08). It provides a hierarchical structure for understanding 
            the Indian labor market.
          </p>
          <div className="mt-3">
            <a
              href="#"
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;