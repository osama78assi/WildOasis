import { useState } from "react";
import { useMediaQueryEffect } from "../hooks/useMediaQueryEffect";

import AddGuestForm from "../features/guests/AddGuestForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function AllGuests() {
  const [heading, setHeading] = useState("h1");
  const onMatch = () => setHeading("h2");
  const onNotMatch = () => setHeading("h1");
  useMediaQueryEffect(500, onMatch, onNotMatch);
  return (
    <>
      <Row style={{ overflow: "visible" }}>
        <Heading as={heading}>Add Guest</Heading>
      </Row>
      <Row style={{ overflow: "visible" }}>
        <AddGuestForm />
      </Row>
    </>
  );
}

export default AllGuests;
