import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterSidebar from './components/FilterSidebar';
import JobCard from './components/JobCard';
import JobModal from './components/JobModal';
import { ncoData, NCOJob } from './data/ncoData';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<NCOJob | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter jobs based on search term and selected levels
  const filteredJobs = useMemo(() => {
    return ncoData.filter(job => {
      const matchesSearch = searchTerm === '' || 
        job.Title_EN.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.Definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.ISCO_08_code.includes(searchTerm);

      const matchesLevel = selectedLevels.length === 0 || 
        selectedLevels.includes(job.Level);

      return matchesSearch && matchesLevel;
    });
  }, [searchTerm, selectedLevels]);

  // Calculate level counts
  const levelCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    filteredJobs.forEach(job => {
      counts[job.Level] = (counts[job.Level] || 0) + 1;
    });
    return counts;
  }, [filteredJobs]);

  const handleLevelToggle = (level: string) => {
    setSelectedLevels(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  const handleJobClick = (job: NCOJob) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onToggleFilters={() => setIsFiltersOpen(true)}
        isFiltersOpen={isFiltersOpen}
        filteredJobs={filteredJobs}
        levelCounts={levelCounts}
      />

      <FilterSidebar
        isOpen={isFiltersOpen}
        onClose={() => setIsFiltersOpen(false)}
        selectedLevels={selectedLevels}
        onLevelToggle={handleLevelToggle}
        resultCount={filteredJobs.length}
        totalCount={ncoData.length}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {searchTerm && (
          <div className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>🔍</span>
              <span>Showing {filteredJobs.length} results for "{searchTerm}"</span>
              {selectedLevels.length > 0 && (
                <span className="text-blue-600">
                  • Filtered by Level {selectedLevels.join(', ')}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.ISCO_08_code}
              job={job}
              onClick={handleJobClick}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No occupations found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedLevels([]);
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            National Classification of Occupations (NCO) - India
          </h3>
          <p className="text-gray-600 mb-4">
            Based on the International Standard Classification of Occupations (ISCO-08)
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-orange-600">
            <span>💡</span>
            <span>Easy Editing: Update job data by modifying the <code className="bg-orange-100 px-1 rounded">src/data/ncoData.ts</code> file</span>
          </div>
        </div>
      </footer>

      {/* Job Detail Modal */}
      <JobModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}

export default App;