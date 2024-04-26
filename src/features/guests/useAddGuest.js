import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { addGuest as addApi } from "../../services/apiGuests";

export function useAddGuest() {
  const queryClient = useQueryClient();
  const { mutate: addGuest, isPending: isLoading } = useMutation({
    mutationFn: (data) => addApi(data),
    onSuccess: () => {
      toast.success("Guest added successfully");
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => toast.error("Something went wrong"),
  });

  return { addGuest, isLoading };
}
