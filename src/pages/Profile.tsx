import React, { useState } from 'react';
import { User, Phone, MapPin, CreditCard, Users, Building2, Calendar, Edit2 } from 'lucide-react';

interface ProfileData {
  name: string;
  phone: string;
  area: string;
  bankAccount: string;
  ifscCode: string;
  techniciansSubscribed: number;
  franchisesSubscribed: number;
  usersBooked: number;
}

interface Commission {
  id: string;
  name: string;
  commissionRate: string;
  status: 'Active' | 'Inactive';
  amount: number;
}

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Referral User',
    phone: '+91 9876543210',
    area: 'GHMC Area, Hyderabad',
    bankAccount: '**** **** **** 1234',
    ifscCode: 'HDFC0001234',
    techniciansSubscribed: 200,
    franchisesSubscribed: 100,
    usersBooked: 10
  });

  const [commissions] = useState<Commission[]>([
    { id: '1', name: 'Economy Plan Commission', commissionRate: '10%', status: 'Active', amount: 25000 },
    { id: '2', name: 'Gold Plan Commission', commissionRate: '15%', status: 'Active', amount: 45000 },
    { id: '3', name: 'Platinum Plan Commission', commissionRate: '20%', status: 'Active', amount: 65000 },
    { id: '4', name: 'Franchise Commission', commissionRate: '12%', status: 'Inactive', amount: 0 },
  ]);

  const handleSave = () => {
    setIsEditing(false);
    // Handle save logic here
  };

  return (
    <div className="ml-64 bg-gray-50 min-h-screen pt-16">
      <div className="p-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Profile Management</h1>
            <p className="text-gray-600">Manage your personal information and account settings</p>
          </div>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all shadow-md"
          >
            <Edit2 size={20} />
            <span className="font-medium">{isEditing ? 'Cancel' : 'Edit Profile'}</span>
          </button>
        </div>

        {/* Profile Information */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center space-x-2">
            <User className="w-6 h-6 text-blue-600" />
            <span>Personal Information</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-700">{profileData.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              {isEditing ? (
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-700">{profileData.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.area}
                  onChange={(e) => setProfileData({...profileData, area: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-700">{profileData.area}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bank Account</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.bankAccount}
                  onChange={(e) => setProfileData({...profileData, bankAccount: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-700">{profileData.bankAccount}</p>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="mt-6 flex space-x-3">
              <button 
                onClick={handleSave}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
              >
                Save Changes
              </button>
              <button 
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Subscription/Booking Info */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Subscription & Booking Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-600 mb-1">Technicians Subscribed</p>
              <p className="text-3xl font-bold text-gray-900">{profileData.techniciansSubscribed}</p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Building2 className="w-10 h-10 text-green-600 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-600 mb-1">Franchises Subscribed</p>
              <p className="text-3xl font-bold text-gray-900">{profileData.franchisesSubscribed}</p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <Calendar className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <p className="text-sm font-medium text-gray-600 mb-1">Users Booked</p>
              <p className="text-3xl font-bold text-gray-900">{profileData.usersBooked}</p>
            </div>
          </div>
        </div>

        {/* Commission Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800">Commission Table</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Commission Rate</th>
                  <th className="px-8 py-4 text-center text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-8 py-4 text-right text-sm font-semibold text-gray-700">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {commissions.map((commission) => (
                  <tr key={commission.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-4">
                      <span className="font-medium text-gray-900">{commission.name}</span>
                    </td>
                    <td className="px-8 py-4 text-gray-700">{commission.commissionRate}</td>
                    <td className="px-8 py-4 text-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        commission.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {commission.status}
                      </span>
                    </td>
                    <td className="px-8 py-4 text-right">
                      <span className="font-medium text-gray-900">₹{commission.amount.toLocaleString()}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;