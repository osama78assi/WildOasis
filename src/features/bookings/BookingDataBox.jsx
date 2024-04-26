import { format, isToday } from "date-fns";
import styled from "styled-components";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";
import Spinner from "../../ui/loading/Spinner";
import Guest from "../guests/Guest";
import Footer from "./Footer";
import Header from "./Header";
import Price from "./Price";

const StyledBookingDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
  @media (max-width: 835px) {
    padding: 2.2rem 2rem 1.2rem;
  }
`;

const P = styled.p`
  display: inline-block;
`;

// A purely presentational component
function BookingDataBox({ booking }) {
  if (!booking?.created_at) return <Spinner />;
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin <span>{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </Header>

      <Section>
        <Guest>
          <div>
            {countryFlag && (
              <Flag
                src={countryFlag}
                alt={`Flag of ${country}`}
                $additionStyle="display: inline-block; margin-right: 0.5rem"
              />
            )}
            <P>
              {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
            </P>
          </div>

          <div>
            <p>Email</p>
            <span>{email}</span>
          </div>

          <div>
            <p>National ID</p>
            <span>National ID {nationalID}</span>
          </div>
        </Guest>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {hasBreakfast ? "Yes" : "No"}
        </DataItem>

        <Price $isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

          <p>{isPaid ? "Paid" : "Will pay at property"}</p>
        </Price>
      </Section>

      <Footer>
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
