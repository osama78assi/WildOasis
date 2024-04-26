import { useQuery } from "@tanstack/react-query";

import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const queryKey = ["settings"];
  const {
    isPending,
    data: settings,
    error,
  } = useQuery({
    queryKey,
    queryFn: getSettings,
  });

  return { isPending, settings, error, queryKey };
}
