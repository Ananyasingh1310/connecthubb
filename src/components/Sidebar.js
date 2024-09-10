// src/components/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { FaHome, FaUserCircle, FaCog, FaFileAlt, FaDollarSign, FaBook, FaSignOutAlt } from 'react-icons/fa'; // Import FaBook and FaSignOutAlt here
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';  // Import Link here
const Sidebar = () => {
  return (
    <SidebarContainer>
      <ProfileSection>
        <FaUserCircle size={50} />
        <LoginLink to="/login">Login</LoginLink>
      </ProfileSection>
      <Menu>
      <NavItem to="/">
          <FaHome /> Home
        </NavItem>
        <NavItem to="/profile">
          <FaUserCircle /> Profile
        </NavItem>
        <NavItem to="/settings">
          <FaCog /> Settings
        </NavItem>
        <NavItem to="/reports">
          <FaFileAlt /> Reports
        </NavItem>
        <NavItem to="/subscription">
          <FaDollarSign /> Subscription
        </NavItem>
        {/* Added Topics Section */}
        
        <NavItem to="/logout">
          <FaSignOutAlt /> Logout
        </NavItem>
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;

// Styled Components

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #1f2937;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
  position: fixed;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
`;

const LoginLink = styled(NavLink)`
  color: white;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 15px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin-bottom: 10px;

  &.active {
    background-color: #374151;
  }

  svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: #374151;
  }
`;
