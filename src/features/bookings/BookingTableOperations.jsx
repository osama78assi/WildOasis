import { useState } from "react";
import { useMediaQueryEffect } from "../../hooks/useMediaQueryEffect";

import ContainerElement from "../../ui/ContainerElement";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Filter from "../../ui/customInputs/Filter";
import SortBy from "../../ui/customInputs/SortBy";

function BookingTableOperations() {
  const [heading, setHeading] = useState("h2");
  const onMatchHeading = () => setHeading("h3");
  const onNotMatchHeading = () => setHeading("h2");

  useMediaQueryEffect(500, onMatchHeading, onNotMatchHeading);

  return (
    <Row $type={"vertical"} style={{ gap: "1rem", overflow: "unset" }}>
      <ContainerElement>
        <Heading as={heading} $txt="left">
          Filter
        </Heading>
        <Filter
          filterFor="status"
          collapseAt={700}
          defaultFilter="all"
          clearSearchOnClick={["page"]}
        >
          <Filter.FilterButton filter="all">All</Filter.FilterButton>
          <Filter.FilterButton filter="checked-out">
            Checked out
          </Filter.FilterButton>
          <Filter.FilterButton filter="checked-in">
            Checked in
          </Filter.FilterButton>
          <Filter.FilterButton filter="unconfirmed">
            Unconfirmed
          </Filter.FilterButton>
        </Filter>
      </ContainerElement>

      <ContainerElement>
        <Heading as={heading}>Sort</Heading>
        <SortBy
          sortFor="sortBy"
          type="white"
          getMinAt={700}
          activeLable={"Sort by date (recent first)"}
        >
          <SortBy.SelectOption value="startDate-desc">
            Sort by date (recent first)
          </SortBy.SelectOption>
          <SortBy.SelectOption value="startDate-asc">
            Sort by date (earlier first)
          </SortBy.SelectOption>
          <SortBy.SelectOption value="totalPrice-desc">
            Sort by amount (high first)
          </SortBy.SelectOption>
          <SortBy.SelectOption value="totalPrice-asc">
            Sort by amount (low first)
          </SortBy.SelectOption>
        </SortBy>
      </ContainerElement>
    </Row>
  );
}

export default BookingTableOperations;
