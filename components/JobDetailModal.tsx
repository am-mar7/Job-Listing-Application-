import React from "react";
import {
  MapPin,
  Briefcase,
  Calendar,
  CheckCircle,
  Users,
  Building2,
  Clock,
  Tag,
} from "lucide-react";
import { Job } from "@/types/job";
import Image from "next/image";

interface JobDetailModalProps {
  job: Job | null;
  onClose: () => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  job,
  onClose,
}) => {
  if (!job) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header Section */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                <Image
                  width={200}
                  height={200}
                  src={job.logo}
                  alt={job.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h2>
                <div className="flex items-center gap-2 text-gray-600">
                  <Building2 className="w-5 h-5" />
                  <span className="text-lg">{job.company}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Job Info Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span>Posted: {job.postedDate}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Clock className="w-5 h-5 text-blue-600" />
              <span>Deadline: {job.deadline}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="w-5 h-5 text-green-600" />
              <span>Start: {job.startDate}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="w-5 h-5 text-red-600" />
              <span>End: {job.endDate}</span>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Tag className="w-5 h-5" />
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.categories.map((category, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-50 text-purple-700 text-sm font-medium rounded-lg"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Job Description
            </h3>
            <p className="text-gray-600 leading-relaxed">{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Responsibilities
            </h3>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-600"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Skills */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Required Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.requiredSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Ideal Candidate */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Ideal Candidate
            </h3>
            <div className="bg-blue-50 p-4 rounded-lg mb-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Age:</span>
                  <span className="ml-2 text-gray-600">
                    {job.idealCandidate.age}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Gender:</span>
                  <span className="ml-2 text-gray-600">
                    {job.idealCandidate.gender}
                  </span>
                </div>
              </div>
            </div>
            <ul className="space-y-2">
              {job.idealCandidate.traits.map((trait, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-600 text-sm"
                >
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* When & Where */}
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              When & Where
            </h3>
            <p className="text-gray-700">{job.whenWhere}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Apply Now
            </button>
            <button className="px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg transition-colors">
              Save Job
            </button>
          </div>

          {/* Applicants Info */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              <Users className="w-4 h-4 inline mr-1" />
              {job.applicants} people have already applied
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
