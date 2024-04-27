import { useState } from "react";
import { useMediaQueryEffect } from "../hooks/useMediaQueryEffect";

import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  const [heading, setHeading] = useState("h1");
  const onMatch = () => setHeading("h2");
  const onNotMatch = () => setHeading("h1");
  useMediaQueryEffect(500, onMatch, onNotMatch);

  return (
    <>
      <Row $type="horizontal" style={{ overflow: "unset" }}>
        <Heading as={heading}>All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row style={{height: "46rem"}} >
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
