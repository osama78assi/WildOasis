import { RESULTS_GUESTS_FOR_PAGE } from "../../utils/constants";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { getAllGuests } from "../../services/apiGuests";

export function useGuests() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const page = !searchParams.get("page") ? 1 : +searchParams.get("page");
  const { data: { guests, count } = {}, isPending: isLoading, error } = useQuery({
    queryKey: ["guests", page],
    queryFn: () => getAllGuests(page, RESULTS_GUESTS_FOR_PAGE),
  });

  const pageCount = Math.ceil(count / RESULTS_GUESTS_FOR_PAGE);
  if (page < pageCount && !queryClient.getQueryData(["guests", page + 1])) {
    queryClient.prefetchQuery({
      queryKey: ["guests", page + 1],
      queryFn: () => getAllGuests(page + 1, RESULTS_GUESTS_FOR_PAGE),
    });
  }
  if (page > 1 && !queryClient.getQueryData(["guests", page - 1])) {
    queryClient.prefetchQuery({
      queryKey: ["guests", page - 1],
      queryFn: () => getAllGuests(page - 1, RESULTS_GUESTS_FOR_PAGE),
    });
  }
  return { guests, isLoading, count, error, page };
}
