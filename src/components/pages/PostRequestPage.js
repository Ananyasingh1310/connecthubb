import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const EducationalServicesPage = () => {
  const navigate = useNavigate();

  const handleRequestClick = (subcategory) => {
    console.log('Navigating to post-request with:', {
      category: 'Educational Services',
      subcategory: subcategory
    });
    navigate('/post-request', {
      state: {
        category: 'Educational Services',
        subcategory: subcategory
      }
    });
  };

  return (
    <Container>
      <Header>
        <Title>Educational Services</Title>
        <Subtitle>Find various educational services like tutoring, language lessons, and more.</Subtitle>
      </Header>
      <ServiceList>
        <ServiceItem>
          <h3>Tutoring</h3>
          <p>Get personalized tutoring in various subjects from experienced tutors.</p>
          <Buttons>
            <AddToSkillButton>Add to Skill</AddToSkillButton>
            <RequestButton onClick={() => handleRequestClick('Tutoring')}>Request</RequestButton>
          </Buttons>
        </ServiceItem>
        {/* Add other services similarly */}
      </ServiceList>
    </Container>
  );
};

export default EducationalServicesPage;

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Header = styled.header`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #6b7280;
`;

const ServiceList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px 0;
  font-size: 1.2rem;
  text-align: left;

  h3 {
    margin-bottom: 5px;
  }

  p {
    margin-bottom: 10px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const AddToSkillButton = styled.button`
  padding: 5px 10px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #2563eb;
  }
`;

const RequestButton = styled.button`
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #388e3c;
  }
`;
