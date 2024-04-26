import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export function useDeleteBooking(naviagteTo) {
  const queryClient = useQueryClient();
  const naviagte = useNavigate();
  const { mutate: deleteFn, isPending: isDeleting } = useMutation({
    mutationFn: (bookingId) => deleteBooking(bookingId),
    onSuccess: () => {
      toast.success(`Booking deleted successfully`);
      queryClient.invalidateQueries({ active: true });
      if (naviagteTo) {
        naviagte(naviagteTo);
      }
    },
    onError: () => {
      toast.error("Booking couldn't be deleted");
    },
  });

  return { deleteFn, isDeleting };
}
