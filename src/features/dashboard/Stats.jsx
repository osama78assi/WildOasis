import { formatCurrency } from "../../utils/helpers";

import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import LoadingDiv from "../../ui/loading/LoadingDiv";
import Stat from "./Stat";

function Stats({ bookings, confirmedStays, numDays, cabinsCount, isLoading }) {
  if (isLoading)
    return (
      <>
        <LoadingDiv additionalStyle={{ height: "100px" }} />
        <LoadingDiv additionalStyle={{ height: "100px" }} />
        <LoadingDiv additionalStyle={{ height: "100px" }} />
        <LoadingDiv additionalStyle={{ height: "100px" }} />
      </>
    );

  const numOfBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkins = confirmedStays.length;

  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinsCount);

  return (
    <>
      <Stat
        title="bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numOfBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={`${Math.round(occupation * 100)}%`}
      />
    </>
  );
}

export default Stats;
