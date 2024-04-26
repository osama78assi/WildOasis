import { useSearchParams } from "react-router-dom";
import { useRefetchData } from "../../hooks/useRefetchData";
import { useCabins } from "./useCabins";

import toast from "react-hot-toast";

import Empty from "../../ui/Empty";
import ErrorMsg from "../../ui/ErrorMsg";
import Table from "../../ui/Table";
import Refetch from "../../ui/loading/Refetch";
import Spinner from "../../ui/loading/Spinner";
import CabinRow from "./CabinRow";

function filterList(list, flag) {
  if (flag == "all") return list;
  else if (flag == "with-discount")
    return list.filter((cabin) => cabin.discount > 0);
  else if (flag == "no-discount")
    return list.filter((cabin) => cabin.discount == 0);
  return list;
}

function sortList(list, flag, sortType) {
  if (flag === "name" && sortType == 1)
    return list.sort((a, b) => b.name.localeCompare(a.name));
  else if (flag === "name" && sortType == -1)
    return list.sort((a, b) => a.name.localeCompare(b.name));
  else if (flag) return list.sort((a, b) => (b[flag] - a[flag]) * sortType);
  return list;
}

function CabinTable() {
  const { isFetching, cabins, error } = useCabins();
  const [searchParams] = useSearchParams();
  const { isFetching: isReftching, reFetch } = useRefetchData();

  if (isFetching) return <Spinner />;

  if (error) {
    toast.error("Cabins coudln't be loaded", { duration: 5000 });
    return <ErrorMsg faildFor="cabins" queryKey={["cabin"]}/>;
  }

  if (!cabins.length) return <Empty resource="Cabins" />;

  // filter
  const filter = searchParams.get("discount") || "all";
  let filteredCabins = filterList(cabins, filter);
  // sort
  const sortFlag = searchParams.get("cabin-sort")?.split("-") || [];
  const sortBy = sortFlag[0] || "";
  const typeOfSort = sortFlag[1] == "asc" || sortFlag[1] == "" ? 1 : -1;

  filteredCabins = sortList(filteredCabins, sortBy, typeOfSort);

  return (
    <Table
      columns="2.5fr 1fr 1.1fr 1fr 1fr 1fr"
      smColumns="2fr 1fr 1.1fr 1fr 1fr 1fr"
    >
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <Refetch
          isFetching={isReftching}
          disabled={isReftching}
          onClick={reFetch}
        />
      </Table.Header>
      <Table.Body
        // data={cabins}
        data={filteredCabins}
        render={(cabin, index, arr) => (
          <CabinRow
            cabin={cabin}
            key={cabin.id}
            position={
              arr.length == 1
                ? "center-left"
                : index == arr.length - 1
                ? "top-left"
                : "bottom-left"
            }
          />
        )}
      />
    </Table>
  );
}

export default CabinTable;
