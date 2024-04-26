import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getBooking } from "../../services/apiBookings";

export function useBooking() {
  const { bookingId } = useParams();
  const queryKey = ["booking", bookingId];
  const {
    isPending: isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey,
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  return { booking, bookingId, isLoading, error, queryKey };
}
