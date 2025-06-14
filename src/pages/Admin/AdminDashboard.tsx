import React, { useState } from 'react';
import { 
  Users, 
  Building, 
  Award, 
  TrendingUp, 
  BarChart3,
  PieChart,
  Calendar,
  DollarSign,
  UserCheck,
  UserX,
  Settings,
  Download
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in production, this would come from APIs
  const stats = [
    { label: 'Total Candidates', value: '2,847', change: '+12%', icon: Users, color: 'text-blue-600' },
    { label: 'Active NGOs', value: '45', change: '+8%', icon: Building, color: 'text-green-600' },
    { label: 'Partner Companies', value: '156', change: '+15%', icon: Award, color: 'text-purple-600' },
    { label: 'Placements This Month', value: '89', change: '+23%', icon: TrendingUp, color: 'text-primary' },
    { label: 'Revenue', value: '₹12.5L', change: '+18%', icon: DollarSign, color: 'text-yellow-600' },
    { label: 'Success Rate', value: '87%', change: '+3%', icon: UserCheck, color: 'text-green-600' },
  ];

  const recentActivities = [
    { type: 'placement', message: 'Rajesh Kumar placed at TechCorp', time: '2 hours ago' },
    { type: 'registration', message: 'New NGO "Skill Foundation" registered', time: '4 hours ago' },
    { type: 'company', message: 'InnovateTech joined as partner company', time: '6 hours ago' },
    { type: 'payment', message: 'Payment of ₹25,000 received from ABC Corp', time: '1 day ago' },
    { type: 'training', message: 'Web Development batch completed', time: '2 days ago' },
  ];

  const topPerformingNGOs = [
    { name: 'Skill Development Foundation', placements: 45, success_rate: '92%' },
    { name: 'Youth Empowerment Trust', placements: 38, success_rate: '89%' },
    { name: 'Career Growth NGO', placements: 32, success_rate: '85%' },
    { name: 'Future Skills Academy', placements: 28, success_rate: '83%' },
  ];

  const topHiringCompanies = [
    { name: 'TechCorp India', hires: 23, budget: '₹15L' },
    { name: 'InnovateTech Solutions', hires: 18, budget: '₹12L' },
    { name: 'Digital Dynamics', hires: 15, budget: '₹10L' },
    { name: 'Future Systems', hires: 12, budget: '₹8L' },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'placement': return <UserCheck className="w-4 h-4 text-green-600" />;
      case 'registration': return <Users className="w-4 h-4 text-blue-600" />;
      case 'company': return <Building className="w-4 h-4 text-purple-600" />;
      case 'payment': return <DollarSign className="w-4 h-4 text-yellow-600" />;
      case 'training': return <Award className="w-4 h-4 text-primary" />;
      default: return <Settings className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-main py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user?.name}! Here's your platform overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-xl bg-gray-50`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'analytics', label: 'Analytics', icon: PieChart },
                { id: 'reports', label: 'Reports', icon: Download },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activities */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-xl bg-gray-50">
                        <div className="flex-shrink-0 mt-1">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{activity.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Performing NGOs */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing NGOs</h3>
                  <div className="space-y-3">
                    {topPerformingNGOs.map((ngo, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                        <div>
                          <p className="font-medium text-gray-900">{ngo.name}</p>
                          <p className="text-sm text-gray-600">{ngo.placements} placements</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-primary">{ngo.success_rate}</p>
                          <p className="text-xs text-gray-500">Success Rate</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Top Hiring Companies */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Hiring Companies</h3>
                  <div className="space-y-3">
                    {topHiringCompanies.map((company, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                        <div>
                          <p className="font-medium text-gray-900">{company.name}</p>
                          <p className="text-sm text-gray-600">{company.hires} hires this month</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-primary">{company.budget}</p>
                          <p className="text-xs text-gray-500">Total Budget</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Placement Trends Chart Placeholder */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Placement Trends</h3>
                  <div className="bg-gradient-main rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-primary mx-auto mb-3" />
                      <p className="text-gray-600">Chart visualization</p>
                      <p className="text-sm text-gray-500">Integration with Chart.js coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="text-center py-12">
                <Download className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Generate Reports</h3>
                <p className="text-gray-600 mb-6">
                  Download comprehensive reports on placements, revenue, and performance metrics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                    Monthly Report
                  </button>
                  <button className="border-2 border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors">
                    Quarterly Report
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                    Custom Report
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Manage Users</h3>
            <p className="text-gray-600 text-sm mb-4">
              Add, edit, or remove NGOs, companies, and candidates from the platform.
            </p>
            <button className="w-full bg-primary text-white py-2 px-4 rounded-xl font-medium hover:bg-primary-dark transition-colors">
              User Management
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Platform Settings</h3>
            <p className="text-gray-600 text-sm mb-4">
              Configure platform settings, payment gateways, and system preferences.
            </p>
            <button className="w-full border-2 border-primary text-primary py-2 px-4 rounded-xl font-medium hover:bg-primary hover:text-white transition-colors">
              Settings
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Support Center</h3>
            <p className="text-gray-600 text-sm mb-4">
              View support tickets, user feedback, and platform health metrics.
            </p>
            <button className="w-full border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors">
              Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;