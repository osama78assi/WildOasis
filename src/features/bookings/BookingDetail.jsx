import { useNavigate } from "react-router-dom";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useCheckOut } from "../check-in-out/useCheckOut";
import { useBooking } from "./useBooking";
import { useDeleteBooking } from "./useDeleteBooking";

import toast from "react-hot-toast";
import styled from "styled-components";

import ConfirmDelete from "../../ui/ConfirmDelete";
import ErrorMsg from "../../ui/ErrorMsg";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";
import Tag from "../../ui/Tag";
import Button from "../../ui/buttons/Button";
import ButtonGroup from "../../ui/buttons/ButtonGroup";
import ButtonText from "../../ui/buttons/ButtonText";
import Spinner from "../../ui/loading/Spinner";
import BookingDataBox from "./BookingDataBox";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

function BookingDetail() {
  const { booking, bookingId, isLoading, error } = useBooking();
  const navigate = useNavigate();
  const { checkOut, isCheckingOut } = useCheckOut();
  const { deleteFn, isDeleting } = useDeleteBooking(-1);
  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  if (isLoading) return <Spinner />;

  if (error) {
    toast.error("Booking detail can't be loaded", { duration: 5000 });
    return (
      <Row $type="vertical" style={{padding: "1rem 0rem"}}>
        <ButtonText onClick={moveBack} style={{width: "fit-content", alignSelf: "end"}}>&larr; Back</ButtonText>
        <ErrorMsg
          faildFor={`booking #${bookingId}`}
          queryKey={["booking", bookingId]}
        />
      </Row>
    );
  }
  const { status = "", id } = booking;

  return (
    <>
      <Row $type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{id}</Heading>
          <Tag $type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${id}`)}>Check in</Button>
        )}
        {status === "checked-in" && (
          <Button onClick={() => checkOut(id)} disabled={isCheckingOut}>
            Check Out
          </Button>
        )}
        <Modal>
          <Modal.Open opens="delete-booking">
            <Button $variation="danger" onClick={moveBack}>
              Delete
            </Button>
          </Modal.Open>
          <Modal.Window name="delete-booking">
            <ConfirmDelete
              resourceName="Booking"
              onConfirm={() => deleteFn(id)}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
        <Button $variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
