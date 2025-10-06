// 

import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Download, Menu, X, Star } from 'lucide-react';
import { TbLogout } from 'react-icons/tb';

interface User {
  username: string;
  role: 'referral';
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const updateUser = () => {
      const storedUser = localStorage.getItem('user');
      const parsedUser: User | null = storedUser ? JSON.parse(storedUser) : null;
      if (parsedUser?.role === 'referral') {
        setUser(parsedUser);
      } else {
        setUser({ username: 'Referral', role: 'referral' });
      }
    };

    window.addEventListener('userChanged', updateUser);
    updateUser();

    return () => {
      window.removeEventListener('userChanged', updateUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate('/login/referral');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 bg-blue-900 rounded px-1 py-1">
            <button onClick={handleLogoClick}>
              <img
                src="https://prnvservices.com/uploads/logo/1695377568_logo-white.png"
                alt="PRNV Services Logo"
                className="h-8 w-auto cursor-pointer"
              />
            </button>
          </div>

          <nav className="hidden md:flex space-x-4 flex-shrink items-center">
            <div className="flex items-center w-16">
              <div id="google_translate_element" className="w-full" />
            </div>
            {([
              ['categories', 'Categories'],
              ['about', 'About Us'],
              ['subscription', 'Subscriptions'],
              ['features', 'Key Features'],
            ] as [string, string][]).map(([path, label]) => (
              <Link
                key={path}
                to={`/${path}`}
                className="text-gray-700 hover:text-blue-600 px-2 py-1 text-sm font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4 relative">
            <button className="hidden md:flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Download App</span>
            </button>

            {user ? (
              <>
                <div className="relative">
                  <button
                    className="text-sm text-gray-700 hover:text-blue-600 focus:outline-none"
                  >
                    Hi, {user?.username || 'Referral'}
                  </button>
                </div>
                <button
                  className="text-gray-700 hover:text-yellow-600 cursor-pointer"
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </button>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-red-800 cursor-pointer"
                >
                  <TbLogout className="w-5 h-5 text-red-500" />
                </button>
              </>
            ) : (
              <Link
                to="/login/referral"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Login
              </Link>
            )}

            <button className="md:hidden" onClick={() => setMobileOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end">
          <div className="w-64 bg-white h-full shadow-lg flex flex-col p-6 relative animate-slide-in">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center w-16 mb-6 mt-2">
              <div id="google_translate_element_mobile" className="w-full" />
            </div>

            {([
              ['categories', 'Categories'],
              ['about', 'About Us'],
              ['subscription', 'Subscriptions'],
              ['features', 'Key Features'],
            ] as [string, string][]).map(([path, label]) => (
              <Link
                key={path}
                to={`/${path}`}
                className="text-gray-700 hover:text-blue-600 py-2 text-base font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}

            {user ? (
              <>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 py-2 text-base font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-700 py-2 text-base font-medium text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login/referral"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors mt-4 text-center"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>
            )}

            <button className="mt-6 flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors w-full justify-center">
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Download App</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;