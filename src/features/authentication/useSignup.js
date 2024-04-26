import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const queryClient = useQueryClient();
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: ({ user }) => {
      queryClient.invalidateQueries(["user"], user);
      toast.success(
        "Account successfully created. Please verfiy the new account from the user's email address."
      );
    },
    onError: (err) =>
      err.message !==
        "Cannot read properties of null (reading 'keepDefaultValues')" &&
      toast.error(err.message),
  });
  return { signup, isLoading };
}
