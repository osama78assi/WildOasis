import DropdownMenu from "../../ui/customInputs/DropdownMenu";
import FormErrorMsg from "../../ui/form/FormErrorMsg";
import FormSelectRow from "../../ui/form/FormSelectRow";

function SelectStatus({ setter, label, error }) {
  //  (unconfirmed, checked-in, checked-out)
  return (
    <FormSelectRow $additionalStyle="gap: 0.5rem;border-bottom: none;">
      <DropdownMenu
        setValue={setter}
        label={label}
        activeOption="unconfirmed"
        activeValue="unconfirmed"
      >
        <DropdownMenu.Select>
          <DropdownMenu.Option value="unconfirmed">
            unconfirmed
          </DropdownMenu.Option>
          <DropdownMenu.Option value="checked-in">
            checked-in
          </DropdownMenu.Option>
          <DropdownMenu.Option value="checked-out">
            checked-out
          </DropdownMenu.Option>
        </DropdownMenu.Select>
      </DropdownMenu>
      {error && <FormErrorMsg>{error}</FormErrorMsg>}
    </FormSelectRow>
  );
}

export default SelectStatus;
