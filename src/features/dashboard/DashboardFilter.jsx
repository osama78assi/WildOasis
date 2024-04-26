import Filter from "../../ui/customInputs/Filter";

function DashboardFilter() {
  return (
    <Filter filterFor="last" defaultFilter={"7"}>
      <Filter.FilterButton filter={"7"}>Last 7 days</Filter.FilterButton>
      <Filter.FilterButton filter={"30"}>Last 30 days</Filter.FilterButton>
      <Filter.FilterButton filter={"90"}>Last 90 days</Filter.FilterButton>
    </Filter>
  );
}

export default DashboardFilter;
