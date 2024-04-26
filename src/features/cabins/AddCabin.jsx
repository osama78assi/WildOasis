import styled from "styled-components";

import Button from "../../ui/buttons/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

// Before Compouned Component Design Pattern
// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>Add From</Button>

//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }

// That code need this modal
// function Modal({ children, onClose }) {
//   return createPortal (
//     <Overlay>
//       <StyledModal>
//         <Button onClick={onClose}>
//           <HiXMark />
//         </Button>
//         <div>{children}</div>
//       </StyledModal>
//     </Overlay>
//   ,document.body);
// }

const StyledAddCabin = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// After Compouned Component Design Pattern
function AddCabin() {
  return (
    <StyledAddCabin>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form" form={true}>
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </StyledAddCabin>
  );
}

export default AddCabin;
