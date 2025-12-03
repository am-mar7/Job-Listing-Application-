// components/JobFilters.tsx
import React from 'react';
import { JobType } from '@/types/job';

interface JobFiltersProps {
  filterType: string;
  setFilterType: (type: string) => void;
  filterCategory: string;
  setFilterCategory: (category: string) => void;
  allCategories: string[];
}

const jobTypes: JobType[] = ['All', 'Full-time', 'Part-time', 'Contract'];

export const JobFilters: React.FC<JobFiltersProps> = ({
  filterType,
  setFilterType,
  filterCategory,
  setFilterCategory,
  allCategories,
}) => {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-sm font-medium text-gray-700">Job Type:</span>
        {jobTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filterType === type
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-sm font-medium text-gray-700">Category:</span>
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setFilterCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filterCategory === category
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};