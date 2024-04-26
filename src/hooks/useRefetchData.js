import { useIsFetching, useQueryClient } from "@tanstack/react-query";

export function useRefetchData(key) {
  // Re-fetch the current active data for tables maybe
  const queryClient = useQueryClient();
  function reFetch() {
    if (key) queryClient.invalidateQueries({ queryKey: key });
    else queryClient.invalidateQueries({ active: true });
  }
  const isFetching = useIsFetching({
    ...(key ? { queryKey: key } : { active: true }),
  });
  return { isFetching, reFetch };
}
