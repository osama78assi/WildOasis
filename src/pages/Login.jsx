import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useMediaQueryEffect } from "../hooks/useMediaQueryEffect";

import styled from "styled-components";

import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-50);
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;
  margin: auto;
`;

function Login() {
  const [heading, setHeading] = useState("h1");
  const onMatch = () => setHeading("h2");
  const onNotMatch = () => setHeading("h1");
  useMediaQueryEffect(500, onMatch, onNotMatch);
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <LoginLayout>
      <Container>
        <Logo h={18} />
        <Heading as={heading} $align="center">
          Log in to your account
        </Heading>
        <LoginForm />
      </Container>
    </LoginLayout>
  );
}

export default Login;
