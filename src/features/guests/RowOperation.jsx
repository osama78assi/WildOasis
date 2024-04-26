import { useDeleteGuest } from "./useDeleteGuest";

import { HiTrash } from "react-icons/hi2";
import Menu from "../../ui/Menu";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

function RowOperation({ id }) {
  const { deleteGuest, isDeleting } = useDeleteGuest();

  function del() {
    deleteGuest({ id });
  }

  return (
    <Modal>
      <Menu id={`geust${id}`}>
        <Menu.Toggle />
        <Menu.List>
          <Modal.Open opens="delete-guest">
            <Menu.Button Icon={HiTrash} disabled={isDeleting}>
              Delete
            </Menu.Button>
          </Modal.Open>
        </Menu.List>
      </Menu>
      <Modal.Window popup={true} name="delete-guest">
        <ConfirmDelete
          resourceName="Guest"
          onConfirm={del}
          moreDetails="it will delete all bookings for this guest"
          disabled={isDeleting}
        />
      </Modal.Window>
    </Modal>
  );
}

export default RowOperation;
