import { useQuery } from "@tanstack/react-query";

import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const queryKey = ["cabin"];
  const {
    isPending: isFetching,
    data: cabins,
    error,
  } = useQuery({
    queryKey,
    queryFn: getCabins,
  });

  return { isFetching, cabins, error, queryKey };
}
