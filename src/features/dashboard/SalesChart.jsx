import { useState } from "react";
import { useDarkMode } from "../../contexts/DarkMode";
import { useMediaQueryEffect } from "../../hooks/useMediaQueryEffect";

import { eachDayOfInterval, format, subDays } from "date-fns";
import styled from "styled-components";
// import { getDayMonthFromStr } from "../../utils/helpers";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Heading from "../../ui/Heading";
import LoadingDiv from "../../ui/loading/LoadingDiv";
import DashboardBox from "./DashboardBox";
import Empty from "./Empty";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
  @media (max-width: 600px) {
    & {
      padding: 1rem;
    }
    & tspan {
      font-size: 1rem;
    }
  }
`;

function prepareData(bookings, numDays) {
  if (!bookings) return [];
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });
  // Creating the object to get data from it
  const dateBookings = {};
  bookings.forEach((booking) => {
    // creating the key depending on the date

    // const date = getDayMonthFromStr(booking.created_at);

    // Same as above
    const date = format(booking.created_at, "MMM dd");

    // If the key already exist then add the total price for it and the extra price
    if (dateBookings[date]) {
      dateBookings[date].totalPrice += isNaN(bookings.totalPrice)
        ? 0
        : bookings.totalPrice;
      dateBookings[date].extrasPrice += isNaN(bookings.extrasPrice)
        ? 0
        : bookings.extrasPrice;
    } else {
      // Deep copy
      let bookingEdited = JSON.parse(JSON.stringify(booking));
      isNaN(bookingEdited.totalPrice) ? (bookingEdited.totalPrice = 0) : "";
      isNaN(bookingEdited.extrasPrice) ? (bookingEdited.extrasPrice = 0) : "";
      dateBookings[date] = bookingEdited;
    }
  });

  // Data that we want to the chart
  const data = allDates.map((date) => {
    date = format(date, "MMM dd");
    const price = dateBookings?.[date]?.totalPrice;
    const sales = dateBookings?.[date]?.extrasPrice;
    return {
      label: date,
      totalSales: price === undefined ? 0 : price,
      extrasSales: sales === undefined ? 0 : sales,
    };
  });

  return [data, allDates];
}

function SalesChart({ bookings, numDays, isLoading }) {
  const { isDarkMode } = useDarkMode();
  const [tooltipFont, setTooltipFont] = useState("1.5rem");
  const [heading, setHeading] = useState("h2");
  const [columns, setColumns] = useState(5);
  const onMatch = () => {
    setTooltipFont("1rem");
    setHeading("h3");
  };
  const onNotMatch = () => {
    setTooltipFont("1.5rem");
    setHeading("h2");
  };

  useMediaQueryEffect(600, onMatch, onNotMatch);

  const onMatchColumns = () => setColumns(3);
  const onNotMatchColumns = () => setColumns(5);

  useMediaQueryEffect(1160, onMatchColumns, onNotMatchColumns);

  // Data that we want to the chart
  const [data, allDates] = prepareData(bookings, numDays);

  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  if (isLoading) {
    return (
      <LoadingDiv
        additionalStyle={{
          height: "200px",
          gridColumnStart: 1,
          gridColumnEnd: columns,
        }}
      />
    );
  }

  if (!bookings.length) {
    return (
      <StyledSalesChart>
        <Empty>No data to visualize</Empty>
      </StyledSalesChart>
    );
  }

  return (
    <StyledSalesChart>
      <Heading as={heading}>
        Sales from {format(allDates.at(0), "MMM dd yyyy")} &mdash;{" "}
        {format(allDates.at(-1), "MMM dd yyyy")}
      </Heading>

      <ResponsiveContainer height={300} width={"100%"}>
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray="4" />
          <Tooltip
            contentStyle={{
              backgroundColor: colors.background,
              fontSize: tooltipFont,
            }}
          />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="Total sales"
            unit="$"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            name="extrasSales sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
}

export default SalesChart;
