import React from "react";
import { Users, DollarSign, CreditCard } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard: React.FC = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return now.toLocaleDateString("en-US", options);
  };

  const technicianEarnings = [
    { month: "Jan", earnings: 12500 },
    { month: "Feb", earnings: 18900 },
    { month: "Mar", earnings: 14200 },
    { month: "Apr", earnings: 21000 },
    { month: "May", earnings: 18500 },
    { month: "Jun", earnings: 23400 },
    { month: "Jul", earnings: 19800 },
    { month: "Aug", earnings: 26700 },
    { month: "Sep", earnings: 22300 },
    { month: "Oct", earnings: 28900 },
    { month: "Nov", earnings: 25600 },
    { month: "Dec", earnings: 31200 },
  ];

  const recentEarnings = [
    { id: 1, name: "John Smith", service: "AC Repair", amount: 2500, date: "2024-01-15", status: "Completed" },
    { id: 2, name: "Mike Johnson", service: "Refrigerator Service", amount: 1800, date: "2024-01-14", status: "Completed" },
    { id: 3, name: "Sarah Wilson", service: "Washing Machine Repair", amount: 3200, date: "2024-01-14", status: "Completed" },
    { id: 4, name: "David Brown", service: "Microwave Repair", amount: 1200, date: "2024-01-13", status: "Completed" },
    { id: 5, name: "Emily Davis", service: "TV Installation", amount: 2800, date: "2024-01-12", status: "Completed" },
  ];

  const statsCards = [
    { 
      title: "Total Technicians", 
      value: "12", 
      icon: <Users className="w-6 h-6" />, 
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    { 
      title: "Total Subscriptions", 
      value: "8", 
      icon: <CreditCard className="w-6 h-6" />, 
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    { 
      title: "Total Earnings", 
      value: "₹2,43,000", 
      icon: <DollarSign className="w-6 h-6" />, 
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    { 
      title: "Monthly Earnings", 
      value: "₹31,200", 
      icon: <DollarSign className="w-6 h-6" />, 
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content - Centered properly */}
      <div className="p-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-teal-500 rounded-2xl p-8 mb-8 shadow-md max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome back, Referral
              </h1>
              <p className="text-blue-100">
                Here's your performance overview for today
              </p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-xs font-medium text-blue-100 mb-1">
                Today's Date
              </p>
              <p className="text-sm font-semibold text-white">
                {getCurrentDate()}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-7xl mx-auto">
          {statsCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">
                    {card.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                </div>
                <div className={`w-12 h-12 ${card.bgColor} rounded-xl flex items-center justify-center`}>
                  <div className={card.iconColor}>{card.icon}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Monthly Earnings Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-2 mb-6">
              <DollarSign className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-800">
                Monthly Earnings
              </h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={technicianEarnings}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  cursor={{ fill: '#f3f4f6' }}
                  contentStyle={{ 
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                  formatter={(value) => [formatCurrency(Number(value)), 'Earnings']}
                />
                <Bar 
                  dataKey="earnings" 
                  fill="#3B82F6" 
                  radius={[4, 4, 0, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Earnings */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Recent Earnings
                </h3>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100">
                  New
                </button>
                <button className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200">
                  All
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              {recentEarnings.map((earning) => (
                <div key={earning.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{earning.name}</p>
                      <p className="text-sm text-gray-500">{earning.service}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{formatCurrency(earning.amount)}</p>
                    <p className="text-sm text-gray-500">{earning.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;





// import React from 'react';
// import { Users, DollarSign, CreditCard, Building2 } from 'lucide-react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const Dashboard: React.FC = () => {
//   const getCurrentDate = () => {
//     const now = new Date();
//     const options: Intl.DateTimeFormatOptions = { 
//       weekday: 'long', 
//       month: 'long', 
//       day: 'numeric',
//       year: 'numeric'
//     };
//     return now.toLocaleDateString('en-US', options);
//   };

//   // Mock data for yearly earnings
//   const technicianEarnings = [
//     { month: 'Jan', earnings: 0 },
//     { month: 'Feb', earnings: 0 },
//     { month: 'Mar', earnings: 0 },
//     { month: 'Apr', earnings: 0 },
//     { month: 'May', earnings: 0 },
//     { month: 'Jun', earnings: 0 },
//     { month: 'Jul', earnings: 0 },
//     { month: 'Aug', earnings: 0 },
//     { month: 'Sep', earnings: 0 },
//     { month: 'Oct', earnings: 0 },
//     { month: 'Nov', earnings: 0 },
//     { month: 'Dec', earnings: 0 }
//   ];

//   const franchiseEarnings = [
//     { month: 'Jan', earnings: 0 },
//     { month: 'Feb', earnings: 0 },
//     { month: 'Mar', earnings: 0 },
//     { month: 'Apr', earnings: 0 },
//     { month: 'May', earnings: 0 },
//     { month: 'Jun', earnings: 0 },
//     { month: 'Jul', earnings: 0 },
//     { month: 'Aug', earnings: 0 },
//     { month: 'Sep', earnings: 0 },
//     { month: 'Oct', earnings: 0 },
//     { month: 'Nov', earnings: 0 },
//     { month: 'Dec', earnings: 0 }
//   ];

//   return (
//     <div className="ml-64 bg-gray-50 min-h-screen pt-16">
//       {/* Welcome Header */}
//       <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-teal-500 p-8">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Referral</h1>
//             <p className="text-blue-100">Here's your performance overview for today</p>
//           </div>
//           <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
//             <p className="text-xs font-medium text-blue-100 mb-1">Today's Date</p>
//             <p className="text-sm font-semibold text-white">{getCurrentDate()}</p>
//           </div>
//         </div>
//       </div>

//       <div className="p-8">
//         {/* Statistics Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-500 mb-1">Total Technicians</p>
//                 <p className="text-3xl font-bold text-gray-900">0</p>
//               </div>
//               <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
//                 <Users className="w-6 h-6 text-blue-600" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-500 mb-1">Total Subscriptions</p>
//                 <p className="text-3xl font-bold text-gray-900">0</p>
//               </div>
//               <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                 <CreditCard className="w-6 h-6 text-green-600" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-500 mb-1">Total Earnings</p>
//                 <p className="text-3xl font-bold text-gray-900">₹0</p>
//               </div>
//               <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
//                 <DollarSign className="w-6 h-6 text-yellow-600" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-500 mb-1">Monthly Earnings</p>
//                 <p className="text-3xl font-bold text-gray-900">₹0</p>
//               </div>
//               <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
//                 <DollarSign className="w-6 h-6 text-orange-600" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//             <div className="flex items-center space-x-2 mb-6">
//               <DollarSign className="w-6 h-6 text-blue-600" />
//               <h3 className="text-xl font-semibold text-gray-800">Monthly Earnings</h3>
//             </div>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={technicianEarnings}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="earnings" fill="#3B82F6" radius={[4, 4, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                 <h3 className="text-xl font-semibold text-gray-800">Recent Earnings</h3>
//               </div>
//               <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
//                 View All
//               </button>
//             </div>
//             <div className="text-center py-12">
//               <p className="text-gray-400">No recent earnings found</p>
//             </div>
//           </div>
//         </div>

//         {/* Activity Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                 <h3 className="text-xl font-semibold text-gray-800">Recent Activity</h3>
//               </div>
//               <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
//                 View All
//               </button>
//             </div>
//             <div className="space-y-4">
//               <div className="border-b border-gray-100 pb-3">
//                 <h4 className="font-medium text-gray-700">Registered Users/Technicians</h4>
//                 <p className="text-sm text-gray-500">No recent registrations</p>
//               </div>
//               <div>
//                 <h4 className="font-medium text-gray-700">Subscribed Users/Technicians</h4>
//                 <p className="text-sm text-gray-500">No recent subscriptions</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center space-x-2">
//                 <CreditCard className="w-6 h-6 text-purple-600" />
//                 <h3 className="text-xl font-semibold text-gray-800">Subscription Plans</h3>
//               </div>
//               <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
//                 View Details
//               </button>
//             </div>
//             <div className="text-center py-12">
//               <p className="text-gray-400">No subscription plans available</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;