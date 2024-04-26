import { useState } from "react";
import { useMediaQueryEffect } from "../../hooks/useMediaQueryEffect";

import ContainerElement from "../../ui/ContainerElement";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Filter from "../../ui/customInputs/Filter";
import SortBy from "../../ui/customInputs/SortBy";

function CabinTableOperations() {
  const [heading, setHeading] = useState("h2");
  const onMatchHeading = () => setHeading("h3");
  const onNotMatchHeading = () => setHeading("h2");

  useMediaQueryEffect(500, onMatchHeading, onNotMatchHeading);

  return (
    <Row $type={"vertical"} style={{ gap: "1rem", overflow: "unset" }}>
      <ContainerElement>
        <Heading as={heading}>Filter</Heading>

        <Filter filterFor="discount" collapseAt={600} defaultFilter="all">
          <Filter.FilterButton filter="all">All</Filter.FilterButton>
          <Filter.FilterButton filter="no-discount">
            Without discount
          </Filter.FilterButton>
          <Filter.FilterButton filter="with-discount">
            With discount
          </Filter.FilterButton>
        </Filter>
      </ContainerElement>

      <ContainerElement>
        <Heading as={heading} $txt="left">
          Sort
        </Heading>
        <SortBy
          sortFor="cabin-sort"
          type="white"
          getMinAt={600}
          activeLable="By name (A-Z)"
        >
          <SortBy.SelectOption value="name-asc">
            By name (A-Z)
          </SortBy.SelectOption>
          <SortBy.SelectOption value="name-desc">
            By name (Z-A)
          </SortBy.SelectOption>
          <SortBy.SelectOption value="regularPrice-asc">
            By price (high first)
          </SortBy.SelectOption>
          <SortBy.SelectOption value="regularPrice-desc">
            By price (low first)
          </SortBy.SelectOption>
          <SortBy.SelectOption value="maxCapacity-asc">
            By capacity (high first)
          </SortBy.SelectOption>
          <SortBy.SelectOption value="maxCapacity-desc">
            By capacity (low first)
          </SortBy.SelectOption>
        </SortBy>
      </ContainerElement>
    </Row>
  );
}

export default CabinTableOperations;
