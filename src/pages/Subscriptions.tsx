import React, { useEffect, useState } from 'react';
import { Check, X, Star, Crown, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Star,
  Crown,
  Zap,
  Shield,
};

interface PlanFeature {
  name: string;
  included: boolean;
}

interface FullFeature {
  text: string;
}

interface Plan {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  gst: number;
  finalPrice: number;
  validity: number | null;
  validityUnit: string;
  icon: string;
  color: string;
  features: PlanFeature[];
  fullFeatures: FullFeature[];
  discount?: number;
  isPopular?: boolean;
  buttonColor: string;
  leads?: number;
}

const SubscriptionPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const navigate = useNavigate();
  const [plans, setPlans] = useState<Plan[]>([
    {
      _id: '1',
      name: 'Economy Plan',
      price: 3000,
      originalPrice: 3540,
      gst: 540,
      finalPrice: 3540,
      validity: 30,
      validityUnit: 'days',
      icon: 'Zap',
      color: 'from-blue-500 to-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      features: [
        { name: 'Profile Creation & Management', included: true },
        { name: 'Basic Customer Support', included: true },
        { name: 'Standard Listing', included: true },
        { name: 'Mobile App Access', included: true },
        { name: 'Priority Support', included: false },
        { name: 'Featured Listing', included: false }
      ],
      fullFeatures: [
        { text: 'Complete profile creation and management tools' },
        { text: 'Direct customer communication' },
        { text: 'Standard listing in search results' }
      ]
    },
    {
      _id: '2',
      name: 'Gold Plan',
      price: 5000,
      originalPrice: 5900,
      gst: 900,
      finalPrice: 5900,
      validity: 30,
      validityUnit: 'days',
      icon: 'Star',
      color: 'from-yellow-400 to-yellow-600',
      buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
      isPopular: true,
      features: [
        { name: 'All Economy Features', included: true },
        { name: 'Priority Customer Support', included: true },
        { name: 'Featured Listing', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'Premium Badge', included: false }
      ],
      fullFeatures: [
        { text: 'All Economy Plan features included' },
        { text: 'Priority customer support' },
        { text: 'Featured placement in search results' }
      ]
    }
  ]);
  const [error, setError] = useState<string | null>(null);

  const handleFullDetails = (plan: Plan): void => {
    navigate(`/subscription/${plan._id}`, { 
      state: { plan } 
    });
  };

  interface PlanConfig {
    gradient: string;       
    icon: React.ComponentType<any>;      
    button: string;         
  }

  const PLAN_CONFIG: Record<string, PlanConfig> = {
    "Economy Plan": {
      gradient: "from-blue-500 to-blue-600",
      icon: Zap,
      button: "bg-blue-600 hover:bg-blue-700",
    },
    "Gold Plan": {
      gradient: "from-yellow-400 to-yellow-600",
      icon: Star,
      button: "bg-yellow-500 hover:bg-yellow-600",
    },
    "Platinum Plan": {
      gradient: "from-purple-500 to-purple-700",
      icon: Crown,
      button: "bg-purple-600 hover:bg-purple-700",
    },
    "Free Plan": {
      gradient: "from-green-400 to-green-600",
      icon: Shield,
      button: "bg-green-500 hover:bg-green-700",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex">
        <div className="flex-1 p-8 ml-64">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Referral Subscription Plans
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the right plan to grow your referral business and reach more customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {plans
                .filter(plan => plan.name !== "Free Plan") 
                .map((plan: Plan) => {
                  const config = PLAN_CONFIG[plan.name] || {
                    gradient: "from-gray-400 to-gray-600",
                    icon: Star,
                    button: "bg-gray-500 hover:bg-gray-600",
                  };
                  const IconComponent = config?.icon;

                  return (
                    <div
                      key={plan._id}
                      className={`relative flex flex-col h-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border 
                        ${selectedPlan === plan._id ? 'ring-2 ring-blue-500' : ''} 
                        ${plan.isPopular ? 'border-yellow-400 ring-2 ring-yellow-400' : 'border-gray-200'}`}
                    >
                      {plan.isPopular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <div className="bg-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                            MOST POPULAR
                          </div>
                        </div>
                      )}

                      <div className="p-6 flex flex-col h-full">
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{plan?.name}</h3>

                          <div className="mb-4">
                            <div className="text-2xl font-bold text-gray-900">₹ {plan?.price?.toLocaleString()}</div>
                            <div className="text-sm text-gray-600">
                              ₹{plan.price?.toLocaleString()} + ₹{plan.gst} (GST 18%)
                            </div>
                          </div>

                          <div className="text-xs font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full inline-block">
                            Valid until {plan?.validity} days
                          </div>
                        </div>

                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                              {feature.included ? (
                                <Check size={16} className="text-green-500 flex-shrink-0" />
                              ) : (
                                <X size={16} className="text-red-400 flex-shrink-0" />
                              )}
                              <span className={feature.included ? '' : 'text-gray-400'}>
                                {feature.name}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto">
                          <button
                            onClick={() => handleFullDetails(plan)}
                            className="w-full py-2 px-4 text-blue-600 hover:text-blue-700 font-medium transition duration-300 border border-blue-200 rounded-lg hover:bg-blue-50"
                          >
                            View Full Details →
                          </button>
                        </div>
                      </div>
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;









// import React, { useEffect, useState } from 'react';
// import { Check, X, Star, Crown, Zap, Shield } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const iconMap: { [key: string]: React.ComponentType<any> } = {
//   Star,
//   Crown,
//   Zap,
//   Shield,
// };

// interface PlanFeature {
//   name: string;
//   included: boolean;
// }

// interface FullFeature {
//   text: string;
// }

// interface Plan {
//   _id: string;
//   name: string;
//   price: number;
//   originalPrice?: number;
//   gst: number;
//   finalPrice: number;
//   validity: number | null;
//   validityUnit: string;
//   icon: string;
//   color: string;
//   features: PlanFeature[];
//   fullFeatures: FullFeature[];
//   discount?: number;
//   isPopular?: boolean;
//   buttonColor: string;
//   leads?: number;
// }

// const SubscriptionPage: React.FC = () => {
//   const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
//   const navigate = useNavigate();
//   const [plans, setPlans] = useState<Plan[]>([
//     {
//       _id: '1',
//       name: 'Economy Plan',
//       price: 3000,
//       originalPrice: 3540,
//       gst: 540,
//       finalPrice: 3540,
//       validity: 30,
//       validityUnit: 'days',
//       icon: 'Zap',
//       color: 'from-blue-500 to-blue-600',
//       buttonColor: 'bg-blue-600 hover:bg-blue-700',
//       features: [
//         { name: 'Profile Creation & Management', included: true },
//         { name: 'Basic Customer Support', included: true },
//         { name: 'Standard Listing', included: true },
//         { name: 'Mobile App Access', included: true },
//         { name: 'Priority Support', included: false },
//         { name: 'Featured Listing', included: false }
//       ],
//       fullFeatures: [
//         { text: 'Complete profile creation and management tools' },
//         { text: 'Direct customer communication' },
//         { text: 'Standard listing in search results' }
//       ]
//     },
//     {
//       _id: '2',
//       name: 'Gold Plan',
//       price: 5000,
//       originalPrice: 5900,
//       gst: 900,
//       finalPrice: 5900,
//       validity: 30,
//       validityUnit: 'days',
//       icon: 'Star',
//       color: 'from-yellow-400 to-yellow-600',
//       buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
//       isPopular: true,
//       features: [
//         { name: 'All Economy Features', included: true },
//         { name: 'Priority Customer Support', included: true },
//         { name: 'Featured Listing', included: true },
//         { name: 'Advanced Analytics', included: true },
//         { name: 'Social Media Integration', included: true },
//         { name: 'Premium Badge', included: false }
//       ],
//       fullFeatures: [
//         { text: 'All Economy Plan features included' },
//         { text: 'Priority customer support' },
//         { text: 'Featured placement in search results' }
//       ]
//     }
//   ]);
//   const [error, setError] = useState<string | null>(null);

//   const handleFullDetails = (plan: Plan): void => {
//     navigate(`/subscription/${plan._id}`, { 
//       state: { plan } 
//     });
//   };

//   interface PlanConfig {
//     gradient: string;       
//     icon: React.ComponentType<any>;      
//     button: string;         
//   }

//   const PLAN_CONFIG: Record<string, PlanConfig> = {
//     "Economy Plan": {
//       gradient: "from-blue-500 to-blue-600",
//       icon: Zap,
//       button: "bg-blue-600 hover:bg-blue-700",
//     },
//     "Gold Plan": {
//       gradient: "from-yellow-400 to-yellow-600",
//       icon: Star,
//       button: "bg-yellow-500 hover:bg-yellow-600",
//     },
//     "Platinum Plan": {
//       gradient: "from-purple-500 to-purple-700",
//       icon: Crown,
//       button: "bg-purple-600 hover:bg-purple-700",
//     },
//     "Free Plan": {
//       gradient: "from-green-400 to-green-600",
//       icon: Shield,
//       button: "bg-green-500 hover:bg-green-700",
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
//             Referral Subscription Plans
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Choose the right plan to grow your referral business and reach more customers.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {plans
//             .filter(plan => plan.name !== "Free Plan") 
//             .map((plan: Plan) => {
//               const config = PLAN_CONFIG[plan.name] || {
//                 gradient: "from-gray-400 to-gray-600",
//                 icon: Star,
//                 button: "bg-gray-500 hover:bg-gray-600",
//               };
//               const IconComponent = config?.icon;

//               return (
//                 <div
//                   key={plan._id}
//                   className={`relative flex flex-col h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border 
//                     ${selectedPlan === plan._id ? 'ring-2 ring-blue-500' : ''} 
//                     ${plan.isPopular ? 'border-yellow-400 ring-2 ring-yellow-400' : 'border-gray-200'}`}
//                 >
//                   {plan.isPopular && (
//                     <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                       <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
//                         MOST POPULAR
//                       </div>
//                     </div>
//                   )}

//                   {Number(plan.discount) > 0 && (
//                     <div className="absolute -top-2 -right-2 z-10">
//                       <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
//                         {plan?.discount}% OFF
//                       </div>
//                     </div>
//                   )}

//                   <div className="p-8 pb-6 flex flex-col h-full">
//                     <div className="text-center mb-8">
//                       <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${config?.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
//                         <IconComponent className="text-white" size={32} />
//                       </div>
//                       <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan?.name}</h3>

//                       <div className="mb-4">
//                         <div className="text-3xl font-extrabold text-gray-900">₹ {plan?.price?.toLocaleString()}</div>
//                         {Number(plan.originalPrice) > 0 && (
//                           <div className="text-sm text-gray-500 line-through">
//                             ₹{plan.originalPrice?.toLocaleString()} + (GST 18%)
//                           </div>
//                         )}
//                         {Number(plan.price) > 0 && (
//                         <div className="text-sm text-gray-600">
//                           ₹{plan.price?.toLocaleString()} + ₹{plan.gst} (GST 18%)
//                         </div>
//                         )}
//                       </div>

//                       <div className="text-sm font-medium text-blue-700 bg-blue-100 px-4 py-2 rounded-full inline-block">
//                         Valid until {plan?.validity === null ? plan.leads : plan.validity} {plan?.validity === null ? "leads" : "days"}
//                       </div>
//                     </div>

//                     <ul className="space-y-3 mb-8">
//                       {plan.features.map((feature, index) => (
//                         <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
//                           {feature.included ? (
//                             <Check size={18} className="text-green-500 flex-shrink-0" />
//                           ) : (
//                             <X size={18} className="text-red-400 flex-shrink-0" />
//                           )}
//                           <span className={feature.included ? '' : 'text-gray-400'}>
//                             {feature.name}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>

//                     <div className="mt-auto">
//                       <button
//                         onClick={() => handleFullDetails(plan)}
//                         className="w-full py-3 px-6 text-blue-600 hover:text-blue-700 font-medium transition duration-300 border border-blue-200 rounded-xl hover:bg-blue-50"
//                       >
//                         View Full Details →
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionPage;