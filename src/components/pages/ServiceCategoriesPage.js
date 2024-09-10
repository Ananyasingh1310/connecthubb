// src/components/ServiceCategoriesPage.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Images
const images = {
  educational: 'https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_LBEINmT84cG0Guu4-4031-NOC.jpg?itok=PYbbidSJ',
  technical: 'https://cdn-ilahbdh.nitrocdn.com/bNmUgvpBcjEAUMdZnFjjytUXxozEPpwQ/assets/images/optimized/rev-d2e8e20/www.eiresystems.com/wp-content/uploads/businessman-using-computer-at-office-400x267.jpg',
  pet: 'https://www.petbusinessinsurance.co.uk/img/0-featured-man-giving-golden-labrador-he-is-pet-sitting-a-high-five.jpg',
  transportation: 'https://kelley.iu.edu/images/bloomington/programs/undergrad/academics/workshops/digital-transportation-logistics-workshop-topimage-768x450.jpg',
  LocalIssues: 'https://i0.wp.com/cleanupkenya.org/wp-content/uploads/2020/04/Clean-Up-Kenya-Naivasha-Project-12.jpg?fit=600%2C400&ssl=1',
  Professional: 'https://blog.ipleaders.in/wp-content/uploads/2020/01/Professional-Services.jpg',
  CommunitySupport: 'https://www.thehills.nsw.gov.au/files/assets/public/v/1/council-images/services/volunteering/volunteering.jpg?dimension=pageimage&w=480',
  HealthnWellness: 'https://www.who.int/images/default-source/imported/men-health-blood-pressure-measuring.jpg?sfvrsn=89ae0f2b_14',
  SkillSwaps: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-108280,resizemode-75,msid-101795217/magazines/panache/exploring-the-food-world-how-cooking-classes-helped-home-chefs-grow.jpg',
  CreativeProjects: 'https://images.squarespace-cdn.com/content/v1/5bccf44aaadd343d1754394a/1624624468131-CETL0OLFFG1YWBCP96DQ/creative-projects.jpg',
  SustainableLiving: 'https://www.sbmbank.co.in/contenthub/images/blog_images/blog11_Inside-image-2.jpg',
  LocalExperiences: 'https://traveldudes.com/wp-content/uploads/2024/05/Tourist-Welcome.jpg',
  PersonalDevelopment: 'https://miro.medium.com/v2/resize:fit:1400/1*2-NfJVycZHWIZAalY315Tg.jpeg',
  TechInnovations: 'https://www.eschoolnews.com/files/2024/12/k-12-tech-innovation-news.jpeg',
  SocialnRecreational: 'https://bucknercalderwoods.org/wp-content/uploads/2022/07/12-Fun-Recreational-Activities-for-Senior-Citizens.jpeg',
  WellnessRetreats: 'https://www.tattvamretreat.in/blog/wp-content/uploads/2023/09/Overview-1.jpg',
  UniqueServices: 'https://img.freepik.com/free-photo/map-lying-wooden-table_53876-105723.jpg?t=st=1725385547~exp=1725389147~hmac=35c15d676a5d407df7fde0cb80f9dae4a7233d8b5b2bbc999194bd95875d7732&w=1060'

};                        

const ServiceCategoriesPage = () => {
  return (
    <Container>
      <Header>
        <Title>Service Categories</Title>
        <Subtitle>Explore our wide range of services and find what you need.</Subtitle>
      </Header>
      <MainSection>
        <CategoryCard>
          <Image src={images.educational} alt="Educational Services" />
          <CategoryTitle>Educational Services</CategoryTitle>
          <CategoryDescription>Tutoring, Language Lessons, and more.</CategoryDescription>
          <LinkButton to="/educational-services">Explore Educational Services</LinkButton>
        </CategoryCard>
        <CategoryCard>
          <Image src={images.technical} alt="Technical Support" />
          <CategoryTitle>Technical Support</CategoryTitle>
          <CategoryDescription>IT Assistance, Computer Repair, and more.</CategoryDescription>
          <LinkButton to="/technicalsupport">Explore Technical Support</LinkButton>
        </CategoryCard>
        <CategoryCard>
          <Image src={images.pet} alt="Pet Services" />
          <CategoryTitle>Pet Services</CategoryTitle>
          <CategoryDescription>Pet Sitting, Dog Walking, and more.</CategoryDescription>
          <LinkButton to="/pet-services">Explore Pet Services</LinkButton>
        </CategoryCard>
        <CategoryCard>
          <Image src={images.transportation} alt="Transportation" />
          <CategoryTitle>Transportation</CategoryTitle>
          <CategoryDescription>Ride Sharing, Delivery Services, and more.</CategoryDescription>
          <LinkButton to="/transportation">Explore Transportation</LinkButton>
        </CategoryCard>
        <CategoryCard>
        <Image src={images.LocalIssues} alt="Local Issues" />  {/* Use appropriate image */}
        <CategoryTitle>Local Issues</CategoryTitle>
        <CategoryDescription>Reporting Potholes, Community Clean-Up Requests, and more.</CategoryDescription>
        <LinkButton to="/local-issues">Explore Local Issues</LinkButton>
        </CategoryCard>
        <CategoryCard>
  <Image src={images.Professional} alt="Professional Services" />  {/* Use appropriate image */}
  <CategoryTitle>Professional Services</CategoryTitle>
  <CategoryDescription>Legal Advice, Financial Planning, and more.</CategoryDescription>
  <LinkButton to="/professional-services">Explore Professional Services</LinkButton>
</CategoryCard>
<CategoryCard>
  <Image src={images.CommunitySupport} alt="Community Support" />  {/* Use appropriate image */}
  <CategoryTitle>Community Support</CategoryTitle>
  <CategoryDescription>Volunteer Opportunities, Community Events, and more.</CategoryDescription>
  <LinkButton to="/community-support">Explore Community Support</LinkButton>
</CategoryCard>

<CategoryCard>
  <Image src={images.HealthnWellness} alt="Health and Wellness" />  {/* Use appropriate image */}
  <CategoryTitle>Health and Wellness</CategoryTitle>
  <CategoryDescription>Fitness Training, Mental Health Counseling, and more.</CategoryDescription>
  <LinkButton to="/health-and-wellness">Explore Health and Wellness</LinkButton>
</CategoryCard>

<CategoryCard>
  <Image src={images.SkillSwaps} alt="Skill Swaps" />  {/* Use appropriate image */}
  <CategoryTitle>Skill Swaps</CategoryTitle>
  <CategoryDescription>Exchange Cooking Lessons for Gardening Tips, Swap Photography Skills for DIY Home Improvement Guidance, and more.</CategoryDescription>
  <LinkButton to="/skill-swaps">Explore Skill Swaps</LinkButton>
</CategoryCard>

<CategoryCard>
  <Image src={images.CreativeProjects} alt="Creative Projects" />  {/* Use appropriate image */}
  <CategoryTitle>Creative Projects</CategoryTitle>
  <CategoryDescription>Collaborative Art Projects, DIY Craft Workshops, and more.</CategoryDescription>
  <LinkButton to="/creative-projects">Explore Creative Projects</LinkButton>
</CategoryCard>

<CategoryCard>
  <Image src={images.SustainableLiving} alt="Sustainable Living" />  {/* Use appropriate image */}
  <CategoryTitle>Sustainable Living</CategoryTitle>
  <CategoryDescription>Local Upcycling and Recycling Initiatives, Community Gardening, Zero-Waste Lifestyle Workshops</CategoryDescription>
  <LinkButton to="/sustainable-living">Explore Sustainable Living</LinkButton>
</CategoryCard>

<CategoryCard>
  <Image src={images.LocalExperiences} alt="Local Experiences" />  {/* Use appropriate image */}
  <CategoryTitle>Local Experiences</CategoryTitle>
  <CategoryDescription>Guided Local Tours, Cultural Exchange Programs, Home-Stay or Cultural Immersion Experiences</CategoryDescription>
  <LinkButton to="/local-experiences">Explore Local Experiences</LinkButton>
</CategoryCard>

<CategoryCard>
  <Image src={images.PersonalDevelopment} alt="Personal Development" />  {/* Use appropriate image */}
  <CategoryTitle>Personal Development</CategoryTitle>
  <CategoryDescription>Peer Mentoring, Book Clubs, Public Speaking Workshops</CategoryDescription>
  <LinkButton to="/personal-development">Explore Personal Development</LinkButton>
</CategoryCard>

<CategoryCard>
  <Image src={images.TechInnovations} alt="Tech Innovations" />  {/* Use appropriate image */}
  <CategoryTitle>Tech Innovations</CategoryTitle>
  <CategoryDescription>Smart Home Setup Assistance, DIY Tech Projects, Coding and Robotics Workshops for Kids and Teens</CategoryDescription>
  <LinkButton to="/tech-innovations">Explore Tech Innovations</LinkButton>
</CategoryCard>

<CategoryCard>
  <Image src={images.SocialnRecreational} alt="Social and Recreational" />  {/* Use appropriate image */}
  <CategoryTitle>Social and Recreational</CategoryTitle>
  <CategoryDescription>Game Nights, Hobby Groups, Fitness Challenges and Group Workouts</CategoryDescription>
  <LinkButton to="/social-recreational">Explore Social and Recreational</LinkButton>
</CategoryCard>
<CategoryCard>
  <Image src={images.WellnessRetreats} alt="Wellness Retreats" />  {/* Use appropriate image */}
  <CategoryTitle>Wellness Retreats</CategoryTitle>
  <CategoryDescription>Yoga and Meditation Retreats, Weekend Wellness Getaways, Mindfulness and Relaxation Workshops</CategoryDescription>
  <LinkButton to="/wellness-retreats">Explore Wellness Retreats</LinkButton>
</CategoryCard>

<CategoryCard>
  <Image src={images.UniqueServices} alt="Unique Services" />  {/* Use appropriate image */}
  <CategoryTitle>Unique Services</CategoryTitle>
  <CategoryDescription>Personal Concierge Services, Custom Experience Planning, Creative Writing and Storytelling Sessions</CategoryDescription>
  <LinkButton to="/unique-services">Explore Unique Services</LinkButton>
</CategoryCard>
        {/* Add more CategoryCards as needed */}
      </MainSection>
    </Container>
  );
};

export default ServiceCategoriesPage;

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

const MainSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Three columns */
  gap: 20px;
`;

const CategoryCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px; /* Fixed height */
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CategoryDescription = styled.p`
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
