'use client';

import React, { useState, useMemo } from 'react';
import { jobsData } from '@/data/jobs';
import { Job } from '@/types/job';
import { JobHeader } from '@/components/JobHeader';
import { JobFilters } from '@/components/JobFilters';
import { JobCard } from '@/components/JobCard';
import { JobDetailModal } from '@/components/JobDetailModal';
import { EmptyState } from '@/components/EmptyState';
import { Footer } from '@/components/Footer';

const JobListingDashboard: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [filterType, setFilterType] = useState<string>('All');
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Get unique categories
  const allCategories = useMemo(() => {
    return ['All', ...new Set(jobsData.flatMap(job => job.categories))];
  }, []);

  // Filter jobs based on selected filters
  const filteredJobs = useMemo(() => {
    return jobsData.filter(job => {
      const typeMatch = filterType === 'All' || job.type === filterType;
      const categoryMatch = filterCategory === 'All' || job.categories.includes(filterCategory);
      return typeMatch && categoryMatch;
    });
  }, [filterType, filterCategory]);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <JobHeader jobCount={filteredJobs.length} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <JobFilters
          filterType={filterType}
          setFilterType={setFilterType}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          allCategories={allCategories}
        />

        {/* Job Cards Grid */}
        {filteredJobs.length > 0 ? (
          <div className="flex flex-col gap-4">
            {filteredJobs.map((job) => (
              <JobCard 
                key={job.id}
                job={job}
                onClick={() => setSelectedJob(job)}
              />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </main>

      {/* Job Detail Modal */}
      {selectedJob && (
        <JobDetailModal 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JobListingDashboard;