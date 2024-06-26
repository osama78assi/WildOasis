import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: ({ password, fullName, avatar }) =>
      updateCurrentUser({ password, fullName, avatar }),
    onSuccess: () => {
      toast.success("Current user updated successfully");
      // queryClient.setQueryData(["user"], user)
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => toast.error("Somthing went wrong"),
  });

  return { updateUser, isUpdating };
}
