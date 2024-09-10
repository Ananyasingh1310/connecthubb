import React from 'react';
import './TopicsPage.css';

const TopicsPage = () => {
  const topics = [
    {
      title: 'Educational Services',
      image: 'https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_LBEINmT84cG0Guu4-4031-NOC.jpg?itok=PYbbidSJ',
      subtopics: [
        'Tutoring',
        'Language Lessons',
        'Skill Development Workshops',
        'Educational Resources'
      ]
    },
    {
      title: 'Technical Support',
      image: 'https://cdn-ilahbdh.nitrocdn.com/bNmUgvpBcjEAUMdZnFjjytUXxozEPpwQ/assets/images/optimized/rev-d2e8e20/www.eiresystems.com/wp-content/uploads/businessman-using-computer-at-office-400x267.jpg',
      subtopics: [
        'IT Assistance',
        'Computer Repair',
        'Software Troubleshooting',
        'Tech Workshops'
      ]
    },
    {
      title: 'Pet Services',
      image: 'https://www.petbusinessinsurance.co.uk/img/0-featured-man-giving-golden-labrador-he-is-pet-sitting-a-high-five.jpg',
      subtopics: [
        'Pet Sitting',
        'Dog Walking',
        'Pet Grooming',
        'Veterinary Services'
      ]
    },
    {
      title: 'Transportation',
      image: 'https://kelley.iu.edu/images/bloomington/programs/undergrad/academics/workshops/digital-transportation-logistics-workshop-topimage-768x450.jpg',
      subtopics: [
        'Ride Sharing',
        'Delivery Services',
        'Moving Assistance',
        'Car Repair'
      ]
    },
    {
      title: 'Local Issues',
      image: 'https://i0.wp.com/cleanupkenya.org/wp-content/uploads/2020/04/Clean-Up-Kenya-Naivasha-Project-12.jpg?fit=600%2C400&ssl=1',
      subtopics: [
        'Reporting Potholes',
        'Community Clean-Up Requests',
        'Safety Concerns',
        'Local Infrastructure Improvements'
      ]
    },
    {
      title: 'Professional Services',
      image: 'https://blog.ipleaders.in/wp-content/uploads/2020/01/Professional-Services.jpg',
      subtopics: [
        'Legal Advice',
        'Financial Planning',
        'Consulting Services',
        'Career Counseling'
      ]
    },
    {
      title: 'Community Support',
      image: 'https://www.thehills.nsw.gov.au/files/assets/public/v/1/council-images/services/volunteering/volunteering.jpg?dimension=pageimage&w=480',
      subtopics: [
        'Volunteer Opportunities',
        'Community Events',
        'Fundraising Activities',
        'Local Workshops'
      ]
    },
    {
      title: 'Health and Wellness',
      image: 'https://www.who.int/images/default-source/imported/men-health-blood-pressure-measuring.jpg?sfvrsn=89ae0f2b_14',
      subtopics: [
        'Fitness Training',
        'Mental Health Counseling',
        'Nutrition Advice',
        'Medical Assistance'
      ]
    },
    {
      title: 'Skill Swaps',
      image: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-108280,resizemode-75,msid-101795217/magazines/panache/exploring-the-food-world-how-cooking-classes-helped-home-chefs-grow.jpg',
      subtopics: [
        'Exchange Cooking Lessons for Gardening Tips',
        'Swap Photography Skills for DIY Home Improvement Guidance',
        'Trade Musical Instrument Lessons for Language Practice'
      ]
    },
    {
      title: 'Creative Projects',
      image: 'https://images.squarespace-cdn.com/content/v1/5bccf44aaadd343d1754394a/1624624468131-CETL0OLFFG1YWBCP96DQ/creative-projects.jpg',
      subtopics: [
        'Collaborative Art Projects (e.g., Community Murals)',
        'DIY Craft Workshops and Supplies Exchange',
        'Design Assistance for Personal Projects (e.g., Event Invitations, Custom Gifts)'
      ]
    },
    {
      title: 'Sustainable Living',
      image: 'https://www.sbmbank.co.in/contenthub/images/blog_images/blog11_Inside-image-2.jpg',
      subtopics: [
        'Local Upcycling and Recycling Initiatives',
        'Community Gardening and Urban Farming',
        'Zero-Waste Lifestyle Workshops'
      ]
    },
    {
      title: 'Local Experiences',
      image: 'https://traveldudes.com/wp-content/uploads/2024/05/Tourist-Welcome.jpg',
      subtopics: [
        'Guided Local Tours and Historical Walks',
        'Cultural Exchange Programs (e.g., Cooking Classes from Different Cultures)',
        'Home-Stay or Cultural Immersion Experiences'
      ]
    },
    {
      title: 'Personal Development',
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*2-NfJVycZHWIZAalY315Tg.jpeg',
      subtopics: [
        'Peer Mentoring and Coaching Sessions',
        'Book Clubs and Study Groups',
        'Public Speaking and Presentation Skills Workshops'
      ]
    },
    {
      title: 'Tech Innovations',
      image: 'https://www.eschoolnews.com/files/2024/12/k-12-tech-innovation-news.jpeg',
      subtopics: [
        'Smart Home Setup Assistance',
        'DIY Tech Projects (e.g., Building a Raspberry Pi Project)',
        'Coding and Robotics Workshops for Kids and Teens'
      ]
    },
    {
      title: 'Social and Recreational',
      image: 'https://bucknercalderwoods.org/wp-content/uploads/2022/07/12-Fun-Recreational-Activities-for-Senior-Citizens.jpeg',
      subtopics: [
        'Game Nights and Social Meetups',
        'Hobby Groups (e.g., Astronomy Clubs, Board Game Enthusiasts)',
        'Fitness Challenges and Group Workouts'
      ]
    },
    {
      title: 'Wellness Retreats',
      image: 'https://www.tattvamretreat.in/blog/wp-content/uploads/2023/09/Overview-1.jpg',
      subtopics: [
        'Yoga and Meditation Retreats',
        'Weekend Wellness Getaways (e.g., Nature Hikes, Spa Days)',
        'Mindfulness and Relaxation Workshops'
      ]
    },
    {
      title: 'Unique Services',
      image: 'https://img.freepik.com/free-photo/map-lying-wooden-table_53876-105723.jpg?t=st=1725385547~exp=1725389147~hmac=35c15d676a5d407df7fde0cb80f9dae4a7233d8b5b2bbc999194bd95875d7732&w=1060',
      subtopics: [
        'Personal Concierge Services (e.g., Running Errands, Special Requests)',
        'Custom Experience Planning (e.g., Surprise Events, Unique Dates)',
        'Creative Writing and Storytelling Sessions'
      ]
    }
  ];

  return (
    <div className="topics-page">
      <h1>Explore Our Topics</h1>
      <div className="topics-container">
        {topics.map((topic, index) => (
          <div key={index} className="topic-card">
            <img src={topic.image} alt={topic.title} className="topic-image" />
            <h2 className="topic-title">{topic.title}</h2>
            <ul className="subtopics-list">
              {topic.subtopics.map((subtopic, subIndex) => (
                <li key={subIndex} className="subtopic-item">{subtopic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicsPage;
