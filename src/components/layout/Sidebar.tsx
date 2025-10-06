// 

import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  User, 
  DollarSign, 
  UserCircle 
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const navigationItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Profile', href: '/profile', icon: UserCircle },
    { name: 'Technicians', href: '/technicians', icon: Users },
    { name: 'Earnings', href: '/earnings', icon: DollarSign },
    // { name: 'FranchisePlan', href: '/franchise', icon: Building2 },
  ];

  return (
    <div className="w-64 bg-white shadow-sm flex flex-col border-r border-gray-200 fixed left-0 top-16 h-[calc(100vh-4rem)] z-40">
    

      {/* Navigation */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-3">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                  }`
                }
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;