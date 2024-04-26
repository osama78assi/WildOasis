import { useEffect, useState } from "react";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import { useCheckIn } from "./useCheckIn";

import toast from "react-hot-toast";
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

import BookingDataBox from "../../features/bookings/BookingDataBox";
import ErrorMsg from "../../ui/ErrorMsg";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Buttonsdf from "../../ui/buttons/Button";
import ButtonGroup from "../../ui/buttons/ButtonGroup";
import ButtonText from "../../ui/buttons/ButtonText";
import Checkbox from "../../ui/customInputs/Checkbox";
import Spinner from "../../ui/loading/Spinner";
import AddBreakfast from "./AddBreakfast";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckIn();
  const { booking, bookingId: id, isLoading, error } = useBooking();
  const [breakfastPrice, setBreakfastPrice] = useState(0);

  useEffect(() => {
    setConfirmPaid(booking?.isPaid ?? false);
  }, [booking?.isPaid]);

  if (isLoading) return <Spinner />;

  if (error) {
    toast.error("Check in details can't be loaded");
    return <ErrorMsg faildFor={`booking #${id}`} queryKey={["booking", id]} />;
  }

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  function handleCheckin() {
    if (!confirmPaid) return;
    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: breakfastPrice,
          totalPrice: totalPrice + breakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row $type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      {!hasBreakfast && (
        <Box>
          <AddBreakfast
            addBreakfast={addBreakfast}
            setAddBreakfast={setAddBreakfast}
            numGuests={numGuests}
            numNights={numNights}
            onChange={() => setConfirmPaid(false)}
            setPrice={setBreakfastPrice}
          />
        </Box>
      )}
      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isCheckingIn}
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(totalPrice + breakfastPrice)}(${formatCurrency(
                totalPrice
              )} + ${formatCurrency(breakfastPrice)})`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Buttonsdf
          onClick={handleCheckin}
          disabled={!confirmPaid || isCheckingIn}
        >
          Check in booking #{bookingId}
        </Buttonsdf>
        <Buttonsdf $variation="secondary" onClick={moveBack}>
          Back
        </Buttonsdf>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
