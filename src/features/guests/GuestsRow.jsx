import Table from "../../ui/Table";
import RowOperation from "./RowOperation";

function GuestsRow({ guest }) {
  const { id, fullName, email, nationalID, nationality } = guest;
  return (
    <Table.Row>
      <span>{fullName}</span>
      <span>{email}</span>
      <span>{nationalID}</span>
      <span>{nationality}</span>
      <RowOperation id={id}/>
    </Table.Row>
  );
}

export default GuestsRow;
