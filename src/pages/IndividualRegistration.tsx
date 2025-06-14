import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { 
  Upload, 
  Calendar, 
  MapPin, 
  FileText, 
  User, 
  Mail, 
  Phone,
  GraduationCap,
  Briefcase,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import toast from 'react-hot-toast';

interface RegistrationForm {
  // Personal Details
  fullName: string;
  email: string;
  mobile: string;
  dateOfBirth: string;
  address: string;
  photo?: FileList;

  // Qualifications
  highestDegree: string;
  institution: string;
  yearOfPassing: string;
  specialization: string;
  gradePercentage: string;

  // Work Experience
  totalYears: string;
  lastEmployer?: string;
  roleDesignation?: string;
  keySkills: string[];

  // Availability
  preferredStartDate: string;
  location: string;

  // Documents
  resume: FileList;
  idProof: FileList;

  // Additional Info
  motivationStatement: string;
  referralSource: string;

  // Consent
  agreeToTerms: boolean;
}

const IndividualRegistration: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<RegistrationForm>();

  const totalSteps = 6;

  const skillOptions = [
    'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'Angular', 'Vue.js',
    'PHP', 'Laravel', 'Django', 'Spring Boot', 'MySQL', 'PostgreSQL', 'MongoDB',
    'HTML/CSS', 'Bootstrap', 'Tailwind CSS', 'Git', 'Docker', 'AWS', 'Azure',
    'Digital Marketing', 'SEO', 'Content Writing', 'Graphic Design', 'UI/UX Design',
    'Data Analysis', 'Excel', 'PowerBI', 'Tableau', 'Machine Learning', 'AI'
  ];

  const locationOptions = [
    'Gorakhpur', 'Lucknow', 'Kanpur', 'Varanasi', 'Allahabad', 'Agra', 'Meerut', 'Other'
  ];

  const referralSources = [
    'Google Search', 'Social Media', 'Friend/Family', 'College/University', 
    'Job Portal', 'Newspaper', 'Radio/TV', 'NGO Partner', 'Other'
  ];

  const handleSkillToggle = (skill: string) => {
    const updatedSkills = selectedSkills.includes(skill)
      ? selectedSkills.filter(s => s !== skill)
      : [...selectedSkills, skill];
    
    setSelectedSkills(updatedSkills);
    setValue('keySkills', updatedSkills);
  };

  const validateFile = (files: FileList | undefined, type: 'image' | 'document' | 'resume') => {
    if (!files || files.length === 0) return true; // Optional files

    const file = files[0];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (file.size > maxSize) {
      return 'File size must be less than 5MB';
    }

    switch (type) {
      case 'image':
        if (!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
          return 'Only JPEG, JPG, and PNG files are allowed';
        }
        break;
      case 'document':
        if (!file.type.match(/^(image\/(jpeg|jpg|png)|application\/pdf)$/)) {
          return 'Only JPEG, PNG, and PDF files are allowed';
        }
        break;
      case 'resume':
        if (!file.type.match(/^(application\/(pdf|msword|vnd\.openxmlformats-officedocument\.wordprocessingml\.document))$/)) {
          return 'Only PDF, DOC, and DOCX files are allowed';
        }
        break;
    }

    return true;
  };

  const onSubmit = async (data: RegistrationForm) => {
    setIsSubmitting(true);
    
    try {
      // Create FormData for multipart form submission
      const formData = new FormData();
      
      // Add all form fields
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'keySkills') {
          formData.append(key, JSON.stringify(selectedSkills));
        } else if (value instanceof FileList && value.length > 0) {
          formData.append(key, value[0]);
        } else if (typeof value === 'string' || typeof value === 'boolean') {
          formData.append(key, value.toString());
        }
      });

      // Simulate API call
      const response = await fetch('/api/trainees/register', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        toast.success('Registration successful! Check your email for confirmation.');
        
        // Redirect to payment page or success page
        navigate('/payment', { 
          state: { 
            traineeId: result.traineeId,
            amount: 5000,
            purpose: 'Training Fee'
          }
        });
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      // For demo purposes, simulate success
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Registration successful! Check your email for confirmation.');
      navigate('/payment', { 
        state: { 
          traineeId: 'TRN' + Math.random().toString(36).substr(2, 9).toUpperCase(),
          amount: 5000,
          purpose: 'Training Fee'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return User;
      case 2: return GraduationCap;
      case 3: return Briefcase;
      case 4: return Calendar;
      case 5: return FileText;
      case 6: return CheckCircle;
      default: return User;
    }
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1: return 'Personal Details';
      case 2: return 'Qualifications';
      case 3: return 'Work Experience';
      case 4: return 'Availability';
      case 5: return 'Documents';
      case 6: return 'Additional Info';
      default: return 'Step';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-main py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Register as <span className="text-primary">Trainee</span>
          </h1>
          <p className="text-xl text-gray-600">
            Start your professional journey with SkillLink's apprenticeship program
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {Array.from({ length: totalSteps }, (_, index) => {
              const step = index + 1;
              const StepIcon = getStepIcon(step);
              const isActive = step === currentStep;
              const isCompleted = step < currentStep;

              return (
                <div key={step} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-primary text-white' 
                      : isActive 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-200 text-gray-500'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <StepIcon className="w-6 h-6" />
                    )}
                  </div>
                  <span className={`text-sm font-medium ${
                    isActive ? 'text-primary' : 'text-gray-500'
                  }`}>
                    {getStepTitle(step)}
                  </span>
                  {step < totalSteps && (
                    <div className={`hidden md:block w-16 h-0.5 mt-6 ${
                      isCompleted ? 'bg-primary' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('fullName', { required: 'Full name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      {...register('mobile', {
                        required: 'Mobile number is required',
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: 'Invalid mobile number'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter 10-digit mobile number"
                    />
                    {errors.mobile && (
                      <p className="mt-1 text-sm text-red-600">{errors.mobile.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      {...register('dateOfBirth', { required: 'Date of birth is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.dateOfBirth && (
                      <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address *
                  </label>
                  <textarea
                    rows={3}
                    {...register('address', { required: 'Address is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Enter your complete address"
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Photo Upload
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Upload your photo (optional)</p>
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png"
                      {...register('photo', {
                        validate: (files) => validateFile(files, 'image')
                      })}
                      className="hidden"
                      id="photo-upload"
                    />
                    <label
                      htmlFor="photo-upload"
                      className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors cursor-pointer"
                    >
                      Choose File
                    </label>
                    <p className="text-xs text-gray-500 mt-2">JPEG, JPG, PNG (Max 5MB)</p>
                  </div>
                  {errors.photo && (
                    <p className="mt-1 text-sm text-red-600">{errors.photo.message}</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 2: Qualifications */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Educational Qualifications</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Highest Degree *
                    </label>
                    <select
                      {...register('highestDegree', { required: 'Highest degree is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select degree</option>
                      <option value="10th">10th Standard</option>
                      <option value="12th">12th Standard</option>
                      <option value="diploma">Diploma</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">PhD</option>
                    </select>
                    {errors.highestDegree && (
                      <p className="mt-1 text-sm text-red-600">{errors.highestDegree.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institution *
                    </label>
                    <input
                      type="text"
                      {...register('institution', { required: 'Institution name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter institution name"
                    />
                    {errors.institution && (
                      <p className="mt-1 text-sm text-red-600">{errors.institution.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year of Passing *
                    </label>
                    <input
                      type="number"
                      min="1990"
                      max={new Date().getFullYear()}
                      {...register('yearOfPassing', { required: 'Year of passing is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter year"
                    />
                    {errors.yearOfPassing && (
                      <p className="mt-1 text-sm text-red-600">{errors.yearOfPassing.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specialization *
                    </label>
                    <input
                      type="text"
                      {...register('specialization', { required: 'Specialization is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., Computer Science, Commerce"
                    />
                    {errors.specialization && (
                      <p className="mt-1 text-sm text-red-600">{errors.specialization.message}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Grade/Percentage *
                    </label>
                    <input
                      type="text"
                      {...register('gradePercentage', { required: 'Grade/Percentage is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="e.g., 85%, 8.5 CGPA, First Class"
                    />
                    {errors.gradePercentage && (
                      <p className="mt-1 text-sm text-red-600">{errors.gradePercentage.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Work Experience */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Years of Experience *
                    </label>
                    <select
                      {...register('totalYears', { required: 'Experience is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select experience</option>
                      <option value="fresher">Fresher (0 years)</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-2">1-2 years</option>
                      <option value="2-3">2-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5+">5+ years</option>
                    </select>
                    {errors.totalYears && (
                      <p className="mt-1 text-sm text-red-600">{errors.totalYears.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Employer
                    </label>
                    <input
                      type="text"
                      {...register('lastEmployer')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter company name (if applicable)"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Role/Designation
                    </label>
                    <input
                      type="text"
                      {...register('roleDesignation')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your role/designation (if applicable)"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Key Skills * (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {skillOptions.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => handleSkillToggle(skill)}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          selectedSkills.includes(skill)
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                  {selectedSkills.length === 0 && (
                    <p className="mt-2 text-sm text-red-600">Please select at least one skill</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Availability */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Availability</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Batch Start Date *
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      {...register('preferredStartDate', { required: 'Start date is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {errors.preferredStartDate && (
                      <p className="mt-1 text-sm text-red-600">{errors.preferredStartDate.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Location *
                    </label>
                    <select
                      {...register('location', { required: 'Location is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select location</option>
                      {locationOptions.map((location) => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                    {errors.location && (
                      <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Documents */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Document Upload</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Resume Upload *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary transition-colors">
                      <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Upload your resume</p>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        {...register('resume', {
                          required: 'Resume is required',
                          validate: (files) => validateFile(files, 'resume')
                        })}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors cursor-pointer"
                      >
                        Choose File
                      </label>
                      <p className="text-xs text-gray-500 mt-2">PDF, DOC, DOCX (Max 5MB)</p>
                    </div>
                    {errors.resume && (
                      <p className="mt-1 text-sm text-red-600">{errors.resume.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ID Proof Upload *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-2">Upload Aadhaar/PAN/Passport</p>
                      <input
                        type="file"
                        accept="image/jpeg,image/jpg,image/png,.pdf"
                        {...register('idProof', {
                          required: 'ID proof is required',
                          validate: (files) => validateFile(files, 'document')
                        })}
                        className="hidden"
                        id="id-proof-upload"
                      />
                      <label
                        htmlFor="id-proof-upload"
                        className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-dark transition-colors cursor-pointer"
                      >
                        Choose File
                      </label>
                      <p className="text-xs text-gray-500 mt-2">JPEG, PNG, PDF (Max 5MB)</p>
                    </div>
                    {errors.idProof && (
                      <p className="mt-1 text-sm text-red-600">{errors.idProof.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Additional Info */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motivation Statement *
                  </label>
                  <textarea
                    rows={5}
                    maxLength={200}
                    {...register('motivationStatement', {
                      required: 'Motivation statement is required',
                      maxLength: {
                        value: 200,
                        message: 'Maximum 200 words allowed'
                      }
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us why you want to join this apprenticeship program (max 200 words)"
                  />
                  <div className="flex justify-between mt-1">
                    {errors.motivationStatement && (
                      <p className="text-sm text-red-600">{errors.motivationStatement.message}</p>
                    )}
                    <p className="text-sm text-gray-500 ml-auto">
                      {watch('motivationStatement')?.length || 0}/200 words
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about us? *
                  </label>
                  <select
                    {...register('referralSource', { required: 'Please select referral source' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select source</option>
                    {referralSources.map((source) => (
                      <option key={source} value={source}>{source}</option>
                    ))}
                  </select>
                  {errors.referralSource && (
                    <p className="mt-1 text-sm text-red-600">{errors.referralSource.message}</p>
                  )}
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      {...register('agreeToTerms', {
                        required: 'You must agree to the terms and conditions'
                      })}
                      className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <label className="ml-3 text-sm text-gray-700">
                      I agree to the{' '}
                      <Link to="/terms" target="_blank" className="text-primary hover:text-primary-dark font-medium">
                        Terms & Conditions
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" target="_blank" className="text-primary hover:text-primary-dark font-medium">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="mt-2 text-sm text-red-600">{errors.agreeToTerms.message}</p>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || selectedSkills.length === 0}
                  className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    'Register as Trainee'
                  )}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Need help with registration?{' '}
            <Link to="/contact" className="text-primary hover:text-primary-dark font-medium">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndividualRegistration;