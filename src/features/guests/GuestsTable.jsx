import { RESULTS_GUESTS_FOR_PAGE } from "../../utils/constants";

import { useRefetchData } from "../../hooks/useRefetchData";
import { useGuests } from "./useGuests";

import ErrorMsg from "../../ui/ErrorMsg";
import Pagination from "../../ui/Pagination";
import Table from "../../ui/Table";
import Refetch from "../../ui/loading/Refetch";
import Spinner from "../../ui/loading/Spinner";
import GuestsRow from "./GuestsRow";

function GuestsTable() {
  const { guests, isLoading, count, error, page } = useGuests();
  const { isFetching, reFetch } = useRefetchData();

  if (isLoading) return <Spinner />;

  if (error) return <ErrorMsg faildFor="Guests" queryKey={["guests", page]} />;

  return (
    <Table columns="repeat(4, 1fr) auto">
      <Table.Header>
        <div>Full name</div>
        <div>Email</div>
        <div>national ID</div>
        <div>nationality</div>
        <Refetch
          isFetching={isFetching}
          onClick={reFetch}
          disabled={isFetching}
        />
      </Table.Header>
      <Table.Body
        data={guests}
        render={(guest) => <GuestsRow key={guest.id} guest={guest} />}
      />

      <Table.Footer>
        <Pagination count={count} pageSize={RESULTS_GUESTS_FOR_PAGE} />
      </Table.Footer>
    </Table>
  );
}

export default GuestsTable;
