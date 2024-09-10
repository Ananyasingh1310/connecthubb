// src/components/RequestForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const categories = [
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

const RequestForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the request
    console.log({ title, description, category });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Create a Request</h2>
      <label>
        Title:
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Description:
        <Textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Category:
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
      </label>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default RequestForm;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #4338ca;
  }
`;
