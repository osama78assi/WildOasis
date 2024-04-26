import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { editCabin } from "../../services/apiCabins";

export function useUpdateCabin() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: update } = useMutation({
    mutationFn: ({ newCabinData, id }) => editCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, update };
}
