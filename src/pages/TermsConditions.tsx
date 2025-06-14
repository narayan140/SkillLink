import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';

const TermsConditions: React.FC = () => {
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
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Terms & Conditions</h1>
              <p className="text-gray-600">Last updated: January 2024</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using SkillLink's apprenticeship placement platform, you accept and agree to be bound by the terms and provision of this agreement. These Terms and Conditions govern your use of our services, including registration, training programs, and placement assistance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility Criteria</h2>
            <p className="text-gray-700 mb-4">To participate in our apprenticeship programs, you must:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Be at least 18 years of age</li>
              <li>Have completed minimum 10th standard education</li>
              <li>Provide accurate and complete information during registration</li>
              <li>Be legally eligible to work in India</li>
              <li>Commit to the full duration of the selected program</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Registration and Account</h2>
            <p className="text-gray-700 mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>You must not share your account credentials with others</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Training Programs</h2>
            <p className="text-gray-700 mb-4">Our apprenticeship programs include:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Structured learning modules and practical training</li>
              <li>Mentorship from industry professionals</li>
              <li>Placement assistance upon successful completion</li>
              <li>Certification recognized by partner companies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fees and Payment</h2>
            <p className="text-gray-700 mb-4">
              A training fee of ₹5,000 is applicable for all apprenticeship programs. This fee covers:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Complete course materials and resources</li>
              <li>Access to online learning platform</li>
              <li>Mentorship and guidance sessions</li>
              <li>Certification upon completion</li>
              <li>Placement assistance for up to 6 months</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Payment must be made within 7 days of registration confirmation. Refunds are available only if the program is cancelled by SkillLink.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Attendance and Performance</h2>
            <p className="text-gray-700 mb-4">Participants are expected to:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Maintain minimum 80% attendance in all sessions</li>
              <li>Complete all assignments and assessments on time</li>
              <li>Participate actively in group activities and projects</li>
              <li>Maintain professional conduct throughout the program</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Placement Assistance</h2>
            <p className="text-gray-700 mb-6">
              While we provide placement assistance to all successful candidates, we do not guarantee employment. Placement depends on various factors including market conditions, candidate performance, and company requirements. We commit to providing interview opportunities with our partner companies for eligible candidates.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All course materials, content, and resources provided during the program are the intellectual property of SkillLink and our partners. Participants may not reproduce, distribute, or share these materials without explicit written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-6">
              We are committed to protecting your privacy. Personal information collected during registration and training will be used solely for program administration and placement assistance. We may share your profile with partner companies for placement purposes with your consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Code of Conduct</h2>
            <p className="text-gray-700 mb-4">All participants must adhere to our code of conduct:</p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Treat all participants, trainers, and staff with respect</li>
              <li>Maintain confidentiality of sensitive information</li>
              <li>Avoid any form of harassment or discrimination</li>
              <li>Follow all safety protocols and guidelines</li>
              <li>Report any violations to program coordinators</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to terminate your participation in the program for violations of these terms, poor attendance, inappropriate behavior, or failure to meet program requirements. In such cases, fees will not be refunded.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              SkillLink shall not be liable for any indirect, incidental, special, or consequential damages arising from your participation in our programs. Our total liability shall not exceed the amount of fees paid by you.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Modifications</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these terms at any time. Changes will be communicated to registered participants via email. Continued participation in the program after changes constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in Gorakhpur, Uttar Pradesh.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-gray-700"><strong>SkillLink</strong></p>
              <p className="text-gray-700">Civil Lines, Gorakhpur, Uttar Pradesh 273001</p>
              <p className="text-gray-700">Email: legal@skilllink.in</p>
              <p className="text-gray-700">Phone: +91 9876543210</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            By registering with SkillLink, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;