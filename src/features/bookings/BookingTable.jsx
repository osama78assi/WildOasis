import { RESULTS_BOOKINGS_FOR_PAGE } from "../../utils/constants";

import { useRefetchData } from "../../hooks/useRefetchData";
import { useBookings } from "./useBookings";

import toast from "react-hot-toast";

import Empty from "../../ui/Empty";
import ErrorMsg from "../../ui/ErrorMsg";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import Refetch from "../../ui/loading/Refetch";
import Spinner from "../../ui/loading/Spinner";
import BookingRow from "./BookingRow";

function BookingTable() {
  const bookingsDetails = {
    filterName: "status",
    field: "status",
    filterMethod: "eq",
    sortBy: "sortBy",
    defaultSort: "startDate-desc",
    resultPerPage: RESULTS_BOOKINGS_FOR_PAGE,
  };
  const { bookings, error, isLoading, count, queryKey } =
    useBookings(bookingsDetails);
  const { isFetching, reFetch } = useRefetchData(queryKey);

  if (isLoading) return <Spinner />;

  if (error) {
    toast.error("Cabins couldn't be loaded", { duration: 5000 });

    return <ErrorMsg faildFor="bookings" />;
  }

  if (!bookings.length) return <Empty resource="Bookings" />;

  return (
    <Table
      columns="1fr 2fr 1.4fr 1.4fr 1fr 3.2rem"
      additionStyles="column-gap: 1.4rem;"
      fixWidthAt={775}
    >
      <Table.Header>
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <Refetch
          disabled={isFetching}
          onClick={reFetch}
          isFetching={isFetching}
        />
      </Table.Header>

      <Table.Body
        data={bookings}
        render={(booking, index) => (
          <BookingRow
            key={booking.id}
            booking={booking}
            position={
              // position of the popup menu
              index === bookings.length - 1 && bookings.length !== 1
                ? "top-left"
                : "bottom-left"
            }
          />
        )}
      />

      <Table.Footer>
        <Pagination count={count} pageSize={RESULTS_BOOKINGS_FOR_PAGE} />
      </Table.Footer>
    </Table>
  );
}

export default BookingTable;
