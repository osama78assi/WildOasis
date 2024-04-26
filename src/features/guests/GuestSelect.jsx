import { DEBOUNCE_DELAY } from "../../utils/constants";

import { memo, useEffect, useRef, useState } from "react";
import { useGuestsSearch } from "./useGuestsSearch";

import styled from "styled-components";

import DropdownMenu from "../../ui/customInputs/DropdownMenu";
import FormErrorMsg from "../../ui/form/FormErrorMsg";
import FormSelectRow from "../../ui/form/FormSelectRow";
import Input from "../../ui/form/Input";
import LoadingDiv from "../../ui/loading/LoadingDiv";

const Label = styled.label`
  font-weight: 500;
`;

const Empty = styled.p`
  margin: 0;
  font-size: 1.4rem;
  height: 5rem;
  display: flex;
  align-items: center;
  padding-left: 1.2rem;
  color: var(--color-warning);
  border: 1px solid var(--color-warning);
  border-radius: var(--border-radius-sm);
`;

const GuestNameInput = memo(function GuestNameInput({
  setter,
  activeValue,
  activeOption,
  error,
  selectRef,
}) {
  const { serachGuests, guests = [], isLoading } = useGuestsSearch();
  const [searchInput, setSearchInput] = useState("");
  const [searchType, setSearchType] = useState("fullName");
  // Debounce technique with no need to re-render
  const cooldown = useRef(false);
  const lastQuery = useRef("");

  function search(setLastQuery = false, value) {
    if (!cooldown.current) {
      cooldown.current = true;
      let timer = setTimeout(() => {
        serachGuests({ column: searchType, value });
        cooldown.current = false;
        clearTimeout(timer);
      }, DEBOUNCE_DELAY);
    } else {
      setLastQuery ? (lastQuery.current = value) : ""; // there is a query got ignored
    }
  }

  function validate(e) {
    // avoid spicial characters
    let regex;
    let inputValue;
    if (searchType === "nationalID") {
      regex = /\d+/; // just number
      const query = e.target.value.match(regex);
      inputValue = query ? query[0] : "";
      setSearchInput(inputValue);
    } else if (searchType === "fullName") {
      regex = /(\w+ \w+|\w+ |\w+)/; // word space or no space word
      const query = e.target.value.match(regex);
      inputValue = query ? query[0] : "";
      setSearchInput(inputValue);
    }
    // it can be by this way or make an effect to sync the input data with the search function
    search(true, inputValue);
    setter("", ""); // for reset when searching for another guest
  }

  useEffect(() => {
    // if the user searched while the loading is true then the search query will get ignored
    if (lastQuery.current) {
      search(false, lastQuery.current);
      lastQuery.current = "";
    } else if (!lastQuery.current && !searchInput) {
      // when the user clear the input char by char there is a possible loading
      // for last query then the last query will be empty so nothing will happen
      // in the previous condition but here really will clear the select
      search(false, "");
    }
  }, [isLoading]);

  function prepareData(id, e) {
    if (e) {
      const details = e.target.innerHTML;
      setter(id, details);
    }
  }

  return (
    <FormSelectRow>
      <div>
        <DropdownMenu
          label="Set search type"
          activeOption={searchType}
          activeValue={searchType}
          setValue={(type) => {
            setSearchType(type);
            setSearchInput("");
            search(false, "");
          }}
        >
          <DropdownMenu.Select>
            <DropdownMenu.Option value="nationalID">
              national ID
            </DropdownMenu.Option>
            <DropdownMenu.Option value="fullName">
              full name
            </DropdownMenu.Option>
          </DropdownMenu.Select>
        </DropdownMenu>
      </div>

      <FormSelectRow $input={true}>
        <Label htmlFor="searchGuestInput">Search By {searchType}</Label>
        <Input
          value={searchInput}
          id="searchGuestInput"
          name="searchGuestInput"
          placeholder={`Search by ${searchType}`}
          onChange={(e) => validate(e)}
        />
      </FormSelectRow>

      {/* this div to get the gap from the parent CustomFormRow */}
      <div ref={selectRef}>
        {isLoading ? (
          <LoadingDiv additionalStyle={{ minHeight: "5rem" }} />
        ) : !guests.length ? (
          <Empty>No data to show</Empty>
        ) : (
          <DropdownMenu
            setValue={prepareData}
            label="Select the guest"
            {...(activeValue ? { activeValue, activeOption } : {})}
          >
            <DropdownMenu.Select>
              {guests.map((guest) => (
                <DropdownMenu.Option
                  value={guest.id}
                  key={guest.id}
                >{`fullName: ${guest.fullName}, NationalID: ${guest.nationalID}`}</DropdownMenu.Option>
              ))}
            </DropdownMenu.Select>
          </DropdownMenu>
        )}
      </div>

      {error && <FormErrorMsg>{error}</FormErrorMsg>}
    </FormSelectRow>
  );
});

export default GuestNameInput;
