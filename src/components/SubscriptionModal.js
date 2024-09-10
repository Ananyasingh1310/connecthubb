// src/components/SubscriptionModal.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SubscriptionModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SubscriptionButton onClick={toggleModal}>Subscribe Now</SubscriptionButton>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Subscription Plan</h2>
            <p>Select a plan to get premium features:</p>
            <SubscriptionOptions>
              <Plan>
                <h3>Free Plan</h3>
                <p>Up to 5 requests/posts per month</p>
              </Plan>
              <Plan>
                <h3>Premium Plan</h3>
                <p>Unlimited requests/posts</p>
                <p>₹200 / month</p>
              </Plan>
            </SubscriptionOptions>
            <CloseButton onClick={toggleModal}>Close</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default SubscriptionModal;

const SubscriptionButton = styled.button`
  padding: 10px 20px;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4338ca;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
`;

const SubscriptionOptions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Plan = styled.div`
  background-color: #f3f4f6;
  padding: 20px;
  border-radius: 10px;
  width: 150px;
  h3 {
    margin-bottom: 10px;
  }
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #dc2626;
  }
`;
