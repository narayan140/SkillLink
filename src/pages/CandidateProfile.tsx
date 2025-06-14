import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Award,
  TrendingUp,
  CheckCircle,
  Clock,
  Star
} from 'lucide-react';
import toast from 'react-hot-toast';

const CandidateProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock candidate data - in production, this would be fetched from API
  const candidate = {
    id: id || '1',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 9876543210',
    location: 'Gorakhpur, UP',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    title: 'Full Stack Developer',
    experience: '2 years',
    education: 'B.Tech Computer Science',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 70 },
      { name: 'MongoDB', level: 65 }
    ],
    certifications: [
      'Full Stack Web Development - SkillLink',
      'React Developer Certification',
      'AWS Cloud Practitioner'
    ],
    projects: [
      {
        name: 'E-commerce Platform',
        description: 'Built a complete e-commerce solution using React and Node.js',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
      },
      {
        name: 'Task Management App',
        description: 'Developed a collaborative task management application',
        technologies: ['React', 'Firebase', 'Material-UI']
      }
    ],
    achievements: [
      'Top performer in SkillLink Web Development Program',
      'Successfully completed 3 client projects',
      'Mentored 5 junior developers'
    ],
    availability: 'Available for immediate joining',
    expectedSalary: '₹4-6 LPA',
    joinedDate: '2024-01-15',
    status: 'Available'
  };

  const handleRequestInterview = () => {
    toast.success('Interview request sent successfully! The candidate will be notified.');
  };

  const handleDownloadResume = () => {
    toast.success('Resume download started');
  };

  const getSkillColor = (level: number) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 60) return 'bg-primary';
    return 'bg-yellow-500';
  };

  return (
    <div className="min-h-screen bg-gradient-main py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/company-dashboard"
            className="text-primary hover:text-primary-dark font-medium mb-4 inline-block"
          >
            ← Back to Dashboard
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
              <div className="text-center">
                <img
                  src={candidate.avatar}
                  alt={candidate.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-primary/10"
                />
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{candidate.name}</h1>
                <p className="text-primary font-medium mb-4">{candidate.title}</p>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm">{candidate.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm">{candidate.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm">{candidate.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-3 text-primary" />
                    <span className="text-sm">Joined {new Date(candidate.joinedDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Availability</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {candidate.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Expected Salary</span>
                  <span className="font-medium text-gray-900">{candidate.expectedSalary}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Experience</span>
                  <span className="font-medium text-gray-900">{candidate.experience}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleRequestInterview}
                className="w-full bg-primary text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Request Interview
              </button>
              <button
                onClick={handleDownloadResume}
                className="w-full border-2 border-primary text-primary py-3 px-4 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Column - Detailed Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {candidate.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Projects</h3>
              <div className="space-y-6">
                {candidate.projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{project.name}</h4>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Certifications</h3>
              <div className="space-y-3">
                {candidate.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="w-5 h-5 text-primary mr-3" />
                    <span className="text-gray-900">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Achievements</h3>
              <div className="space-y-3">
                {candidate.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-5 h-5 text-secondary mr-3" />
                    <span className="text-gray-900">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{candidate.education}</h4>
                  <p className="text-gray-600">Computer Science Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;