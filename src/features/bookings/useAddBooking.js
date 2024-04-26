import { useMutation } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { addNewBooking } from "../../services/apiBookings";

export function useAddBooking() {
  const { mutate: addBooking, isPending: isLoading } = useMutation({
    mutationFn: addNewBooking,
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { addBooking, isLoading };
}
