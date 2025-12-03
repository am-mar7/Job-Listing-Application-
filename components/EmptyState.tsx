import React from 'react';
import { Briefcase } from 'lucide-react';

export const EmptyState: React.FC = () => {
  return (
    <div className="text-center py-12">
      <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
      <p className="text-gray-600">Try adjusting your filters to see more results</p>
    </div>
  );
};