import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const HomePage = () => {
  return (
    <Container>
      <Header>
        <Title>Welcome to ConnectHub</Title>
        <Subtitle>Your gateway to local community engagement and employment</Subtitle>
      </Header>
      <MainSection>
        <CardWrapper>
          <Card>
            <CardTitle>Find Services</CardTitle>
            <CardDescription>Explore and connect with local service providers who can assist with your needs.</CardDescription>
            <LinkButton to="/services">Explore Services</LinkButton>
          </Card>
          <Card>
            <CardTitle>Post Requests</CardTitle>
            <CardDescription>Need something done? Post your request and let local providers come to you.</CardDescription>
            <LinkButton to="/post-request">Post a Request</LinkButton>
          </Card>
        </CardWrapper>
      </MainSection>
      <Footer>
        <FooterLinks>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/terms">Terms of Service</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
        </FooterLinks>
      </Footer>
    </Container>
  );
};

export default HomePage;

// Styled Components

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Header = styled.header`
  margin-bottom: 60px; /* Increased margin to push content down */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #6b7280;
`;

const MainSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 80px; /* Added margin to push the footer down */
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 40px; /* Increased gap between cards */
  margin-top: 40px; /* Added margin to push cards down from the heading */
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 300px;
  text-align: left;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  color: #6b7280;
  margin-bottom: 20px;
`;

const LinkButton = styled(Link)`
  display: inline-block;
  background-color: #3b82f6;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #2563eb;
  }
`;

const Footer = styled.footer`
  width: 100%;
  background-color: #f3f4f6;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  position: relative;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

const FooterLink = styled(Link)`
  color: #3b82f6;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
