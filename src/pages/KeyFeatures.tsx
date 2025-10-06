import React from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

const KeyFeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <div className="flex-1 p-8 ml-64">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-800">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Key Features</h1>

            <div className="space-y-8">
              <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">NO MIDDLEMEN - NO COMMISSIONS</h2>
                <p className="mb-4 text-base">
                  At PRNV Services, we believe in direct connections between service providers and customers.
                  Maximize your earnings by saying goodbye to middlemen and hefty commissions!
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Build a Profile Page as Powerful as a Website:</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4 text-base">
                  <li>Showcase your skills, expertise, and service offerings with a captivating profile page.</li>
                  <li>Show your work through images and videos.</li>
                  <li>Improve your position in listings by seniority, ratings, and volume of business.</li>
                  <li>Set your prices with the flexible Self-Billing Dashboard.</li>
                  <li>Flexible work schedule with intuitive ON/OFF feature.</li>
                </ul>
                <p className="mb-3 text-base">Our platform adapts to your needs, whether part-time or full-time, supporting work-life balance.</p>
                <p className="font-semibold text-gray-900 mb-3 text-lg">
                  YOU CAN DECIDE YOUR RATES AND ATTRACT MORE CUSTOMERS WITH SPECIAL OFFERS.
                </p>
              </section>

              <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">KEY FEATURES FOR PROFESSIONALS:</h3>
                <ul className="list-disc pl-6 space-y-2 text-base">
                  <li><strong>Professional Enrollment</strong>: Join our platform as a skilled technician or service provider.</li>
                  <li><strong>No Middlemen No Commissions</strong>: Direct connections between professionals and customers without commissions.</li>
                  <li><strong>Social Media Marketing</strong>: Promoted based on ratings, reviews, teamwork, seniority, pin codes served, and volume.</li>
                  <li><strong>Subscription Renewal</strong>: Renew every 30 days to maintain benefits.</li>
                  <li><strong>Service Area Selection</strong>: Select pin codes for targeted reach.</li>
                  <li><strong>Early Joiner Advantage</strong>: Get listed on top for visibility.</li>
                  <li><strong>Dedicated Profile Page</strong>: Profile page acts like a website with scheduling and billing features.</li>
                  <li><strong>Video Feature</strong>: Highlight your work through videos, some of which may be shared on our YouTube channel.</li>
                </ul>
              </section>

              <section className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">TERMS AND CONDITIONS:</h3>
                <ul className="list-disc pl-6 space-y-2 text-base">
                  <li><strong>Commission</strong>: We charge only monthly plan fees.</li>
                  <li><strong>Liability</strong>: Provider is responsible for any damages.</li>
                  <li><strong>Work Guarantee</strong>: 1-week guarantee post work completion.</li>
                  <li><strong>Customer Feedback</strong>: Ratings/reviews mandatory for claims.</li>
                  <li><strong>Compensation</strong>: Provide full details to claim any work-related damage.</li>
                  <li><strong>Seniority and Renewal</strong>: Displayed by seniority. Delays lose priority.</li>
                  <li><strong>Training</strong>: Only computer support is provided, not field training.</li>
                  <li><strong>Verification</strong>: Submit Aadhar, PAN, and referrals for activation.</li>
                  <li><strong>GST Compliance</strong>: Providers must follow applicable GST rules.</li>
                  <li><strong>Renewal</strong>: Every 30 days. Inactive profiles won't show.</li>
                  <li><strong>Plan Changes</strong>: Switch anytime. No refunds, only adjustments.</li>
                  <li><strong>Profile Management</strong>: Full control of profile and content.</li>
                  <li><strong>Pin Code Changes</strong>: Only during renewal.</li>
                  <li><strong>YouTube Exposure</strong>: Best videos get highlighted on YouTube.</li>
                  <li><strong>Refund Policy</strong>: No refund under any condition.</li>
                </ul>
                <div className="bg-blue-100 text-blue-800 p-4 mt-4 rounded-lg font-medium text-sm">
                  <strong>Please read and understand these terms before proceeding. By subscribing, you agree to all terms of PRNV Services.</strong>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesPage;


// import React from "react";

// const KeyFeaturesPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-800">
//         <h1 className="text-5xl font-bold text-center text-blue-600 mb-12">Key Features</h1>

//         <div className="space-y-12">
//           <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
//             <h2 className="text-3xl font-semibold text-gray-900 mb-6">NO MIDDLEMEN - NO COMMISSIONS</h2>
//             <p className="mb-6 text-lg">
//               At PRNV Services, we believe in direct connections between service providers and customers.
//               Maximize your earnings by saying goodbye to middlemen and hefty commissions!
//             </p>

//             <h3 className="text-2xl font-semibold text-gray-900 mb-4">Build a Profile Page as Powerful as a Website:</h3>
//             <ul className="list-disc pl-8 space-y-3 mb-6 text-lg">
//               <li>Showcase your skills, expertise, and service offerings with a captivating profile page.</li>
//               <li>Show your work through images and videos.</li>
//               <li>Improve your position in listings by seniority, ratings, and volume of business.</li>
//               <li>Set your prices with the flexible Self-Billing Dashboard.</li>
//               <li>Flexible work schedule with intuitive ON/OFF feature.</li>
//             </ul>
//             <p className="mb-4 text-lg">Our platform adapts to your needs, whether part-time or full-time, supporting work-life balance.</p>
//             <p className="font-semibold text-gray-900 mb-4 text-xl">
//               YOU CAN DECIDE YOUR RATES AND ATTRACT MORE CUSTOMERS WITH SPECIAL OFFERS.
//             </p>
//           </section>

//           <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-6">KEY FEATURES FOR PROFESSIONALS:</h3>
//             <ul className="list-disc pl-8 space-y-3 text-lg">
//               <li><strong>Professional Enrollment</strong>: Join our platform as a skilled technician or service provider.</li>
//               <li><strong>No Middlemen No Commissions</strong>: Direct connections between professionals and customers without commissions.</li>
//               <li><strong>Social Media Marketing</strong>: Promoted based on ratings, reviews, teamwork, seniority, pin codes served, and volume.</li>
//               <li><strong>Subscription Renewal</strong>: Renew every 30 days to maintain benefits.</li>
//               <li><strong>Service Area Selection</strong>: Select pin codes for targeted reach.</li>
//               <li><strong>Early Joiner Advantage</strong>: Get listed on top for visibility.</li>
//               <li><strong>Dedicated Profile Page</strong>: Profile page acts like a website with scheduling and billing features.</li>
//               <li><strong>Video Feature</strong>: Highlight your work through videos, some of which may be shared on our YouTube channel.</li>
//             </ul>
//           </section>

//           <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-6">TERMS AND CONDITIONS:</h3>
//             <ul className="list-disc pl-8 space-y-3 text-lg">
//               <li><strong>Commission</strong>: We charge only monthly plan fees.</li>
//               <li><strong>Liability</strong>: Provider is responsible for any damages.</li>
//               <li><strong>Work Guarantee</strong>: 1-week guarantee post work completion.</li>
//               <li><strong>Customer Feedback</strong>: Ratings/reviews mandatory for claims.</li>
//               <li><strong>Compensation</strong>: Provide full details to claim any work-related damage.</li>
//               <li><strong>Seniority and Renewal</strong>: Displayed by seniority. Delays lose priority.</li>
//               <li><strong>Training</strong>: Only computer support is provided, not field training.</li>
//               <li><strong>Verification</strong>: Submit Aadhar, PAN, and referrals for activation.</li>
//               <li><strong>GST Compliance</strong>: Providers must follow applicable GST rules.</li>
//               <li><strong>Renewal</strong>: Every 30 days. Inactive profiles won't show.</li>
//               <li><strong>Plan Changes</strong>: Switch anytime. No refunds, only adjustments.</li>
//               <li><strong>Profile Management</strong>: Full control of profile and content.</li>
//               <li><strong>Pin Code Changes</strong>: Only during renewal.</li>
//               <li><strong>YouTube Exposure</strong>: Best videos get highlighted on YouTube.</li>
//               <li><strong>Refund Policy</strong>: No refund under any condition.</li>
//             </ul>
//             <div className="bg-blue-100 text-blue-800 p-6 mt-6 rounded-xl font-medium">
//               <strong>Please read and understand these terms before proceeding. By subscribing, you agree to all terms of PRNV Services.</strong>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default KeyFeaturesPage;