import { useState } from "react";
import { useMediaQueryEffect } from "../hooks/useMediaQueryEffect";

import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
  const [heading, setHeading] = useState("h1");
  const onMatch = () => setHeading("h2");
  const onNotMatch = () => setHeading("h1");
  useMediaQueryEffect(500, onMatch, onNotMatch);

  return (
    <>
      <Heading as={heading}>Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
