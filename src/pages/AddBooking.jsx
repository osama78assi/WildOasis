import { useState } from "react";
import { useMediaQueryEffect } from "../hooks/useMediaQueryEffect";
import { useRefetchData } from "../hooks/useRefetchData";

import AddSingleBooking from "../features/bookings/AddSingleBooking";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Refetch from "../ui/loading/Refetch";

function AllGuests() {
  const [heading, setHeading] = useState("h1");
  const onMatch = () => setHeading("h2");
  const onNotMatch = () => setHeading("h1");
  useMediaQueryEffect(500, onMatch, onNotMatch);
  const { reFetch, isFetching } = useRefetchData();

  return (
    <>
      <Row style={{ overflow: "visible" }}>
        <Heading as={heading}>Add Booking</Heading>
        <Refetch
          onClick={reFetch}
          disabled={isFetching}
          isFetching={isFetching}
        />
      </Row>
      <Row style={{ overflow: "visible"}}>
        <AddSingleBooking />
      </Row>
    </>
  );
}

export default AllGuests;
