import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Mock data for services
const services = [
  { category: 'Educational Services', subcategories: ['Tutoring', 'Language Lessons', 'Skill Development Workshops'] },
  { category: 'Technical Support', subcategories: ['IT Assistance', 'Computer Repair', 'Software Troubleshooting'] },
  // Add other categories and subcategories as needed
];

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    fullName: 'Ananyaa',
    email: 'Ananya.acpce.ac.in',
    phone: '702193***',
    address: 'kharghar',
    bio: 'I love coding and exploring new technologies.',
    twitter: '@anan**',
    linkedin: 'linkedin.com/in/ana**',
    skills: [], // Changed to array
    servicesDone: ['@an****                                   -: Tutoring'], // Mock services done
    profilePicture: 'https://via.placeholder.com/100',
  });

  const [selectedSkills, setSelectedSkills] = useState(userInfo.skills);
  const [servicesDone, setServicesDone] = useState(userInfo.servicesDone);

  useEffect(() => {
    if (isEditing) {
      setSelectedSkills(userInfo.skills);
      setServicesDone(userInfo.servicesDone);
    }
  }, [isEditing]);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo({ ...userInfo, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    setUserInfo({
      ...userInfo,
      skills: selectedSkills,
      servicesDone: servicesDone,
    });
    // Add save functionality here (e.g., save to backend)
  };

  const handleSkillsChange = (e) => {
    const { options } = e.target;
    const selected = [];
    for (const option of options) {
      if (option.selected) {
        selected.push(option.value);
      }
    }
    setSelectedSkills(selected);
  };

  const handleServicesDoneChange = (e) => {
    setServicesDone(e.target.value.split(',').map(service => service.trim()));
  };

  return (
    <Container>
      <ProfileContainer>
        <ProfilePicBox>
          <ProfilePicture src={userInfo.profilePicture} alt="Profile" />
          <ProfileInput
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: isEditing ? 'block' : 'none' }}
          />
          <Username>{userInfo.fullName}</Username>
          {isEditing ? (
            <textarea
              name="bio"
              value={userInfo.bio}
              onChange={handleChange}
              rows="4"
              placeholder="Enter your bio"
            />
          ) : (
            <Bio>{userInfo.bio}</Bio>
          )}
        </ProfilePicBox>

        <InfoBox>
          <h3>Personal Information</h3>
          {isEditing ? (
            <>
              <InfoField>
                <label>Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={userInfo.fullName}
                  onChange={handleChange}
                />
              </InfoField>
              <InfoField>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                />
              </InfoField>
              <InfoField>
                <label>Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                />
              </InfoField>
              <InfoField>
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={userInfo.address}
                  onChange={handleChange}
                />
              </InfoField>
            </>
          ) : (
            <>
              <InfoField>
                <label>Full Name:</label>
                <p>{userInfo.fullName}</p>
              </InfoField>
              <InfoField>
                <label>Email:</label>
                <p>{userInfo.email}</p>
              </InfoField>
              <InfoField>
                <label>Phone:</label>
                <p>{userInfo.phone}</p>
              </InfoField>
              <InfoField>
                <label>Address:</label>
                <p>{userInfo.address}</p>
              </InfoField>
            </>
          )}
          <EditButton onClick={isEditing ? handleSave : handleEdit}>
            {isEditing ? 'Save' : 'Edit'}
          </EditButton>
        </InfoBox>

        <SocialMediaBox>
          <h3>Social Media</h3>
          <SocialField>
            <label>Twitter:</label>
            {isEditing ? (
              <input
                type="text"
                name="twitter"
                value={userInfo.twitter}
                onChange={handleChange}
              />
            ) : (
              <p>{userInfo.twitter}</p>
            )}
          </SocialField>
          <SocialField>
            <label>LinkedIn:</label>
            {isEditing ? (
              <input
                type="text"
                name="linkedin"
                value={userInfo.linkedin}
                onChange={handleChange}
              />
            ) : (
              <p>{userInfo.linkedin}</p>
            )}
          </SocialField>
        </SocialMediaBox>
      </ProfileContainer>

      <AdditionalInfo>
        <SkillsBox>
          <h3>Skills for Services</h3>
          {isEditing ? (
            <select multiple value={selectedSkills} onChange={handleSkillsChange}>
              {services.map((service) => (
                <optgroup key={service.category} label={service.category}>
                  {service.subcategories.map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          ) : (
            <p>{selectedSkills.join(', ')}</p>
          )}
        </SkillsBox>

        <InterestsBox>
          <h3>Services Done Report</h3>
          {isEditing ? (
            <textarea
              value={servicesDone.join(', ')}
              onChange={handleServicesDoneChange}
              placeholder="Enter the services you have done, separated by commas"
            />
          ) : (
            <p>{servicesDone.join(', ')}</p>
          )}
        </InterestsBox>
      </AdditionalInfo>
    </Container>
  );
};

export default ProfilePage;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProfileContainer = styled.div`
  display: flex;
  gap: 20px;
  border: 1px solid #d1d5db; /* Slight border */
  border-radius: 10px;
  padding: 20px;
  background-color: #ffffff;
`;

const ProfilePicBox = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #d1d5db; /* Slight border */
  position: relative;
`;

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ProfileInput = styled.input`
  display: none;
`;

const Username = styled.h2`
  margin-bottom: 10px;
`;

const Bio = styled.p`
  color: #6b7280;
`;

const InfoBox = styled.div`
  flex: 2;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #d1d5db; /* Slight border */
`;

const InfoField = styled.div`
  margin-bottom: 10px;
`;

const EditButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

const SocialMediaBox = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #d1d5db; /* Slight border */
`;

const SocialField = styled.div`
  margin-bottom: 10px;
`;

const AdditionalInfo = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

const SkillsBox = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #d1d5db; /* Slight border */
`;

const InterestsBox = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #d1d5db; /* Slight border */
`;
