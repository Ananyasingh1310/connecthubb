import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <Container>
      <FormWrapper>
        <Logo>ConnectHub</Logo>
        <Form>
          {isSignUp ? (
            <>
              <InputWrapper>
                <FaUserAlt />
                <Input type="text" placeholder="Username" />
              </InputWrapper>
              <InputWrapper>
                <FaEnvelope />
                <Input type="email" placeholder="Email" />
              </InputWrapper>
              <InputWrapper>
                <FaLock />
                <Input type="password" placeholder="Password" />
              </InputWrapper>
              <Button>Sign Up</Button>
              <Text>
                Already have an account? <span onClick={toggleForm}>Sign in</span>
              </Text>
            </>
          ) : (
            <>
              <InputWrapper>
                <FaUserAlt />
                <Input type="text" placeholder="Username or Email" />
              </InputWrapper>
              <InputWrapper>
                <FaLock />
                <Input type="password" placeholder="Password" />
              </InputWrapper>
              <Button>Login</Button>
              <Text>
                Don’t have an account? <span onClick={toggleForm}>Sign up</span>
              </Text>
            </>
          )}
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
`;

const FormWrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 40px;
  width: 400px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  color: #3b82f6;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f5f9;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 10px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  margin-left: 10px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`;

const Text = styled.p`
  margin-top: 20px;
  font-size: 0.9rem;
  color: #6b7280;

  span {
    color: #3b82f6;
    cursor: pointer;
  }
`;
