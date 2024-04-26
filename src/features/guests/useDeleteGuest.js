import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { deleteGuest as deleteApi } from "../../services/apiGuests";

export function useDeleteGuest() {
  const queryClient = useQueryClient();
  const { mutate: deleteGuest, isPending: isDeleting } = useMutation({
    mutationFn: ({ id }) => deleteApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
      toast.success("Guest deleted successfully");
    },
    onError: () => toast.error("Somthing went wrong"),
  });

  return { deleteGuest, isDeleting };
}
