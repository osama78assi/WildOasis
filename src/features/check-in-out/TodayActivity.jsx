import { useState } from "react";
import { useMediaQueryLayoutEffect } from "../../hooks/useMediaQueryLayoutEffect";
import { useTodayActivity } from "../check-in-out/useTodayActivity";

import styled from "styled-components";

import ErrorMsg from "../../ui/ErrorMsg";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import LoadingDiv from "../../ui/loading/LoadingDiv";
import TodayItem from "./TodayItem";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function TodayActivity() {
  const { activities, error, isLoading } = useTodayActivity();
  const [heading, setHeading] = useState("h2");
  const onMatch = () => setHeading("h3");
  const onNotMatch = () => setHeading("h2");
  useMediaQueryLayoutEffect(600, onMatch, onNotMatch);

  if (isLoading)
    return (
      <StyledToday>
        <LoadingDiv
          additionalStyle={{ height: "100%", gridColumn: "1 / span 2" }}
        />
      </StyledToday>
    );

  if (error)
    return (
      <StyledToday>
        <ErrorMsg faildFor="activity" queryKey={["today-activity"]} />
      </StyledToday>
    );

  if (!activities.length)
    return (
      <StyledToday>
        <NoActivity>No activities today</NoActivity>
      </StyledToday>
    );

  return (
    <StyledToday>
      <Row $type="horizontal" style={{ overflow: "visible" }}>
        <Heading as={heading}>Today</Heading>
      </Row>

      <TodayList>
        {activities?.map((activity) => (
          <TodayItem activity={activity} key={activity.id} />
        ))}
      </TodayList>
    </StyledToday>
  );
}

export default TodayActivity;
