import React from 'react';
import { X, BookOpen, Code, TrendingUp, Building2, Users, ArrowRight } from 'lucide-react';
import { NCOJob, getLevelColor } from '../data/ncoData';

interface JobModalProps {
  job: NCOJob | null;
  isOpen: boolean;
  onClose: () => void;
}

const JobModal: React.FC<JobModalProps> = ({ job, isOpen, onClose }) => {
  if (!job || !isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border ${getLevelColor(job.Level)}`}>
              {job.Classification_Type}
            </span>
            <span className="text-sm text-gray-500">#{job.ISCO_08_code}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-6">{job.Title_EN}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Definition Section */}
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  <h2 className="text-lg font-semibold text-gray-900">Definition</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{job.Definition}</p>
              </div>

              {/* Skills Required */}
              {job.Skills_Required && (
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <h2 className="text-lg font-semibold text-gray-900">Skills Required</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.Skills_Required.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 border border-green-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Employment Sectors */}
              {job.Employment_Sectors && (
                <div className="mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Building2 className="h-5 w-5 text-purple-500" />
                    <h2 className="text-lg font-semibold text-gray-900">Employment Sectors</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {job.Employment_Sectors.map((sector, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 bg-purple-50 rounded-lg border border-purple-100"
                      >
                        <ArrowRight className="h-4 w-4 text-purple-600" />
                        <span className="text-sm text-purple-800 font-medium">{sector}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Occupations */}
              {job.Related_Occupations && (
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Users className="h-5 w-5 text-orange-500" />
                    <h2 className="text-lg font-semibold text-gray-900">Related Occupations</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.Related_Occupations.map((occupation, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800 border border-orange-200"
                      >
                        {occupation}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="h-5 w-5 text-gray-600" />
                  <h3 className="font-semibold text-gray-900">Classification Details</h3>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-600">ISCO-08 CODE</dt>
                    <dd className="text-lg font-semibold text-gray-900">{job.ISCO_08_code}</dd>
                  </div>
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-600">HIERARCHY LEVEL</dt>
                    <dd className="text-sm text-gray-900">{job.Hierarchy_Level}</dd>
                  </div>
                  
                  <div>
                    <dt className="text-sm font-medium text-gray-600">CLASSIFICATION TYPE</dt>
                    <dd className="text-sm text-gray-900">{job.Classification_Type}</dd>
                  </div>
                </div>

                {/* ISCO-08 Info */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="text-sm font-semibold text-blue-900 mb-2">About ISCO-08</h4>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    The International Standard Classification of Occupations (ISCO-08) is a four-level 
                    hierarchical structure of occupational groups.
                  </p>
                  <button className="mt-2 text-xs text-blue-600 hover:text-blue-800 font-medium">
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobModal;