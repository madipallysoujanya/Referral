import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import Technicians from './pages/Technicians';
import Users from './pages/Users';
import Earnings from './pages/Earnings';
import Profile from './pages/Profile';
import Franchise from './pages/Franchise';
import AboutUs from './pages/AboutUs';
import Categories from './pages/Categories';
import KeyFeatures from './pages/KeyFeatures';
import Subscriptions from './pages/Subscriptions';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="technicians" element={<Technicians />} />
            <Route path="franchise" element={<Franchise />} />
            <Route path="users" element={<Users />} />
            <Route path="earnings" element={<Earnings />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="categories" element={<Categories />} />
            <Route path="features" element={<KeyFeatures />} />
            <Route path="subscription" element={<Subscriptions />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;