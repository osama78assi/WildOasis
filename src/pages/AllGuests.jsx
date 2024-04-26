import { useState } from "react";
import { useMediaQueryEffect } from "../hooks/useMediaQueryEffect";

import GuestsTable from "../features/guests/GuestsTable";
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
        <Heading as={heading}>Guests</Heading>
      </Row>
      <Row>
        <GuestsTable />
      </Row>
    </>
  );
}

export default AllGuests;
