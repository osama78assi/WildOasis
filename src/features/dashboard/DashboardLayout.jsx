import { useCabins } from "../cabins/useCabins";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";

import styled from "styled-components";

import ErrorMsg from "../../ui/ErrorMsg";
import TodayActivity from "../check-in-out/TodayActivity";
import DurationChart from "./DurationChart";
import SalesChart from "./SalesChart";
import Stats from "./Stats";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 45rem auto;
  gap: 2.4rem;
  padding: 1rem 0rem;
  @media (max-width: 1160px) {
    & {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto 34rem auto 34rem auto;
      > {
        :nth-child(1) {
          order: 1;
        }
        :nth-child(2) {
          order: 2;
        }
        :nth-child(3) {
          order: 4;
        }
        :nth-child(4) {
          order: 5;
        }
        :nth-child(5) {
          grid-column-start: 1;
          grid-column-end: 3;
          order: 3;
        }
        :nth-child(6) {
          grid-column-start: 1;
          grid-column-end: 3;
          order: 6;
        }
        :nth-child(7) {
          order: 7;
        }
      }
    }
  }
  @media (max-width: 700px) {
    grid-template-rows: auto auto 34rem auto auto 39rem auto;
    & > {
      :nth-child(1),
      :nth-child(2),
      :nth-child(3),
      :nth-child(4) {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
  }
`;

function DashboardLayout() {
  const {
    bookings,
    isLoading: isLoadingBookings,
    error: bookingError,
  } = useRecentBookings();
  const {
    confirmedStays,
    isLoading: isLoadingStays,
    numDays,
    error: staysError,
  } = useRecentStays();
  const {
    cabins,
    isFetching: isLoadingCabins,
    error: cabinsError,
  } = useCabins();

  if (bookingError || staysError || cabinsError)
    return <ErrorMsg faildFor="dashboard data" />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinsCount={cabins?.length}
        isLoading={isLoadingCabins || isLoadingStays || isLoadingBookings}
      />
      <TodayActivity />
      <DurationChart
        confirmedStays={confirmedStays}
        isLoading={isLoadingStays}
      />
      <SalesChart
        bookings={bookings}
        numDays={numDays}
        isLoading={isLoadingBookings}
      />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
