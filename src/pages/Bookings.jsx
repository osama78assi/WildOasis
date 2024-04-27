import { useState } from "react";
import { useMediaQueryEffect } from "../hooks/useMediaQueryEffect";

import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
  const [heading, setHeading] = useState("h1");
  const onMatch = () => setHeading("h2");
  const onNotMatch = () => setHeading("h1");
  useMediaQueryEffect(500, onMatch, onNotMatch);

  return (
    <>
      <Row
        $type="horizontal"
        style={{ overflow: "unset", columnGap: "0.5rem" }}
      >
        <Heading as={heading}>All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <Row>
        <BookingTable />
      </Row>
    </>
  );
}

export default Bookings;
