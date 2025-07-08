import React from 'react';

// Define the main TermsOfService component
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 font-inter text-gray-100 p-4 sm:p-8 md:p-12 lg:p-16 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 border border-gray-700">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-400 mb-6 sm:mb-8 md:mb-10 rounded-lg p-2">
          Terms of Service
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mb-6 text-center">
          Last Updated: July 8, 2025
        </p>

        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-300 mb-4 pb-2 border-b-2 border-indigo-700">
            1. Introduction
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            Welcome to VeriCheck (https://www.vericheck.co.zw/). These Terms of Service ("Terms") govern your access to and use of the VeriCheck website and services (collectively, the "Service"). Please read these Terms carefully before using our Service.
          </p>
          <p className="text-gray-300 leading-relaxed">
            By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use the Service.
          </p>
        </section>

        {/* Account Registration Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-300 mb-4 pb-2 border-b-2 border-indigo-700">
            2. Account Registration
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            To access certain features of the Service, you may be required to register for an account. When you register, you agree to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed pl-4">
            <li>Provide accurate, current, and complete information as prompted by the registration form.</li>
            <li>Maintain the security of your password and identification.</li>
            <li>Maintain and promptly update the registration data, and any other information you provide to us, to keep it accurate, current, and complete.</li>
            <li>Be responsible for all activities that occur under your account.</li>
            <li>Immediately notify us of any unauthorized use of your account or any other breach of security.</li>
          </ul>
        </section>

        {/* Use of Service Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-300 mb-4 pb-2 border-b-2 border-indigo-700">
            3. Use of Service
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            You agree to use the Service only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the Service. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Service.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed pl-4">
            <li>You must not use the Service to transmit any unsolicited or unauthorized advertising or promotional material.</li>
            <li>You must not knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.</li>
          </ul>
        </section>

        {/* Intellectual Property Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-300 mb-4 pb-2 border-b-2 border-indigo-700">
            4. Intellectual Property
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            All content on the Service, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of VeriCheck or its content suppliers and protected by international copyright laws. The compilation of all content on this Service is the exclusive property of VeriCheck and protected by international copyright laws.
          </p>
        </section>

        {/* Disclaimers Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-300 mb-4 pb-2 border-b-2 border-indigo-700">
            5. Disclaimers
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            The Service is provided on an "as is" and "as available" basis. VeriCheck makes no representations or warranties of any kind, express or implied, as to the operation of the Service or the information, content, materials, or products included on the Service. You expressly agree that your use of the Service is at your sole risk.
          </p>
        </section>

        {/* Limitation of Liability Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-300 mb-4 pb-2 border-b-2 border-indigo-700">
            6. Limitation of Liability
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            In no event shall VeriCheck, its directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Service, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        {/* Governing Law Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-300 mb-4 pb-2 border-b-2 border-indigo-700">
            7. Governing Law
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of Zimbabwe, without regard to its conflict of law principles.
          </p>
        </section>

        {/* Changes to Terms Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-300 mb-4 pb-2 border-b-2 border-indigo-700">
            8. Changes to Terms
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p className="text-gray-300 leading-relaxed">
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
          </p>
        </section>

        {/* Contact Us Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-indigo-300 mb-4 pb-2 border-b-2 border-indigo-700">
            9. Contact Us
          </h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed pl-4">
            <li>
              <strong>Email:</strong> <a href="mailto:info@vericheck.co.zw" className="text-blue-400 hover:underline">info@vericheck.co.zw</a>
            </li>
            <li>
              <strong>Website:</strong> <a href="https://www.vericheck.co.zw/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://www.vericheck.co.zw/</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
