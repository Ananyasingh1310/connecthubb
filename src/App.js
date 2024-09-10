// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import PostRequestForm from './components/PostRequestForm';
import PostRequestPage from './components/pages/PostRequestPage';
import LoginPage from './components/pages/LoginPage';
import ProfilePage from './components/ProfilePage';
import PostList from './components/PostList';
import ServiceCategoriesPage from './components/pages/ServiceCategoriesPage';
import EducationalServicesPage from './components/pages/EducationalServicesPage';
import MapView from './components/MapView';
import SubscriptionModal from './components/SubscriptionModal';
import Sidebar from './components/Sidebar';
import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Sidebar />
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post-request" element={<PostRequestForm />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/map" element={<MapView posts={[]} />} /> {/* Pass actual posts data */}
          <Route path="/services" element={<ServiceCategoriesPage />} />
          <Route path="/educational-services" element={<EducationalServicesPage />} />
          <Route path="/post-request" element={<PostRequestPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/subscription" element={<SubscriptionModal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
