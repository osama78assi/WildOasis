import { useState } from "react";
import { useMediaQueryEffect } from "../hooks/useMediaQueryEffect";
import { useRefetchData } from "../hooks/useRefetchData";

import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Refetch from "../ui/loading/Refetch";
import Row from "../ui/Row";

function Settings() {
  const { isFetching, reFetch } = useRefetchData();
  const [heading, setHeading] = useState("h1");
  const onMatch = () => setHeading("h2");
  const onNotMatch = () => setHeading("h1");
  useMediaQueryEffect(500, onMatch, onNotMatch);

  return (
    <Row>
      <Row $type="horizontal">
        <Heading as={heading}>Update hotel settings</Heading>
        <Refetch
          isFetching={isFetching}
          disabled={isFetching}
          onClick={reFetch}
        />
      </Row>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;
