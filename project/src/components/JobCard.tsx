import React from 'react';
import { ChevronRight, Users } from 'lucide-react';
import { NCOJob, getLevelColor } from '../data/ncoData';

interface JobCardProps {
  job: NCOJob;
  onClick: (job: NCOJob) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer group"
      onClick={() => onClick(job)}
    >
      {/* Header with Level Badge and Arrow */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getLevelColor(job.Level)}`}>
            {job.Classification_Type}
          </span>
          <span className="text-sm text-gray-500">#{job.ISCO_08_code}</span>
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
      </div>

      {/* Job Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
        {job.Title_EN}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
        {job.Definition}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-1">
          <Users className="h-3 w-3" />
          <span>ISCO Classification</span>
        </div>
        <span>Code: {job.ISCO_08_code}</span>
      </div>
    </div>
  );
};

export default JobCard;