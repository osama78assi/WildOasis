import { useState } from "react";
import { useMediaQueryEffect } from "../hooks/useMediaQueryEffect";

import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  const [heading, setHeading] = useState("h1");
  const onMatch = () => setHeading("h2");
  const onNotMatch = () => setHeading("h1");
  useMediaQueryEffect(500, onMatch, onNotMatch);

  return (
    <>
      <Row $type="horizontal" style={{ overflow: "visible" }}>
        <Heading as={heading}>Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
