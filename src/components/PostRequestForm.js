// src/components/PostRequestForm.js

import React, { useState } from 'react';
import styled from 'styled-components';



const serviceCategories = [
  'Educational Services',
  'Technical Support',
  'Pet Services',
  'Transportation',
  'Personal Projects',
  'Local Issues',
  'Professional Services',
  'Home Services',
  'Community Support',
  'Health and Wellness',
  'Skill Swaps',
  'Creative Projects',
  'Sustainable Living',
  'Personal Development',
  'Tech Innovations',
  'Social and Recreational',
  'Neighborhood Projects',
  'Wellness Retreats',
  'Unique Services',
];

const PostRequestForm = ({ category, subcategory }) => {
  const [formData, setFormData] = useState({
    requestDescription: subcategory || '',
    category: category || '',
    startTime: '',
    endTime: '',
    location: '',
    urgencyLevel: 'Normal',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <FormContainer>
      <Tagline>Need help? Post your request and let the community come to your aid!</Tagline>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Request Description</Label>
          <TextArea
            name="requestDescription"
            placeholder="Describe what help you need..."
            value={formData.requestDescription}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Choose a Category</Label>
          <Select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">--Select a Category--</option>
            {serviceCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Location</Label>
          <Input
            name="location"
            type="text"
            placeholder="Where do you need the service?"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Start Time</Label>
          <Input
            name="startTime"
            type="datetime-local"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>End Time</Label>
          <Input
            name="endTime"
            type="datetime-local"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Urgency Level</Label>
          <Select
            name="urgencyLevel"
            value={formData.urgencyLevel}
            onChange={handleChange}
          >
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value="Immediate">Immediate</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Additional Information</Label>
          <TextArea
            name="additionalInfo"
            placeholder="Any special instructions?"
            value={formData.additionalInfo}
            onChange={handleChange}
          />
        </FormGroup>

        <SubmitButton type="submit">Post Request</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default PostRequestForm;

// Styled Components

const FormContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9fafb;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const Tagline = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #4a5568;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 5px;
  resize: vertical;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`;
