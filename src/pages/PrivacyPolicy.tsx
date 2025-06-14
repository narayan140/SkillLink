import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-main py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/register"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Registration
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: January 2024</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              SkillLink ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our apprenticeship placement platform and services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">We collect personal information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Full name, email address, and phone number</li>
              <li>Date of birth and residential address</li>
              <li>Educational qualifications and work experience</li>
              <li>Skills, certifications, and professional interests</li>
              <li>Resume, portfolio, and other documents</li>
              <li>Profile photographs and identification documents</li>
              <li>Payment information for training fees</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Information</h3>
            <p className="text-gray-700 mb-4">We automatically collect certain information when you use our platform:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage patterns and interaction with our platform</li>
              <li>Log files and analytics data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>To provide and maintain our apprenticeship services</li>
              <li>To process your registration and manage your account</li>
              <li>To match you with suitable training programs and job opportunities</li>
              <li>To communicate with you about programs, updates, and opportunities</li>
              <li>To process payments and maintain financial records</li>
              <li>To improve our services and develop new features</li>
              <li>To comply with legal obligations and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">With Partner Companies</h3>
            <p className="text-gray-700 mb-4">
              We may share your profile information with our partner companies for placement opportunities, but only with your explicit consent. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Resume and professional qualifications</li>
              <li>Skills and experience details</li>
              <li>Contact information for interview scheduling</li>
              <li>Performance records from training programs</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">With NGO Partners</h3>
            <p className="text-gray-700 mb-6">
              We share necessary information with our NGO partners to facilitate training program administration and candidate support services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Requirements</h3>
            <p className="text-gray-700 mb-6">
              We may disclose your information if required by law, court order, or government regulation, or to protect our rights, property, or safety.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">We implement appropriate security measures to protect your personal information:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers with access controls</li>
              <li>Regular security audits and updates</li>
              <li>Employee training on data protection</li>
              <li>Backup and disaster recovery procedures</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. After program completion, we may retain your information for up to 3 years for placement assistance and alumni services, unless you request deletion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Consent withdrawal:</strong> Withdraw consent for data processing</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Remember your preferences and login status</li>
              <li>Analyze website usage and improve performance</li>
              <li>Provide personalized content and recommendations</li>
              <li>Enable social media features and advertising</li>
            </ul>
            <p className="text-gray-700 mb-6">
              You can control cookie settings through your browser preferences, but some features may not function properly if cookies are disabled.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Services</h2>
            <p className="text-gray-700 mb-6">
              Our platform may contain links to third-party websites or integrate with external services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information promptly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
            <p className="text-gray-700 mb-6">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by email or through our platform. Your continued use of our services after such modifications constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-700"><strong>Data Protection Officer</strong></p>
              <p className="text-gray-700">SkillLink</p>
              <p className="text-gray-700">Civil Lines, Gorakhpur, Uttar Pradesh 273001</p>
              <p className="text-gray-700">Email: privacy@skilllink.in</p>
              <p className="text-gray-700">Phone: +91 9876543210</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Consent</h2>
            <p className="text-gray-700 mb-6">
              By using our platform and services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree with this policy, please do not use our services.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Your privacy is important to us. We are committed to protecting your personal information and being transparent about our data practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;