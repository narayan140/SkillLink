import React from 'react';
import { Users, Target, Award, Heart, CheckCircle, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Rajesh Gupta',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Former IIT professor with 15+ years in skill development and education policy.'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Expert in workforce development with extensive NGO and corporate experience.'
    },
    {
      name: 'Amit Kumar',
      role: 'Technology Director',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Tech entrepreneur focused on building scalable platforms for social impact.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Committed to bridging the skill gap and creating meaningful employment opportunities for youth in Gorakhpur.'
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in empowering local communities through sustainable skill development programs.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining high standards in training quality and placement success rates.'
    },
    {
      icon: CheckCircle,
      title: 'Transparency',
      description: 'Open communication and clear processes for all stakeholders in our ecosystem.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-main">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-primary">SkillLink</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're transforming lives in Gorakhpur by connecting talented individuals with 
              meaningful career opportunities through comprehensive apprenticeship programs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To create a sustainable ecosystem where NGOs, companies, and candidates collaborate 
                to build a skilled workforce that drives economic growth in Gorakhpur and beyond.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every individual deserves access to quality training and meaningful 
                employment opportunities, regardless of their background or circumstances.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">2,847+</p>
                    <p className="text-sm text-gray-600">Lives Impacted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-main hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Location</h2>
            <p className="text-xl text-gray-600">
              Proudly serving the Gorakhpur community
            </p>
          </div>
          
          <div className="bg-gradient-main rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-primary mr-3" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">SkillLink Headquarters</h3>
                <p className="text-gray-600">Civil Lines, Gorakhpur, Uttar Pradesh 273001</p>
              </div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Gorakhpur, we're easily accessible to candidates, 
              NGOs, and companies throughout the region. Our modern facility provides 
              the perfect environment for training and collaboration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;