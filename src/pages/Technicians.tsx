import React, { useState } from 'react';
import {
  Search,
  Plus,
  Filter,
  X,
  Building2,
  MapPin,
  Phone,
  Lock,
  User,
  Briefcase,
  CreditCard,
  Users,
} from 'lucide-react';

interface Technician {
  id: string;
  name: string;
  phoneNumber: string;
  category: string;
  buildingName: string;
  pincode: string;
  area: string;
  city: string;
  state: string;
  subscriptionPlan: string;
}

interface TechnicianFormData {
  name: string;
  category: string;
  phoneNumber: string;
  password: string;
  buildingName: string;
  pincode: string;
  area: string;
  city: string;
  state: string;
  subscriptionPlan: string;
}

const Technicians: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('All Plans');
  const [showAddForm, setShowAddForm] = useState(false);
  const [technicians, setTechnicians] = useState<Technician[]>([
    // Fake sample data
    {
      id: '1',
      name: 'Ravi Kumar',
      phoneNumber: '9876543210',
      category: 'Electrician',
      buildingName: 'Sai Towers',
      pincode: '500001',
      area: 'Madhapur',
      city: 'Hyderabad',
      state: 'Telangana',
      subscriptionPlan: 'Gold Plan',
    },
    {
      id: '2',
      name: 'Anil Reddy',
      phoneNumber: '9123456789',
      category: 'Plumber',
      buildingName: 'Green Residency',
      pincode: '500081',
      area: 'Kondapur',
      city: 'Hyderabad',
      state: 'Telangana',
      subscriptionPlan: 'Economy Plan',
    },
  ]);

  const [formData, setFormData] = useState<TechnicianFormData>({
    name: '',
    category: '',
    phoneNumber: '',
    password: '',
    buildingName: '',
    pincode: '',
    area: '',
    city: '',
    state: '',
    subscriptionPlan: '',
  });

  const categories = [
    'Plumber',
    'Electrician',
    'Carpenter',
    'AC Technician',
    'Painter',
    'Mechanic',
    'Cleaner',
    'Other',
  ];

  const subscriptionPlans = ['Economy Plan', 'Gold Plan', 'Platinum Plan'];

  // Filter technicians
  const filteredTechnicians = technicians.filter(
    (tech) =>
      (tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tech.phoneNumber.includes(searchTerm)) &&
      (selectedPlan === 'All Plans' || tech.subscriptionPlan === selectedPlan)
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phoneNumber) {
      alert('Please fill all required fields.');
      return;
    }

    const newTech: Technician = {
      id: Date.now().toString(),
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      category: formData.category,
      buildingName: formData.buildingName,
      pincode: formData.pincode,
      area: formData.area,
      city: formData.city,
      state: formData.state,
      subscriptionPlan: formData.subscriptionPlan,
    };

    setTechnicians((prev) => [...prev, newTech]);

    // Reset form
    setFormData({
      name: '',
      category: '',
      phoneNumber: '',
      password: '',
      buildingName: '',
      pincode: '',
      area: '',
      city: '',
      state: '',
      subscriptionPlan: '',
    });
    setShowAddForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pl-64">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Technician Management
            </h1>
            <p className="text-gray-600">
              Add, search, and filter all technicians in your network
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all shadow-md"
          >
            <Plus size={20} />
            <span className="font-medium">Add Technician</span>
          </button>
        </div>

        {/* Add Technician Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  Add New Technician
                </h2>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Form Fields */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Technician Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter technician name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    maxLength={10}
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter 10-digit phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    minLength={6}
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Building Name *
                  </label>
                  <input
                    type="text"
                    name="buildingName"
                    value={formData.buildingName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter building name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pincode
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter pincode"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Area *
                  </label>
                  <input
                    type="text"
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter area"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter city"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter state"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subscription Plan *
                  </label>
                  <select
                    name="subscriptionPlan"
                    value={formData.subscriptionPlan}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select plan</option>
                    {subscriptionPlans.map((plan) => (
                      <option key={plan} value={plan}>
                        {plan}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2 mt-6 flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-6 py-3 bg-gray-200 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl"
                  >
                    Add Technician
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Search & Filter */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by name or phone number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-3">
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="All Plans">All Plans</option>
                <option value="Economy Plan">Economy Plan</option>
                <option value="Gold Plan">Gold Plan</option>
                <option value="Platinum Plan">Platinum Plan</option>
              </select>
              <button className="flex items-center space-x-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
                <Filter size={16} />
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                    Category
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                    Location
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                    Plan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredTechnicians.length > 0 ? (
                  filteredTechnicians.map((tech) => (
                    <tr key={tech.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-center">{tech.name}</td>
                      <td className="px-6 py-4 text-center">
                        {tech.phoneNumber}
                      </td>
                      <td className="px-6 py-4 text-center">{tech.category}</td>
                      <td className="px-6 py-4 text-center">
                        {tech.city}, {tech.state}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {tech.subscriptionPlan}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                      <div className="flex flex-col items-center space-y-2">
                        <Users className="w-10 h-10 text-gray-300" />
                        <p>No technicians found</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technicians;





// import React, { useState } from 'react';
// import { Search, Plus, Filter, Users } from 'lucide-react';

// interface Technician {
//   id: string;
//   name: string;
//   contact: string;
//   category: string;
//   address: string;
//   registered: boolean;
//   subscribed: boolean;
// }

// const Technicians: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedPlan, setSelectedPlan] = useState('All Plans');
//   const [technicians] = useState<Technician[]>([]);

//   const filteredTechnicians = technicians.filter(tech =>
//     tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     tech.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="flex-1 bg-gray-50 min-h-screen">
//       {/* Centered Container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Header Section - Centered */}
//         <div className="text-center mb-8">
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">Technicians Management</h1>
//           <p className="text-gray-600">Manage and monitor all technicians in your network</p>
//         </div>

//         {/* Add Technician Button - Top Left */}
//         <div className="mb-8">
//           <button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all shadow-md">
//             <Plus size={20} />
//             <span className="font-medium">Add Technician</span>
//           </button>
//         </div>

//         {/* Statistics Cards - Centered */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-6xl mx-auto">
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
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

//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-500 mb-1">Registered Technicians</p>
//                 <p className="text-3xl font-bold text-gray-900">0</p>
//               </div>
//               <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
//                 <Users className="w-6 h-6 text-green-600" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-500 mb-1">Subscribed Technicians</p>
//                 <p className="text-3xl font-bold text-gray-900">0</p>
//               </div>
//               <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
//                 <Users className="w-6 h-6 text-purple-600" />
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-sm font-medium text-gray-500 mb-1">Total Revenue</p>
//                 <p className="text-3xl font-bold text-gray-900">₹0</p>
//               </div>
//               <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
//                 <Users className="w-6 h-6 text-yellow-600" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Error Message - Centered */}
//         <div className="max-w-2xl mx-auto mb-6">
//           <div className="bg-red-50 border border-red-200 rounded-xl p-4">
//             <p className="text-red-600 text-sm text-center">Request failed with status code 404</p>
//           </div>
//         </div>

//         {/* Search Section - Centered */}
//         <div className="max-w-4xl mx-auto mb-6">
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//             <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
//               <div className="relative flex-1 max-w-md">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                 <input
//                   type="text"
//                   placeholder="Search technicians by name or category..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               </div>
//               <div className="flex items-center space-x-3">
//                 <select 
//                   value={selectedPlan}
//                   onChange={(e) => setSelectedPlan(e.target.value)}
//                   className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[150px]"
//                 >
//                   <option value="All Plans">All Plans</option>
//                   <option value="Economy Plan">Economy Plan</option>
//                   <option value="Gold Plan">Gold Plan</option>
//                   <option value="Platinum Plan">Platinum Plan</option>
//                 </select>
//                 <button className="flex items-center space-x-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors">
//                   <Filter size={16} />
//                   <span>Filter</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Technicians Table - Centered with center-aligned data */}
//         <div className="max-w-6xl mx-auto">
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gray-50 border-b border-gray-200">
//                   <tr>
//                     <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Technician</th>
//                     <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Mobile</th>
//                     <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Category</th>
//                     <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Address</th>
//                     <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Subscription Plan</th>
//                     <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Plan End Date</th>
//                     <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {filteredTechnicians.length > 0 ? (
//                     filteredTechnicians.map((technician) => (
//                       <tr key={technician.id} className="hover:bg-gray-50 transition-colors">
//                         <td className="px-6 py-4 text-center">
//                           <div className="flex items-center justify-center space-x-3">
//                             <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                               <span className="text-blue-600 font-medium">
//                                 {technician.name.charAt(0)}
//                               </span>
//                             </div>
//                             <span className="font-medium text-gray-900">{technician.name}</span>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 text-center text-gray-700">{technician.contact}</td>
//                         <td className="px-6 py-4 text-center text-gray-700">{technician.category}</td>
//                         <td className="px-6 py-4 text-center text-gray-700">{technician.address}</td>
//                         <td className="px-6 py-4 text-center text-gray-700">Economy Plan</td>
//                         <td className="px-6 py-4 text-center text-gray-700">N/A</td>
//                         <td className="px-6 py-4 text-center">
//                           <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
//                             View
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan={7} className="px-6 py-16 text-center">
//                         <div className="flex flex-col items-center space-y-3">
//                           <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
//                             <Users className="w-8 h-8 text-gray-300" />
//                           </div>
//                           <p className="text-gray-500">No technicians found</p>
//                         </div>
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Technicians;