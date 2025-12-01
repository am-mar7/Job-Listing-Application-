interface DashboardHeaderProps {
  totalJobs: number;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ totalJobs }) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Job Listings</h1>
      <p className="text-gray-600">
        Find your dream job from {totalJobs} available positions
      </p>
    </div>
  );
};