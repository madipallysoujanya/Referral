import React from 'react';
import { Users, Star, Phone, Mail, MapPin, UserCheck } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pl-64"> 
      {/* pt-20 = space for top navbar, pl-64 = space for sidebar */}
      
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Connecting service providers directly with customers
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-medium">
            <Users size={20} />
            No Middlemen - No Commissions
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center mb-12">
          <p className="text-lg">
            At PRNV Services, we believe in direct connections between service providers and customers. 
            Our platform eliminates middlemen and hefty commissions, allowing professionals to maximize 
            their earnings while customers get the best value for their money.
          </p>
        </div>

        {/* Profile Building */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center justify-center gap-3">
            <Star className="text-blue-600" size={32} />
            Build a Profile Page as Powerful as a Website
          </h2>
          <div className="space-y-4 text-lg text-center">
            <p>
              Showcase your skills, expertise, and service offerings with a captivating profile page that 
              sets you apart from the competition. Our platform allows you to create a comprehensive 
              digital presence that works like a full website.
            </p>
            <p>
              Grab attention and leave a lasting impression by showcasing your work through images and videos. 
              Selected videos may even appear on our YouTube channel, giving you additional exposure and 
              marketing opportunities.
            </p>
            <p>
              You can improve your position in the listings by leveraging your joining seniority, customer 
              ratings, and volume of business. Additionally, our flexible Self-Billing Dashboard allows 
              you to set your own prices and attract more customers with special offers.
            </p>
            <p>
              Enjoy the freedom to choose your work schedule with our intuitive ON/OFF feature. Our platform 
              adapts to your needs, whether you prefer to work part-time or full-time, allowing you to 
              maintain a healthy work-life balance.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center justify-center gap-3">
            <UserCheck className="text-blue-600" size={32} />
            Key Features for Professionals
          </h2>
          <div className="space-y-4 text-lg text-center">
            <p><strong>Professional Enrollment:</strong> Join our platform as a skilled technician or service provider.</p>
            <p><strong>Direct Connection Model:</strong> Eliminate middlemen, keep 100% of your earnings.</p>
            <p><strong>Social Media Marketing:</strong> Promote your profile across social media platforms.</p>
            <p><strong>Flexible Subscription:</strong> Renew after 30 leads or Rs. 30,000 worth of work.</p>
            <p><strong>Service Area Selection:</strong> Choose pin codes to define your working area.</p>
            <p><strong>Early Joiner Advantage:</strong> Be listed at the top of search results.</p>
            <p><strong>Video Showcase Feature:</strong> Upload videos to highlight your expertise.</p>
            <p className="text-sm italic"><strong>Please note:</strong> Refunds are not available.</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 flex items-center justify-center gap-3">
            <Phone className="text-blue-600" size={32} />
            Contact Information
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Phone className="text-blue-600" size={24} />
              <span className="font-medium">Phone</span>
              <span className="text-gray-600">+91 98765 43210</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Mail className="text-blue-600" size={24} />
              <span className="font-medium">Email</span>
              <span className="text-gray-600">info@prnvservices.com</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MapPin className="text-blue-600" size={24} />
              <span className="font-medium">Service Area</span>
              <span className="text-gray-600">GHMC Area, Hyderabad</span>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <p className="text-2xl font-medium text-gray-800 mb-4">
            Join PRNV Services today and experience the difference of direct connections!
          </p>
          <p className="text-lg text-gray-600">
            Whether you're a service provider or a customer, our platform is built to serve your needs efficiently.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;



// import React from 'react';
// import { 
//   Users, 
//   TrendingUp, 
//   Award, 
//   Shield, 
//   Star, 
//   DollarSign, 
//   Calendar, 
//   MapPin, 
//   Video, 
//   RefreshCw, 
//   Target, 
//   Globe, 
//   CheckCircle, 
//   AlertCircle,
//   Briefcase,
//   Clock,
//   FileText,
//   CreditCard,
//   Phone,
//   Mail,
//   UserCheck
// } from 'lucide-react';

// const AboutUs: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="max-w-4xl mx-auto px-6">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
//             Connecting service providers directly with customers
//           </p>
//           <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-medium">
//             <Users size={20} />
//             No Middlemen - No Commissions
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="space-y-12 text-gray-700 leading-relaxed">

//           {/* Introduction */}
//           <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
//             <p className="text-lg">
//               At PRNV Services, we believe in direct connections between service providers and customers. 
//               Our platform eliminates middlemen and hefty commissions, allowing professionals to maximize 
//               their earnings while customers get the best value for their money.
//             </p>
//           </div>

//           {/* Profile Building */}
//           <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
//             <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
//               <Star className="text-blue-600" size={32} />
//               Build a Profile Page as Powerful as a Website
//             </h2>
//             <div className="space-y-4 text-lg">
//               <p>
//                 Showcase your skills, expertise, and service offerings with a captivating profile page that 
//                 sets you apart from the competition. Our platform allows you to create a comprehensive 
//                 digital presence that works like a full website.
//               </p>
//               <p>
//                 Grab attention and leave a lasting impression by showcasing your work through images and videos. 
//                 Selected videos may even appear on our YouTube channel, giving you additional exposure and 
//                 marketing opportunities.
//               </p>
//               <p>
//                 You can improve your position in the listings by leveraging your joining seniority, customer 
//                 ratings, and volume of business. Additionally, our flexible Self-Billing Dashboard allows 
//                 you to set your own prices and attract more customers with special offers.
//               </p>
//               <p>
//                 Enjoy the freedom to choose your work schedule with our intuitive ON/OFF feature. Our platform 
//                 adapts to your needs, whether you prefer to work part-time or full-time, allowing you to 
//                 maintain a healthy work-life balance.
//               </p>
//             </div>
//           </div>

//           {/* Key Features for Professionals */}
//           <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
//             <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
//               <UserCheck className="text-blue-600" size={32} />
//               Key Features for Professionals
//             </h2>
//             <div className="space-y-4 text-lg">
//               <p>
//                 <strong>Professional Enrollment:</strong> Join our platform as a skilled technician or service 
//                 provider in your respective field. We welcome professionals from all service industries who 
//                 are committed to quality work and customer satisfaction.
//               </p>
//               <p>
//                 <strong>Direct Connection Model:</strong> We uphold the motto of eliminating middlemen, fostering 
//                 direct connections between you and your customers. No commissions are charged, ensuring you keep 
//                 100% of your earnings.
//               </p>
//               <p>
//                 <strong>Social Media Marketing:</strong> Your profile is promoted based on ratings, reviews, and 
//                 teamwork performance. Share your profile URL across social media platforms to expand your reach 
//                 and attract more customers.
//               </p>
//               <p>
//                 <strong>Flexible Subscription Model:</strong> Renew your subscription after every 30 leads or 
//                 Rs. 30,000 worth of work—whichever comes first.
//               </p>
//               <p>
//                 <strong>Service Area Selection:</strong> Choose specific pin codes to define your working area.
//               </p>
//               <p>
//                 <strong>Early Joiner Advantage:</strong> Be listed at the top of search results and get more 
//                 visibility as an early adopter of our platform.
//               </p>
//               <p>
//                 <strong>Video Showcase Feature:</strong> Upload videos to showcase your work and expertise. 
//               </p>
//               <p className="text-sm italic">
//                 <strong>Please note:</strong> Refunds are not available on professional subscriptions.
//               </p>
//             </div>
//           </div>

//           {/* Contact Info */}
//           <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl">
//             <h2 className="text-3xl font-semibold text-gray-800 mb-8 flex items-center gap-3">
//               <Phone className="text-blue-600" size={32} />
//               Contact Information
//             </h2>
//             <div className="grid md:grid-cols-3 gap-8 text-center">
//               <div className="flex flex-col items-center gap-3">
//                 <Phone className="text-blue-600" size={24} />
//                 <span className="font-medium">Phone</span>
//                 <span className="text-gray-600">+91 98765 43210</span>
//               </div>
//               <div className="flex flex-col items-center gap-3">
//                 <Mail className="text-blue-600" size={24} />
//                 <span className="font-medium">Email</span>
//                 <span className="text-gray-600">info@prnvservices.com</span>
//               </div>
//               <div className="flex flex-col items-center gap-3">
//                 <MapPin className="text-blue-600" size={24} />
//                 <span className="font-medium">Service Area</span>
//                 <span className="text-gray-600">GHMC Area, Hyderabad</span>
//               </div>
//             </div>
//           </div>

//           {/* Closing Statement */}
//           <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
//             <p className="text-2xl font-medium text-gray-800 mb-4">
//               Join PRNV Services today and experience the difference of direct connections!
//             </p>
//             <p className="text-lg text-gray-600">
//               Whether you're a service provider or a customer, our platform is built to serve your needs efficiently.
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;