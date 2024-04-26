import styled from "styled-components";

import { Link } from "react-router-dom";
import { Flag } from "../../ui/Flag";
import Tag from "../../ui/Tag";
import Button from "../../ui/buttons/Button";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
  @media (max-width: 550px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const Guest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.4rem;
  font-weight: 500;
`;

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;
  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag $type="green">Arrivving</Tag>}
      {status === "checked-in" && <Tag $type="blue">Departing</Tag>}
      <Guest>
        <Flag src={guests.countryFlag} alt={`Flag of ${guests.countryFlag}`} />
        {guests.fullName}
      </Guest>
      <div>nights: {numNights}</div>
      {status === "unconfirmed" && (
        <Button
          $size="small"
          $variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

export default TodayItem;
