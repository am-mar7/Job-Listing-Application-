import React from 'react';

interface JobHeaderProps {
  jobCount: number;
}

export const JobHeader: React.FC<JobHeaderProps> = ({ jobCount }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Job Listings Dashboard</h1>
            <p className="text-gray-600 mt-1">Discover your next career opportunity</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium">
              {jobCount} Jobs Available
            </span>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Post a Job
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};