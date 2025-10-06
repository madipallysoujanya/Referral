import React, { useState } from 'react';
import { Check, X, Star, Crown, Zap, Shield, CreditCard } from 'lucide-react';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  gst: number;
  validity: string;
  features: PlanFeature[];
  isPopular?: boolean;
  discount?: number;
}

const Franchise: React.FC = () => {
  const [plans] = useState<Plan[]>([
    {
      id: '1',
      name: 'Economy Plan',
      price: 3000,
      originalPrice: 3540,
      gst: 540,
      validity: '30 days',
      features: [
        { name: 'Profile Creation & Management', included: true },
        { name: 'Basic Customer Support', included: true },
        { name: 'Standard Listing', included: true },
        { name: 'Mobile App Access', included: true },
        { name: 'Priority Support', included: false },
        { name: 'Featured Listing', included: false }
      ]
    },
    {
      id: '2',
      name: 'Gold Plan',
      price: 5000,
      originalPrice: 5900,
      gst: 900,
      validity: '30 days',
      isPopular: true,
      features: [
        { name: 'All Economy Features', included: true },
        { name: 'Priority Customer Support', included: true },
        { name: 'Featured Listing', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'Social Media Integration', included: true },
        { name: 'Premium Badge', included: false }
      ]
    },
    {
      id: '3',
      name: 'Platinum Plan',
      price: 8000,
      originalPrice: 9440,
      gst: 1440,
      validity: '30 days',
      discount: 15,
      features: [
        { name: 'All Gold Features', included: true },
        { name: '24/7 Premium Support', included: true },
        { name: 'Top Priority Listing', included: true },
        { name: 'Premium Badge', included: true },
        { name: 'Marketing Support', included: true },
        { name: 'Dedicated Account Manager', included: true }
      ]
    }
  ]);

  const iconMap: { [key: string]: React.ComponentType<any> } = {
    'Economy Plan': Zap,
    'Gold Plan': Star,
    'Platinum Plan': Crown,
  };

  const colorMap: { [key: string]: string } = {
    'Economy Plan': 'from-blue-500 to-blue-600',
    'Gold Plan': 'from-yellow-400 to-yellow-600',
    'Platinum Plan': 'from-purple-500 to-purple-700',
  };

  return (
    <div className="flex-1 bg-gray-50">
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Franchise Plans</h1>
          <p className="text-gray-600">Choose the right plan to grow your business</p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const IconComponent = iconMap[plan.name] || Star;
            const gradient = colorMap[plan.name] || 'from-gray-400 to-gray-600';

            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-sm border hover:shadow-lg transition-all duration-300 ${
                  plan.isPopular ? 'border-yellow-400 ring-2 ring-yellow-400' : 'border-gray-200'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {plan.discount && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                      {plan.discount}% OFF
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{plan.name}</h3>

                    <div className="mb-4">
                      <div className="text-3xl font-extrabold text-gray-900">₹{plan.price.toLocaleString()}</div>
                      {plan.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          ₹{plan.originalPrice.toLocaleString()} + GST
                        </div>
                      )}
                      <div className="text-sm text-gray-600">
                        + ₹{plan.gst} (GST 18%)
                      </div>
                    </div>

                    <div className="text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full inline-block">
                      Valid for {plan.validity}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
                        {feature.included ? (
                          <Check size={18} className="text-green-500 flex-shrink-0" />
                        ) : (
                          <X size={18} className="text-red-400 flex-shrink-0" />
                        )}
                        <span className={feature.included ? '' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white rounded-xl font-medium transition-all shadow-md">
                    Select Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Franchise;