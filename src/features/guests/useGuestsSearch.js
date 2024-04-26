import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { searchGuestsBy } from "../../services/apiGuests";

export function useGuestsSearch() {
  const {
    mutate: serachGuests,
    data: guests,
    isPending: isLoading,
  } = useMutation({
    mutationFn: ({ column, value }) => searchGuestsBy({ column, value }),
    onError: () => toast.error("Something went worng try to search again"),
  });

  return { serachGuests, guests, isLoading };
}
