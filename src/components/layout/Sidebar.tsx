import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  UserCircle,
  Users,
  DollarSign,
  X,
  Menu,
} from 'lucide-react';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Profile', href: '/profile', icon: UserCircle },
  { name: 'Technicians', href: '/technicians', icon: Users },
  { name: 'Earnings', href: '/earnings', icon: DollarSign },
  // { name: 'FranchisePlan', href: '/franchise', icon: Building2 },
];

const Sidebar: React.FC<SidebarProps> = ({
  sidebarOpen,
  setSidebarOpen
}) => {
  const location = useLocation();

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2.5 bg-blue-50 border border-blue-200 rounded-xl shadow-md hover:bg-blue-100 transition-all duration-200"
      >
        <Menu size={20} className="text-blue-600" />
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-50 shadow-xl transform transition-transform duration-300 ease-in-out 
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 lg:static lg:inset-0`}
      >
        {/* Header */}
        <div className="relative flex items-center justify-between px-4 h-20 border-b border-blue-200 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
          <div className="relative flex items-center">
            <span className="ml-3 font-bold text-white text-lg tracking-tight">Executive</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-xl text-blue-100 hover:text-white hover:bg-blue-700/50 transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="mt-6 px-3">
          <nav className="space-y-1.5">
            {menuItems.map(({ name, href, icon: Icon }) => {
              const isActive = location.pathname === href;

              return (
                <Link
                  key={name}
                  to={href}
                  onClick={() => setSidebarOpen(false)}
                  className={`group flex items-center px-3 py-3 rounded-xl text-sm font-semibold transition-all duration-200
                    ${isActive
                      ? 'bg-blue-100 text-blue-800 shadow-md'
                      : 'text-blue-700 hover:bg-blue-100 hover:text-blue-900'}
                  `}
                >
                  <Icon
                    className={`mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-200
                      ${isActive ? 'text-blue-800' : 'text-blue-600 group-hover:text-blue-700'}
                    `}
                  />
                  {name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { 
//   LayoutDashboard, 
//   Users, 
//   Building2, 
//   User, 
//   DollarSign, 
//   UserCircle 
// } from 'lucide-react';

// const Sidebar: React.FC = () => {
//   const navigationItems = [
//     { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
//     { name: 'Profile', href: '/profile', icon: UserCircle },
//     { name: 'Technicians', href: '/technicians', icon: Users },
//     { name: 'Earnings', href: '/earnings', icon: DollarSign },
//     // { name: 'FranchisePlan', href: '/franchise', icon: Building2 },
//   ];

//   return (
//     <div className="w-64 bg-white shadow-sm flex flex-col border-r border-gray-200 fixed left-0 top-16 h-[calc(100vh-4rem)] z-40">
    

//       {/* Navigation */}
//       <nav className="flex-1 py-4">
//         <ul className="space-y-1 px-3">
//           {navigationItems.map((item) => (
//             <li key={item.name}>
//               <NavLink
//                 to={item.href}
//                 className={({ isActive }) =>
//                   `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm ${
//                     isActive
//                       ? 'bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600'
//                       : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
//                   }`
//                 }
//               >
//                 <item.icon size={20} />
//                 <span>{item.name}</span>
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;