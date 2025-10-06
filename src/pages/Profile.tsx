import React, { useState } from 'react';
import { User, Phone, MapPin, Building2, Copy, Share2, CreditCard, Check, CreditCard as Edit2, X } from 'lucide-react';

interface PersonalInfo {
  fullName: string;
  buildingOrHouseName: string;
  area: string;
  subArea: string;
  city: string;
  state: string;
  pincode: string;
  mobileNumber: string;
}

interface BankInfo {
  bankName: string;
  accountHolderName: string;
  accountNumber: string;
  ifscCode: string;
  bankBranch: string;
  folderName: string;
}

interface ToastMessage {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

const Profile: React.FC = () => {
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);
  const [isEditingBank, setIsEditingBank] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState<ToastMessage>({ show: false, message: '', type: 'success' });

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    fullName: 'John Doe',
    buildingOrHouseName: 'Sunshine Apartments',
    area: 'Jubilee Hills',
    subArea: 'Road No 45',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500033',
    mobileNumber: '+91 9876543210'
  });

  const [bankInfo, setBankInfo] = useState<BankInfo>({
    bankName: 'HDFC Bank',
    accountHolderName: 'John Doe',
    accountNumber: '12345678901234',
    ifscCode: 'HDFC0001234',
    bankBranch: 'Jubilee Hills Branch',
    folderName: 'Personal Account'
  });

  const referralCode = 'REF2024ABC123';

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  const handleCopyReferral = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);
      showToast('Referral code copied!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      showToast('Failed to copy referral code', 'error');
    }
  };

  const handleShareReferral = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join with my referral code',
          text: `Use my referral code: ${referralCode}`,
        });
        showToast('Shared successfully!');
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          showToast('Failed to share referral code', 'error');
        }
      }
    } else {
      handleCopyReferral();
    }
  };

  const handleSavePersonalInfo = () => {
    // Validation
    if (!personalInfo.fullName.trim()) {
      showToast('Please enter your full name', 'error');
      return;
    }
    if (!personalInfo.pincode.match(/^\d{6}$/)) {
      showToast('Please enter a valid 6-digit pincode', 'error');
      return;
    }

    setIsEditingPersonal(false);
    showToast('Personal information updated successfully!');
  };

  const handleSaveBankInfo = () => {
    // Validation
    if (!bankInfo.bankName.trim()) {
      showToast('Please enter bank name', 'error');
      return;
    }
    if (!bankInfo.accountNumber.match(/^\d{9,18}$/)) {
      showToast('Please enter a valid account number', 'error');
      return;
    }
    if (!bankInfo.ifscCode.match(/^[A-Z]{4}0[A-Z0-9]{6}$/)) {
      showToast('Please enter a valid IFSC code', 'error');
      return;
    }

    setIsEditingBank(false);
    showToast('Bank information updated successfully!');
  };

  const maskAccountNumber = (accountNumber: string): string => {
    if (accountNumber.length <= 4) return accountNumber;
    return 'X'.repeat(accountNumber.length - 4) + accountNumber.slice(-4);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-6 md:p-8">
        {/* Toast Notification */}
        {toast.show && (
          <div className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3 animate-slide-in ${
            toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          } text-white`}>
            <Check size={20} />
            <span className="font-medium">{toast.message}</span>
          </div>
        )}

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Profile Management</h1>
          <p className="text-gray-600">Manage your personal information and account settings</p>
        </div>

        {/* Personal Information Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
              <User className="w-6 h-6 text-blue-600" />
              <span>Personal Information</span>
            </h2>
            {!isEditingPersonal ? (
              <button
                onClick={() => setIsEditingPersonal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl flex items-center space-x-2 transition-all shadow-sm"
              >
                <Edit2 size={18} />
                <span className="font-medium">Edit</span>
              </button>
            ) : (
              <button
                onClick={() => setIsEditingPersonal(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2.5 rounded-xl flex items-center space-x-2 transition-all"
              >
                <X size={18} />
                <span className="font-medium">Cancel</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              {isEditingPersonal ? (
                <input
                  type="text"
                  value={personalInfo.fullName}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800">{personalInfo.fullName}</p>
              )}
            </div>

            {/* Mobile Number (Read-only) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2">
                <span>Mobile Number</span>
                <span className="text-xs text-gray-500 italic">(Read-only)</span>
              </label>
              <div className="px-4 py-3 bg-gray-100 rounded-xl text-gray-600 flex items-center space-x-2 cursor-not-allowed">
                <Phone size={18} className="text-gray-400" />
                <span>{personalInfo.mobileNumber}</span>
              </div>
            </div>

            {/* Building/House Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Building or House Name</label>
              {isEditingPersonal ? (
                <input
                  type="text"
                  value={personalInfo.buildingOrHouseName}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, buildingOrHouseName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter building or house name"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800">{personalInfo.buildingOrHouseName}</p>
              )}
            </div>

            {/* Area */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
              {isEditingPersonal ? (
                <input
                  type="text"
                  value={personalInfo.area}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, area: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter area"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800">{personalInfo.area}</p>
              )}
            </div>

            {/* Sub-Area */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sub-Area</label>
              {isEditingPersonal ? (
                <input
                  type="text"
                  value={personalInfo.subArea}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, subArea: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter sub-area"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800">{personalInfo.subArea}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              {isEditingPersonal ? (
                <input
                  type="text"
                  value={personalInfo.city}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, city: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter city"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800">{personalInfo.city}</p>
              )}
            </div>

            {/* State */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
              {isEditingPersonal ? (
                <input
                  type="text"
                  value={personalInfo.state}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, state: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter state"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800">{personalInfo.state}</p>
              )}
            </div>

            {/* Pincode */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
              {isEditingPersonal ? (
                <input
                  type="text"
                  value={personalInfo.pincode}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, pincode: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter 6-digit pincode"
                  maxLength={6}
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800">{personalInfo.pincode}</p>
              )}
            </div>
          </div>

          {isEditingPersonal && (
            <div className="mt-6 flex space-x-3">
              <button
                onClick={handleSavePersonalInfo}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium shadow-sm"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>

        {/* Referral Code Section */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl shadow-sm border border-blue-200 p-8 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <Share2 className="w-6 h-6 text-blue-600" />
            <span>Your Referral Code</span>
          </h2>
          <div className="flex items-center justify-between bg-white rounded-xl p-4 border border-blue-200">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Copy className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Share this code with friends</p>
                <p className="text-2xl font-bold text-gray-800 tracking-wider">{referralCode}</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleCopyReferral}
                className={`px-5 py-2.5 rounded-xl flex items-center space-x-2 transition-all font-medium shadow-sm ${
                  copied
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
              <button
                onClick={handleShareReferral}
                className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl flex items-center space-x-2 transition-all font-medium shadow-sm"
              >
                <Share2 size={18} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bank Information Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
              <CreditCard className="w-6 h-6 text-green-600" />
              <span>Bank Information</span>
            </h2>
            {!isEditingBank ? (
              <button
                onClick={() => setIsEditingBank(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl flex items-center space-x-2 transition-all shadow-sm"
              >
                <Edit2 size={18} />
                <span className="font-medium">Edit</span>
              </button>
            ) : (
              <button
                onClick={() => setIsEditingBank(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2.5 rounded-xl flex items-center space-x-2 transition-all"
              >
                <X size={18} />
                <span className="font-medium">Cancel</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bank Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
              {isEditingBank ? (
                <input
                  type="text"
                  value={bankInfo.bankName}
                  onChange={(e) => setBankInfo({ ...bankInfo, bankName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter official bank name"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800">{bankInfo.bankName}</p>
              )}
            </div>

            {/* Account Holder Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Account Holder Name</label>
              {isEditingBank ? (
                <input
                  type="text"
                  value={bankInfo.accountHolderName}
                  onChange={(e) => setBankInfo({ ...bankInfo, accountHolderName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter account holder name"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800">{bankInfo.accountHolderName}</p>
              )}
            </div>

            {/* Account Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
              {isEditingBank ? (
                <input
                  type="text"
                  value={bankInfo.accountNumber}
                  onChange={(e) => setBankInfo({ ...bankInfo, accountNumber: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter account number"
                  maxLength={18}
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-mono">
                  {maskAccountNumber(bankInfo.accountNumber)}
                </p>
              )}
            </div>

            {/* IFSC Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">IFSC Code</label>
              {isEditingBank ? (
                <input
                  type="text"
                  value={bankInfo.ifscCode}
                  onChange={(e) => setBankInfo({ ...bankInfo, ifscCode: e.target.value.toUpperCase() })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all uppercase"
                  placeholder="Enter IFSC code"
                  maxLength={11}
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800 font-mono">{bankInfo.ifscCode}</p>
              )}
            </div>

            {/* Bank Branch */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bank Branch</label>
              {isEditingBank ? (
                <input
                  type="text"
                  value={bankInfo.bankBranch}
                  onChange={(e) => setBankInfo({ ...bankInfo, bankBranch: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter bank branch"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800">{bankInfo.bankBranch}</p>
              )}
            </div>

            {/* Folder Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Folder Name</label>
              {isEditingBank ? (
                <input
                  type="text"
                  value={bankInfo.folderName}
                  onChange={(e) => setBankInfo({ ...bankInfo, folderName: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter folder name (optional)"
                />
              ) : (
                <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-800">{bankInfo.folderName || '—'}</p>
              )}
            </div>
          </div>

          {isEditingBank && (
            <div className="mt-6 flex space-x-3">
              <button
                onClick={handleSaveBankInfo}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors font-medium shadow-sm"
              >
                Save Bank Details
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Profile;









// import React, { useState } from 'react';
// import { User, Phone, MapPin, CreditCard, Users, Building2, Calendar, Edit2 } from 'lucide-react';

// interface ProfileData {
//   name: string;
//   phone: string;
//   area: string;
//   bankAccount: string;
//   ifscCode: string;
//   techniciansSubscribed: number;
//   franchisesSubscribed: number;
//   usersBooked: number;
// }

// interface Commission {
//   id: string;
//   name: string;
//   commissionRate: string;
//   status: 'Active' | 'Inactive';
//   amount: number;
// }

// const Profile: React.FC = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileData, setProfileData] = useState<ProfileData>({
//     name: 'Referral User',
//     phone: '+91 9876543210',
//     area: 'GHMC Area, Hyderabad',
//     bankAccount: '**** **** **** 1234',
//     ifscCode: 'HDFC0001234',
//     techniciansSubscribed: 200,
//     franchisesSubscribed: 100,
//     usersBooked: 10
//   });

//   const [commissions] = useState<Commission[]>([
//     { id: '1', name: 'Economy Plan Commission', commissionRate: '10%', status: 'Active', amount: 25000 },
//     { id: '2', name: 'Gold Plan Commission', commissionRate: '15%', status: 'Active', amount: 45000 },
//     { id: '3', name: 'Platinum Plan Commission', commissionRate: '20%', status: 'Active', amount: 65000 },
//     { id: '4', name: 'Franchise Commission', commissionRate: '12%', status: 'Inactive', amount: 0 },
//   ]);

//   const handleSave = () => {
//     setIsEditing(false);
//     // Handle save logic here
//   };

//   return (
//     <div className="ml-64 bg-gray-50 min-h-screen pt-16">
//       <div className="p-8">
//         {/* Header Section */}
//         <div className="flex justify-between items-start mb-8">
//           <div>
//             <h1 className="text-2xl font-bold text-gray-800 mb-2">Profile Management</h1>
//             <p className="text-gray-600">Manage your personal information and account settings</p>
//           </div>
//           <button 
//             onClick={() => setIsEditing(!isEditing)}
//             className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all shadow-md"
//           >
//             <Edit2 size={20} />
//             <span className="font-medium">{isEditing ? 'Cancel' : 'Edit Profile'}</span>
//           </button>
//         </div>

//         {/* Profile Information */}
//         <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
//           <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center space-x-2">
//             <User className="w-6 h-6 text-blue-600" />
//             <span>Personal Information</span>
//           </h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   value={profileData.name}
//                   onChange={(e) => setProfileData({...profileData, name: e.target.value})}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               ) : (
//                 <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-700">{profileData.name}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//               {isEditing ? (
//                 <input
//                   type="tel"
//                   value={profileData.phone}
//                   onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               ) : (
//                 <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-700">{profileData.phone}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Area</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   value={profileData.area}
//                   onChange={(e) => setProfileData({...profileData, area: e.target.value})}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               ) : (
//                 <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-700">{profileData.area}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Bank Account</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   value={profileData.bankAccount}
//                   onChange={(e) => setProfileData({...profileData, bankAccount: e.target.value})}
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               ) : (
//                 <p className="px-4 py-3 bg-gray-50 rounded-xl text-gray-700">{profileData.bankAccount}</p>
//               )}
//             </div>
//           </div>

//           {isEditing && (
//             <div className="mt-6 flex space-x-3">
//               <button 
//                 onClick={handleSave}
//                 className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
//               >
//                 Save Changes
//               </button>
//               <button 
//                 onClick={() => setIsEditing(false)}
//                 className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors"
//               >
//                 Cancel
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Subscription/Booking Info */}
//         <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
//           <h3 className="text-xl font-semibold text-gray-800 mb-6">Subscription & Booking Information</h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="text-center p-6 bg-blue-50 rounded-xl">
//               <Users className="w-10 h-10 text-blue-600 mx-auto mb-3" />
//               <p className="text-sm font-medium text-gray-600 mb-1">Technicians Subscribed</p>
//               <p className="text-3xl font-bold text-gray-900">{profileData.techniciansSubscribed}</p>
//             </div>

//             <div className="text-center p-6 bg-green-50 rounded-xl">
//               <Building2 className="w-10 h-10 text-green-600 mx-auto mb-3" />
//               <p className="text-sm font-medium text-gray-600 mb-1">Franchises Subscribed</p>
//               <p className="text-3xl font-bold text-gray-900">{profileData.franchisesSubscribed}</p>
//             </div>

//             <div className="text-center p-6 bg-purple-50 rounded-xl">
//               <Calendar className="w-10 h-10 text-purple-600 mx-auto mb-3" />
//               <p className="text-sm font-medium text-gray-600 mb-1">Users Booked</p>
//               <p className="text-3xl font-bold text-gray-900">{profileData.usersBooked}</p>
//             </div>
//           </div>
//         </div>

//         {/* Commission Table */}
//         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//           <div className="p-8 border-b border-gray-200">
//             <h3 className="text-xl font-semibold text-gray-800">Commission Table</h3>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-gray-50 border-b border-gray-200">
//                 <tr>
//                   <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Name</th>
//                   <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Commission Rate</th>
//                   <th className="px-8 py-4 text-center text-sm font-semibold text-gray-700">Status</th>
//                   <th className="px-8 py-4 text-right text-sm font-semibold text-gray-700">Amount</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {commissions.map((commission) => (
//                   <tr key={commission.id} className="hover:bg-gray-50 transition-colors">
//                     <td className="px-8 py-4">
//                       <span className="font-medium text-gray-900">{commission.name}</span>
//                     </td>
//                     <td className="px-8 py-4 text-gray-700">{commission.commissionRate}</td>
//                     <td className="px-8 py-4 text-center">
//                       <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
//                         commission.status === 'Active' 
//                           ? 'bg-green-100 text-green-800' 
//                           : 'bg-red-100 text-red-800'
//                       }`}>
//                         {commission.status}
//                       </span>
//                     </td>
//                     <td className="px-8 py-4 text-right">
//                       <span className="font-medium text-gray-900">₹{commission.amount.toLocaleString()}</span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;