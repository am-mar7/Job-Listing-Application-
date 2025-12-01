import { MapPin, DollarSign, Briefcase, Users, Star } from 'lucide-react';
import type{ Job } from '../types/job';

interface JobDetailModalProps {
  job: Job | null;
  onClose: () => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
          <div className="flex items-start gap-4">
            <img 
              src={job.avatar} 
              alt={job.company}
              className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-3"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-1">{job.title}</h2>
              <p className="text-lg text-gray-600 font-medium">{job.company}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-gray-600">{job.rating} Company Rating</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <MapPin className="w-5 h-5 text-blue-600 mb-2" />
              <p className="text-xs text-gray-600 mb-1">Location</p>
              <p className="font-semibold text-gray-800">{job.location}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <DollarSign className="w-5 h-5 text-green-600 mb-2" />
              <p className="text-xs text-gray-600 mb-1">Salary</p>
              <p className="font-semibold text-gray-800">{job.salary}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <Briefcase className="w-5 h-5 text-purple-600 mb-2" />
              <p className="text-xs text-gray-600 mb-1">Experience</p>
              <p className="font-semibold text-gray-800">{job.experience}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <Users className="w-5 h-5 text-orange-600 mb-2" />
              <p className="text-xs text-gray-600 mb-1">Applicants</p>
              <p className="font-semibold text-gray-800">{job.applicants}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Job Description</h3>
            <p className="text-gray-600 leading-relaxed">{job.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.requirements.map((req, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-lg"
                >
                  {req}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-6 border-t border-gray-200">
            <button className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Apply for this Position
            </button>
            <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Save Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};