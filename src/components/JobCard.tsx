import { Briefcase, MapPin, DollarSign, Clock, Users, Star } from 'lucide-react';
import type { Job } from '../types/job';

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer border border-gray-100 hover:border-blue-300"
    >
      <div className="flex items-start gap-4 mb-4">
        <img 
          src={job.avatar} 
          alt={job.company}
          className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-2"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
          <p className="text-gray-600 font-medium">{job.company}</p>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">{job.rating}</span>
          </div>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
          {job.type}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.requirements.map((req, idx) => (
          <span 
            key={idx}
            className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
          >
            {req}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <DollarSign className="w-4 h-4" />
          <span className="text-sm">{job.salary}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Briefcase className="w-4 h-4" />
          <span className="text-sm">{job.experience}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Users className="w-4 h-4" />
          <span className="text-sm">{job.applicants} applicants</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Clock className="w-4 h-4" />
          <span>{job.postedDate}</span>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};