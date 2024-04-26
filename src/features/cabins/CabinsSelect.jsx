import { useCabins } from "./useCabins";

import { memo } from "react";
import styled from "styled-components";

import ErrorMsg from "../../ui/ErrorMsg";
import DropdownMenu from "../../ui/customInputs/DropdownMenu";
import FormErrorMsg from "../../ui/form/FormErrorMsg";
import FormSelectRow from "../../ui/form/FormSelectRow";
import LoadingDiv from "../../ui/loading/LoadingDiv";

const Label = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0;
`;

const CabinsSelect = memo(function CabinsSelect({
  setter,
  selectRef,
  activeValue,
  activeOption,
  error,
}) {
  const { cabins, isFetching: isLoading, error: cabinError } = useCabins();

  function prepareData(id, e) {
    if (e) {
      const data = e.target.innerHTML;
      setter(id, data);
    }
  }

  if (isLoading)
    return (
      <FormSelectRow>
        <Label>Select the cabin</Label>
        <LoadingDiv additionalStyle={{ minHeight: "5rem" }} />
      </FormSelectRow>
    );

  if (cabinError)
    return (
      <ErrorMsg
        faildFor="cabins"
        queryKey={["cabin"]}
        additionalStyle="width: 100%;"
      />
    );

  return (
    <FormSelectRow
      $input={true}
      ref={selectRef}
      $additionalStyle={{
        paddingBottom: "2.4rem",
        borderBottom: "1px solid var(--color-grey-200)",
      }}
    >
      <DropdownMenu
        label="Select the cabin"
        {...(activeOption ? { activeOption, activeValue } : {})} // passing optional parameters
        setValue={prepareData}
      >
        <DropdownMenu.Select>
          {cabins.map((cabin) => (
            <DropdownMenu.Option key={cabin.id} value={cabin.id}>
              {cabin.name}
            </DropdownMenu.Option>
          ))}
        </DropdownMenu.Select>
      </DropdownMenu>
      {error && <FormErrorMsg>{error}</FormErrorMsg>}
    </FormSelectRow>
  );
});

export default CabinsSelect;
