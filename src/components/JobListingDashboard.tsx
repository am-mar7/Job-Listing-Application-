import { useState } from 'react';
import type { Job, FilterType } from '../types/job';

import { JobCard } from './JobCard';
import { JobDetailModal } from './JobDetailModal';
import { FilterButton } from './FilterButton';
import { DashboardHeader } from './DashboardHeader';
import { jobListings } from '../data/JobListings';

export const JobListingDashboard: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredJobs = filter === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.type.toLowerCase() === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 sm:px-36 sm:py-12 w-full">
      <div className=" mx-auto px-4 py-8">
        <DashboardHeader totalJobs={jobListings.length} />

        <div className="flex gap-3 mb-6">
          <FilterButton
            label="All Jobs"
            count={jobListings.length}
            isActive={filter === 'all'}
            onClick={() => setFilter('all')}
          />
          <FilterButton
            label="Full-time"
            isActive={filter === 'full-time'}
            onClick={() => setFilter('full-time')}
          />
          <FilterButton
            label="Remote"
            isActive={filter === 'remote'}
            onClick={() => setFilter('remote')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredJobs.map(job => (
            <JobCard 
              key={job.id} 
              job={job} 
              onClick={() => setSelectedJob(job)}
            />
          ))}
        </div>

        <JobDetailModal 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      </div>
    </div>
  );
};