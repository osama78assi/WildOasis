import { useState } from "react";
import { useMediaQueryEffect } from "../hooks/useMediaQueryEffect";

import CreateCabinForm from "../features/cabins/CreateCabinForm";
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
        <Heading as={heading}>Add Cabin</Heading>
      </Row>
      <Row style={{ overflow: "visible" }}>
        <CreateCabinForm />
      </Row>
    </>
  );
}

export default AllGuests;
