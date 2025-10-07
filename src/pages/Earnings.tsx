import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  Star, 
  DollarSign 
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const Earnings: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(2025);

  // Mock data (Jan - Dec)
  const revenueData = [
    { month: 'Jan', technicians: 0, franchise: 0 },
    { month: 'Feb', technicians: 0, franchise: 0 },
    { month: 'Mar', technicians: 0, franchise: 0 },
    { month: 'Apr', technicians: 0, franchise: 0 },
    { month: 'May', technicians: 0, franchise: 0 },
    { month: 'Jun', technicians: 0, franchise: 0 },
    { month: 'Jul', technicians: 0, franchise: 0 },
    { month: 'Aug', technicians: 0, franchise: 0 },
    { month: 'Sep', technicians: 0, franchise: 0 },
    { month: 'Oct', technicians: 0, franchise: 0 },
    { month: 'Nov', technicians: 0, franchise: 0 },
    { month: 'Dec', technicians: 0, franchise: 0 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Earnings Overview</h1>
          <p className="text-gray-600">
            Track revenue, commissions, and financial performance
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Total Revenue */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">₹0</h3>
            </div>
            <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-xl">
              <DollarSign className="text-green-600 w-6 h-6" />
            </div>
          </div>

          {/* Monthly Earnings */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">Monthly Earnings</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">₹0</h3>
            </div>
            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-xl">
              <TrendingUp className="text-blue-600 w-6 h-6" />
            </div>
          </div>

          {/* Earnings by Technicians */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">Earnings by Technicians</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">₹0</h3>
            </div>
            <div className="w-12 h-12 bg-purple-100 flex items-center justify-center rounded-xl">
              <Users className="text-purple-600 w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Revenue Trends Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">
                Revenue Trends ({selectedYear})
              </h3>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Technicians</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Franchise</span>
              </div>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm transition"
              >
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
              </select>
            </div>
          </div>

          {/* Chart */}
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={{ stroke: '#e0e0e0' }} />
              <YAxis tick={{ fontSize: 12 }} axisLine={{ stroke: '#e0e0e0' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Bar dataKey="technicians" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="franchise" fill="#14B8A6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Earnings;





// import React, { useState } from 'react';
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
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const Earnings: React.FC = () => {
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

//   // Mock data for revenue trends
//   const revenueData = [
//     { month: 'Jan', technicians: 0, franchise: 0 },
//     { month: 'Feb', technicians: 0, franchise: 0 },
//     { month: 'Mar', technicians: 0, franchise: 0 },
//     { month: 'Apr', technicians: 0, franchise: 0 },
//     { month: 'May', technicians: 0, franchise: 0 },
//     { month: 'Jun', technicians: 0, franchise: 0 },
//     { month: 'Jul', technicians: 0, franchise: 0 },
//     { month: 'Aug', technicians: 0, franchise: 0 },
//     { month: 'Sep', technicians: 0, franchise: 0 },
//     { month: 'Oct', technicians: 0, franchise: 0 },
//     { month: 'Nov', technicians: 0, franchise: 0 },
//     { month: 'Dec', technicians: 0, franchise: 0 }
//   ];

//   return (
//     <div className="flex-1 bg-gray-50 min-h-screen">
//       {/* Main Container - Centered */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Header Section - Centered */}
//         <div className="text-center mb-8">
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">Earnings Overview</h1>
//           <p className="text-gray-600">Track revenue, commissions, and financial performance</p>
//         </div>

//         {/* Statistics Cards - Centered with max-width */}
//         <div className="max-w-6xl mx-auto mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <div className="flex items-center justify-between">
//                 <div className="text-center w-full">
//                   <p className="text-sm font-medium text-gray-500 mb-1">Total Revenue</p>
//                   <p className="text-3xl font-bold text-gray-900">₹0</p>
//                 </div>
//                 <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center ml-4">
//                   <DollarSign className="w-6 h-6 text-green-600" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <div className="flex items-center justify-between">
//                 <div className="text-center w-full">
//                   <p className="text-sm font-medium text-gray-500 mb-1">Monthly Earnings</p>
//                   <p className="text-3xl font-bold text-gray-900">₹0</p>
//                 </div>
//                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center ml-4">
//                   <TrendingUp className="w-6 h-6 text-blue-600" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <div className="flex items-center justify-between">
//                 <div className="text-center w-full">
//                   <p className="text-sm font-medium text-gray-500 mb-1">Earnings by Technicians</p>
//                   <p className="text-3xl font-bold text-gray-900">₹0</p>
//                 </div>
//                 <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center ml-4">
//                   <Users className="w-6 h-6 text-purple-600" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//               <div className="flex items-center justify-between">
//                 <div className="text-center w-full">
//                   <p className="text-sm font-medium text-gray-500 mb-1">Earnings by Franchise</p>
//                   <p className="text-3xl font-bold text-gray-900">₹0</p>
//                 </div>
//                 <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center ml-4">
//                   <Star className="w-6 h-6 text-orange-600" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Revenue Trends Chart - Centered with max-width */}
//         <div className="max-w-6xl mx-auto">
//           <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center space-x-3">
//                 <TrendingUp className="w-6 h-6 text-blue-600" />
//                 <h3 className="text-xl font-semibold text-gray-800">Revenue Trends ({selectedYear})</h3>
//               </div>
//               <div className="flex items-center space-x-6">
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
//                   <span className="text-sm text-gray-600">Technicians</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
//                   <span className="text-sm text-gray-600">Franchise</span>
//                 </div>
//                 <select 
//                   value={selectedYear}
//                   onChange={(e) => setSelectedYear(Number(e.target.value))}
//                   className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
//                 >
//                   <option value={2023}>2023</option>
//                   <option value={2024}>2024</option>
//                   <option value={2025}>2025</option>
//                 </select>
//               </div>
//             </div>
            
//             {/* Chart Container - Centered */}
//             <div className="w-full">
//               <ResponsiveContainer width="100%" height={350}>
//                 <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                   <XAxis 
//                     dataKey="month" 
//                     tick={{ fontSize: 12 }}
//                     axisLine={{ stroke: '#e0e0e0' }}
//                   />
//                   <YAxis 
//                     tick={{ fontSize: 12 }}
//                     axisLine={{ stroke: '#e0e0e0' }}
//                   />
//                   <Tooltip 
//                     contentStyle={{ 
//                       backgroundColor: 'white',
//                       border: '1px solid #e0e0e0',
//                       borderRadius: '8px',
//                       boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
//                     }}
//                   />
//                   <Bar dataKey="technicians" fill="#3B82F6" radius={[4, 4, 0, 0]} />
//                   <Bar dataKey="franchise" fill="#14B8A6" radius={[4, 4, 0, 0]} />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Earnings;