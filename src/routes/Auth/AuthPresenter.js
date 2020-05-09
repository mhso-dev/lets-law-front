import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background: linear-gradient(to top, #bdc3c7, #2c3e50);
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #bdc3c7;
  opacity: 0.5;
  font-size: 17px;
  color: #2c3e50;
  padding: 5px;
`;

const Input = styled.input`
  all: unset;
  font-size: 18px;
  width: 100%;
  color: ${props => props.theme.bgColor};
  padding: 10px;
  ::placeholder {
    color: ${props => props.theme.lightGreyColor};
  }
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  border-bottom: ${props => props.theme.boxBorder};
`;

const StyledLink = styled.span`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.darkBlueColor};
  cursor: pointer;
`;

const AuthPresenter = ({
  email,
  password,
  username,
  action,
  setAction,
  _handleLogin,
  _handleSignUp
}) => {
  return (
    <>
      <Container>
        <Helmet>
          <title>Let's Law | Login</title>
        </Helmet>
        {action === "login" && (
          <>
            <form onSubmit={_handleLogin}>
              <FormWrapper>
                <Input placeholder="email" type={"email"} {...email} />
                <Input
                  placeholder="password"
                  type="password"
                  {...password}
                  autocomplete="current-password"
                />

                <Button>Login</Button>
              </FormWrapper>
            </form>
            <StyledLink onClick={() => setAction("signUp")}>
              회원가입
            </StyledLink>
          </>
        )}
        {action === "signUp" && (
          <>
            <form onSubmit={_handleSignUp}>
              <FormWrapper>
                <Input placeholder="email" type={"email"} {...email} />
                <Input
                  placeholder="password"
                  type="password"
                  {...password}
                  autocomplete="new-password"
                />
                <Input placeholder="password 확인" type="password" />
                <Input placeholder="username" {...username} />
                <Button>Sign Up</Button>
              </FormWrapper>
            </form>
            <StyledLink onClick={() => setAction("login")}>로그인</StyledLink>
          </>
        )}
      </Container>
    </>
  );
};

export default AuthPresenter;
