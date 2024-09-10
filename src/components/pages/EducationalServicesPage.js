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
          <ServiceTitle>Tutoring</ServiceTitle>
          <ServiceDescription>
            Get personalized help with your studies in subjects like math, science, and more.
          </ServiceDescription>
          <ExampleText>
            Example: "Need help preparing for your math exam? You can add 'Tutoring' to your skills or request a tutor from this category."
          </ExampleText>
          <ButtonContainer>
            <AddSkillButton>Add to Skill</AddSkillButton>
            <RequestButton onClick={() => handleRequestClick('Tutoring')}>Request</RequestButton>
          </ButtonContainer>
        </ServiceItem>

        <ServiceItem>
          <ServiceTitle>Language Lessons</ServiceTitle>
          <ServiceDescription>
            Learn a new language or improve your skills with personalized lessons.
          </ServiceDescription>
          <ExampleText>
            Example: "Want to learn Spanish? You can add 'Language Lessons' to your skills or request a tutor for help."
          </ExampleText>
          <ButtonContainer>
            <AddSkillButton>Add to Skill</AddSkillButton>
            <RequestButton>Request</RequestButton>
          </ButtonContainer>
        </ServiceItem>

        <ServiceItem>
          <ServiceTitle>Skill Development Workshops</ServiceTitle>
          <ServiceDescription>
            Attend workshops to develop new skills in various subjects.
          </ServiceDescription>
          <ExampleText>
            Example: "Looking to improve your public speaking? You can add 'Skill Development' to your skills or request to attend a workshop."
          </ExampleText>
          <ButtonContainer>
            <AddSkillButton>Add to Skill</AddSkillButton>
            <RequestButton onClick={() => handleRequestClick('Educational Resources')}>Request</RequestButton>
          </ButtonContainer>
        </ServiceItem>

        <ServiceItem>
          <ServiceTitle>Educational Resources</ServiceTitle>
          <ServiceDescription>
            Access resources like textbooks, online courses, and more.
          </ServiceDescription>
          <ExampleText>
            Example: "Need materials to study? You can add 'Educational Resources' to your skills or request study materials."
          </ExampleText>
          <ButtonContainer>
            <AddSkillButton>Add to Skill</AddSkillButton>
            <RequestButton>Request</RequestButton>
          </ButtonContainer>
        </ServiceItem>
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
  padding: 20px;
  margin: 20px 0;
  font-size: 1.2rem;
  text-align: left;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const ExampleText = styled.p`
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddSkillButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
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
