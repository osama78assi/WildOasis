import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getBookings } from "../../services/apiBookings";

export function useBookings(bookingsDetails) {
  const {
    filterName,
    field,
    filterMethod,
    sortBy,
    defaultSort,
    resultPerPage,
  } = bookingsDetails;
  // Method either eq, lt, lte, lg, lge and so one...
  // Filter value is simply "how to filter" and field is "what to filter"

  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  // Filter
  const targetParam = searchParams.get(filterName);
  const value = targetParam === "all" || !targetParam ? null : targetParam;
  const filterFlag = { field, value, filterMethod };
  // Sort
  const sortByRow = searchParams.get(sortBy) || defaultSort;
  const [sortField, sortDirection] = sortByRow.split("-");
  const sortFlag = { sortField, sortDirection };
  // pagination
  const page = !searchParams.get("page") ? 1 : +searchParams.get("page");
  // return the qury key to check if the data for this query if fetching or not
  const queryKey = ["bookings", filterFlag, sortFlag, page];
  const {
    data: { count, bookings } = {},
    error,
    isPending: isLoading,
  } = useQuery({
    queryKey,
    queryFn: () => getBookings(filterFlag, sortFlag, page),
  });
  const pageCount = Math.ceil(count / resultPerPage);
  // prefetching
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filterFlag, sortFlag, page + 1],
      queryFn: () => getBookings(filterFlag, sortFlag, page + 1),
      staleTime: 0,
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filterFlag, sortFlag, page - 1],
      queryFn: () => getBookings(filterFlag, sortFlag, page - 1),
    });
  }
  return { bookings, isLoading, error, count, queryKey, page };
}
