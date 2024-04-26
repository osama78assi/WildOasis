import { useEffect, useState } from "react";
import { useCreateCabin } from "./useCreateCabin";
import { useDeleteCabin } from "./useDeleteCabin";

import { formatCurrency } from "../../utils/helpers";

import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menu from "../../ui/Menu";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import LoadingDiv from "../../ui/loading/LoadingDiv";
import Cabin from "./Cabin";
import CreateCabinForm from "./CreateCabinForm";
import Discount from "./Discount";
import Img from "./Img";
import Price from "./Price";

const styles = `
@media (max-width: 920px) {
  & {
    grid-template-rows: 10rem;
  }
}
`;

function CabinRow({ cabin, position }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  const [src, setSrc] = useState("");
  const { isPending: isDeleting, deleteCabinFn } = useDeleteCabin();
  const { isCreating, create } = useCreateCabin();
  const isWorking = isCreating || isDeleting;

  function handelDuplicate() {
    create({
      newCabinData: {
        name: `Copy of ${name}`,
        maxCapacity,
        regularPrice,
        discount,
        image,
        description,
      },
      copy: true,
    });
  }

  useEffect(() => {
    fetch(image, { method: "GET" })
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setSrc(url);
      });
  }, [image]);

  return (
    <Table.Row additionStyles={styles}>
      {!src ? (
        <LoadingDiv additionalStyle={{ height: "140px" }} />
      ) : (
        <Img src={src} />
      )}
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      {discount ? (
        <Discount>{formatCurrency(discount)}</Discount>
      ) : (
        <Discount style={{ textAlign: "center" }}>&mdash;</Discount>
      )}

      <div>
        <Modal>
          <Menu id={id}>
            <Menu.Toggle disabled={isWorking} />

            <Menu.List position={position}>
              <Menu.Button Icon={HiSquare2Stack} onClick={handelDuplicate}>
                Dublicate
              </Menu.Button>

              <Modal.Open opens="edit">
                <Menu.Button Icon={HiPencil}>Edit</Menu.Button>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Menu.Button Icon={HiTrash}>Delete</Menu.Button>
              </Modal.Open>
            </Menu.List>
          </Menu>

          <Modal.Window name="edit" form={true}>
            <CreateCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Window name="delete" popup={true}>
            <ConfirmDelete
              resourceName={`cabin ${name}`}
              disabled={isDeleting}
              onConfirm={() => deleteCabinFn(id)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default CabinRow;
