import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Building, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Star,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  UserPlus
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const stats = [
    { icon: Users, label: 'Active Candidates', value: '2,847', color: 'text-primary' },
    { icon: Building, label: 'Partner Companies', value: '156', color: 'text-secondary' },
    { icon: Award, label: 'Successful Placements', value: '1,234', color: 'text-primary' },
    { icon: TrendingUp, label: 'Growth Rate', value: '87%', color: 'text-secondary' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Developer',
      company: 'TechCorp India',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'SkillLink transformed my career. From learning basic programming to landing my dream job at TechCorp, the journey has been incredible. The mentorship and hands-on training were exactly what I needed.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Digital Marketing Specialist',
      company: 'Growth Solutions',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The apprenticeship program at SkillLink gave me real-world experience. The companies here genuinely care about your growth and provide excellent learning opportunities.'
    },
    {
      name: 'Anita Verma',
      role: 'Data Analyst',
      company: 'Analytics Pro',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Thanks to SkillLink, I discovered my passion for data analysis. The structured learning path and industry connections helped me secure a position at one of the top analytics firms.'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Register',
      description: 'Complete your profile with skills, qualifications, and career preferences',
      icon: UserPlus
    },
    {
      step: '02',
      title: 'Get Matched',
      description: 'Our AI matches you with suitable training programs and companies',
      icon: Users
    },
    {
      step: '03',
      title: 'Train & Learn',
      description: 'Participate in hands-on training with industry mentors',
      icon: Award
    },
    {
      step: '04',
      title: 'Get Placed',
      description: 'Secure your dream job with our partner companies',
      icon: TrendingUp
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
        {/* Curved SVG Overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-20 md:h-32 fill-current text-white/10"
          >
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Gateway to 
                <span className="text-primary"> Professional</span> Excellence
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Connect with top companies in Gorakhpur through our comprehensive apprenticeship program. 
                Transform your skills into career opportunities with personalized mentorship and hands-on training.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/register"
                  className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center flex items-center justify-center"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Register as Trainee
                </Link>
                <Link
                  to="/signup?role=ngo"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Register as NGO
                </Link>
                <Link
                  to="/signup?role=company"
                  className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-semibold hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Partner Company
                </Link>
              </div>
            </div>
            
            <div className="relative animate-bounce-subtle">
              <img
                src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Professional team collaboration"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">87% Success Rate</p>
                    <p className="text-sm text-gray-600">Job Placement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-main hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your journey from registration to placement in four simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-primary font-bold text-lg mb-2">Step {item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose SkillLink?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform bridges the gap between talent and opportunity, 
              providing structured pathways for career advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Mentorship',
                description: 'Get guidance from industry professionals with years of experience in your field.'
              },
              {
                icon: Building,
                title: 'Top Companies',
                description: 'Access exclusive opportunities with leading companies in Gorakhpur and beyond.'
              },
              {
                icon: Award,
                title: 'Certified Training',
                description: 'Receive industry-recognized certifications that boost your career prospects.'
              },
              {
                icon: TrendingUp,
                title: 'Career Growth',
                description: 'Track your progress and advance through structured learning pathways.'
              },
              {
                icon: CheckCircle,
                title: 'Job Guarantee',
                description: 'High placement rates with ongoing support until you find the right position.'
              },
              {
                icon: Star,
                title: 'Quality Assurance',
                description: 'Rigorous quality standards ensure you receive the best training and opportunities.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-main rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our successful apprentices who transformed their careers
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                />
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-primary font-medium">
                      {testimonials[currentTestimonial].role}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-primary"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-primary"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 hover:text-primary"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful professionals who started their careers through SkillLink. 
            Your dream job is just one step away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Register as Trainee
            </Link>
            <Link
              to="/signup"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
            >
              Join as Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;