import { useNavigate } from "react-router-dom";
import { useCheckOut } from "../check-in-out/useCheckOut";
import { useDeleteBooking } from "./useDeleteBooking";

import { format, isToday } from "date-fns";
import styled from "styled-components";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menu from "../../ui/Menu";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
  position,
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const navigate = useNavigate();
  const { checkOut, isCheckingOut } = useCheckOut();
  const { deleteFn, isDeleting } = useDeleteBooking();

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag $type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>

      <Modal>
        <Menu id={bookingId}>
          <Menu.Toggle />
          <Menu.List position={position}>
            <Menu.Button
              Icon={HiEye}
              onClick={() => navigate(`/booking/${bookingId}`)}
            >
              Show detials
            </Menu.Button>

            {status === "unconfirmed" && (
              <Menu.Button
                Icon={HiArrowDownOnSquare}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </Menu.Button>
            )}

            {status === "checked-in" && (
              <Menu.Button
                Icon={HiArrowUpOnSquare}
                onClick={() => checkOut(bookingId)}
                disabled={isCheckingOut}
              >
                Check Out
              </Menu.Button>
            )}

            <Modal.Open opens="delete-booking">
              <Menu.Button Icon={HiTrash}>Delete Booking</Menu.Button>
            </Modal.Open>
          </Menu.List>

          <Modal.Window popup={true} name="delete-booking">
            <ConfirmDelete
              resourceName="Booking"
              onConfirm={() => deleteFn(bookingId)}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Menu>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
