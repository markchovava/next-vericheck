import React from 'react';

// Define the main PrivacyPolicy component
export default function Page() {

  return (
    <div className="min-h-screen bg-gray-900 font-inter text-gray-900 dark:text-gray-100 p-4 sm:p-8 md:p-12 lg:p-16 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-primary mb-6 sm:mb-8 md:mb-10 rounded-lg p-2">
          Privacy Policy
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 text-center">
          Last Updated: July 8, 2025
        </p>

        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-primary mb-4 pb-2 border-b-2 border-indigo-200 dark:border-primary">
            1. Introduction
          </h2>
          <p className="mb-4 text-gray-800 dark:text-gray-300 leading-relaxed">
            Welcome to VeriCheck (https://www.vericheck.co.zw/). We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the website or use our services.
          </p>
        </section>

        {/* Information We Collect Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-primary mb-4 pb-2 border-b-2 border-indigo-200 dark:border-primary">
            2. Information We Collect
          </h2>
          <p className="mb-4 text-gray-800 dark:text-gray-300 leading-relaxed">
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-indigo-400 mb-2">
            2.1. Personal Data
          </h3>
          <p className="mb-2 text-gray-800 dark:text-gray-300 leading-relaxed">
            Personally identifiable information, such as your name, email address, postal address, phone number, and demographic information (such as age, gender, occupation) that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-indigo-400 mb-2 mt-4">
            2.2. Derivative Data
          </h3>
          <p className="mb-2 text-gray-800 dark:text-gray-300 leading-relaxed">
            Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-indigo-400 mb-2 mt-4">
            2.3. Financial Data
          </h3>
          <p className="mb-2 text-gray-800 dark:text-gray-300 leading-relaxed">
            Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, and you are encouraged to review their privacy policy.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-indigo-400 mb-2 mt-4">
            2.4. Data from Social Networks
          </h3>
          <p className="mb-2 text-gray-800 dark:text-gray-300 leading-relaxed">
            User information from social networking sites, such as Facebook, Google+, Instagram, Pinterest, Twitter, including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-indigo-400 mb-2 mt-4">
            2.5. Mobile Device Data
          </h3>
          <p className="mb-2 text-gray-800 dark:text-gray-300 leading-relaxed">
            Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-indigo-400 mb-2 mt-4">
            2.6. Third-Party Data
          </h3>
          <p className="mb-2 text-gray-800 dark:text-gray-300 leading-relaxed">
            Information from third parties, such as personal information or network friends, if you connect to the Site through a third party.
          </p>
        </section>

        {/* How We Use Your Information Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-primary mb-4 pb-2 border-b-2 border-indigo-200 dark:border-primary">
            3. How We Use Your Information
          </h2>
          <p className="mb-4 text-gray-800 dark:text-gray-300 leading-relaxed">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300 leading-relaxed pl-4">
            <li>Create and manage your account.</li>
            <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
            <li>Enable user-to-user communications.</li>
            <li>Generate a personal profile about you to make your visit to the Site more personalized.</li>
            <li>Increase the efficiency and operation of the Site.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            <li>Notify you of updates to the Site.</li>
            <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
            <li>Perform other business activities as needed.</li>
            <li>Request feedback and contact you about your use of the Site.</li>
            <li>Resolve disputes and troubleshoot problems.</li>
            <li>Respond to product and customer service requests.</li>
            <li>Send you a newsletter.</li>
            <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
          </ul>
        </section>

        {/* Data Security Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-primary mb-4 pb-2 border-b-2 border-indigo-200 dark:border-primary">
            4. Data Security
          </h2>
          <p className="mb-4 text-gray-800 dark:text-gray-300 leading-relaxed">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.
          </p>
        </section>

        {/* Your Choices Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-primary mb-4 pb-2 border-b-2 border-indigo-200 dark:border-primary">
            5. Your Choices
          </h2>
          <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-indigo-400 mb-2">
            5.1. Account Information
          </h3>
          <p className="mb-4 text-gray-800 dark:text-gray-300 leading-relaxed">
            You may at any time review or change the information in your account or terminate your account by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300 leading-relaxed pl-4">
            <li>Logging into your account settings and updating your account.</li>
            <li>Contacting us using the contact information provided below.</li>
          </ul>
          <p className="mb-4 text-gray-800 dark:text-gray-300 leading-relaxed mt-4">
            Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use, and/or comply with legal requirements.
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-indigo-400 mb-2 mt-4">
            5.2. Emails and Communications
          </h3>
          <p className="mb-4 text-gray-800 dark:text-gray-300 leading-relaxed">
            If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300 leading-relaxed pl-4">
            <li>Noting your preferences at the time you register your account with the Site.</li>
            <li>Logging into your account settings and updating your preferences.</li>
            <li>Contacting us using the contact information provided below.</li>
          </ul>
        </section>

        {/* Changes to this Policy Section */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-primary mb-4 pb-2 border-b-2 border-indigo-200 dark:border-primary">
            6. Changes to This Privacy Policy
          </h2>
          <p className="mb-4 text-gray-800 dark:text-gray-300 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "Last Updated" date at the top of this Privacy Policy.
          </p>
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>

        {/* Contact Us Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-primary mb-4 pb-2 border-b-2 border-indigo-200 dark:border-primary">
            7. Contact Us
          </h2>
          <p className="mb-4 text-gray-800 dark:text-gray-300 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300 leading-relaxed pl-4">
            <li>
              <strong>Email:</strong> <a href="mailto:info@vericheck.co.zw" className="text-blue-600 dark:text-blue-400 hover:underline">info@vericheck.co.zw</a>
            </li>
            <li>
              <strong>Website:</strong> <a href="https://www.vericheck.co.zw/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://www.vericheck.co.zw/</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};


