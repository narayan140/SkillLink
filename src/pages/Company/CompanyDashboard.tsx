import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Users, 
  Eye, 
  Heart,
  MessageCircle,
  TrendingUp,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface Candidate {
  id: string;
  name: string;
  title: string;
  location: string;
  experience: string;
  skills: string[];
  avatar: string;
  status: 'available' | 'interviewing' | 'hired';
  rating: number;
  expectedSalary: string;
  lastActive: string;
}

const CompanyDashboard: React.FC = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [skillFilter, setSkillFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [shortlistedCandidates, setShortlistedCandidates] = useState<string[]>([]);

  // Mock candidates data
  const [candidates] = useState<Candidate[]>([
    {
      id: '1',
      name: 'Rajesh Kumar',
      title: 'Full Stack Developer',
      location: 'Gorakhpur, UP',
      experience: '2 years',
      skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      status: 'available',
      rating: 4.8,
      expectedSalary: '₹4-6 LPA',
      lastActive: '2 hours ago'
    },
    {
      id: '2',
      name: 'Priya Sharma',
      title: 'Frontend Developer',
      location: 'Gorakhpur, UP',
      experience: '1.5 years',
      skills: ['React', 'Vue.js', 'CSS', 'JavaScript'],
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      status: 'available',
      rating: 4.6,
      expectedSalary: '₹3-5 LPA',
      lastActive: '1 day ago'
    },
    {
      id: '3',
      name: 'Amit Verma',
      title: 'Backend Developer',
      location: 'Gorakhpur, UP',
      experience: '3 years',
      skills: ['Python', 'Django', 'PostgreSQL', 'AWS'],
      avatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      status: 'interviewing',
      rating: 4.9,
      expectedSalary: '₹5-8 LPA',
      lastActive: '3 hours ago'
    },
    {
      id: '4',
      name: 'Sneha Gupta',
      title: 'UI/UX Designer',
      location: 'Gorakhpur, UP',
      experience: '2.5 years',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      status: 'available',
      rating: 4.7,
      expectedSalary: '₹4-6 LPA',
      lastActive: '5 hours ago'
    }
  ]);

  const stats = [
    { label: 'Total Candidates', value: candidates.length, icon: Users, color: 'text-blue-600' },
    { label: 'Shortlisted', value: shortlistedCandidates.length, icon: Heart, color: 'text-red-600' },
    { label: 'Interviewing', value: candidates.filter(c => c.status === 'interviewing').length, icon: Clock, color: 'text-yellow-600' },
    { label: 'Hired', value: candidates.filter(c => c.status === 'hired').length, icon: CheckCircle, color: 'text-green-600' },
  ];

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSkill = !skillFilter || candidate.skills.some(skill => 
      skill.toLowerCase().includes(skillFilter.toLowerCase())
    );
    
    const matchesExperience = !experienceFilter || candidate.experience.includes(experienceFilter);
    
    return matchesSearch && matchesSkill && matchesExperience;
  });

  const toggleShortlist = (candidateId: string) => {
    setShortlistedCandidates(prev => 
      prev.includes(candidateId) 
        ? prev.filter(id => id !== candidateId)
        : [...prev, candidateId]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'interviewing': return 'bg-yellow-100 text-yellow-800';
      case 'hired': return 'bg-primary/10 text-primary';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available': return <CheckCircle className="w-4 h-4" />;
      case 'interviewing': return <Clock className="w-4 h-4" />;
      case 'hired': return <TrendingUp className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-main py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Company Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user?.name}!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl bg-gray-50`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Find Candidates</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search candidates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Filter by skill..."
                value={skillFilter}
                onChange={(e) => setSkillFilter(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            
            <select
              value={experienceFilter}
              onChange={(e) => setExperienceFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">All Experience</option>
              <option value="1">1+ years</option>
              <option value="2">2+ years</option>
              <option value="3">3+ years</option>
            </select>
            
            <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Candidates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCandidates.map((candidate) => (
            <div key={candidate.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={candidate.avatar}
                    alt={candidate.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
                    <p className="text-sm text-primary">{candidate.title}</p>
                  </div>
                </div>
                <button
                  onClick={() => toggleShortlist(candidate.id)}
                  className={`p-2 rounded-full transition-colors ${
                    shortlistedCandidates.includes(candidate.id)
                      ? 'bg-red-100 text-red-600'
                      : 'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-600'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${shortlistedCandidates.includes(candidate.id) ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Location</span>
                  <span className="text-gray-900">{candidate.location}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Experience</span>
                  <span className="text-gray-900">{candidate.experience}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Expected Salary</span>
                  <span className="text-gray-900">{candidate.expectedSalary}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-gray-900">{candidate.rating}</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {candidate.skills.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                      +{candidate.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(candidate.status)}`}>
                  {getStatusIcon(candidate.status)}
                  <span className="ml-1 capitalize">{candidate.status}</span>
                </span>
                <span className="text-xs text-gray-500">Active {candidate.lastActive}</span>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <Link
                  to={`/candidate/${candidate.id}`}
                  className="flex-1 bg-primary text-white py-2 px-4 rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors text-center flex items-center justify-center"
                >
                  <Eye className="w-4 h-4 mr-1" />
                  View Profile
                </Link>
                <button className="bg-gray-100 text-gray-600 py-2 px-4 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCandidates.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No candidates found</h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyDashboard;