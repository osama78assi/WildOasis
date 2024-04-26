import { useEffect, useState } from "react";
import { useDarkMode } from "../../contexts/DarkMode";
import { usePieData } from "./useCustomMedia";

import styled, { css } from "styled-components";
import { genListOfRandId } from "../../utils/helpers";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Heading from "../../ui/Heading";
import LoadingDiv from "../../ui/loading/LoadingDiv";
import Empty from "./Empty";

const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
  ${(props) =>
    props.$sm
      ? css`
          & svg {
            height: 60% !important;
          }
        `
      : props.$md
      ? css`
          & svg {
            height: 80% !important;
          }
        `
      : ""}
`;

// Make sure the gap === icon size
const Ul = styled.ul`
  position: relative;
  display: flex;
  bottom: 40px;
  flex-wrap: wrap;
  top: -10%;
  gap: calc(${(props) => (props.$gap ? `${props.$gap} / 2` : "4.5px")})
    calc(${(props) => (props.$gap ? `${props.$gap} + 8px` : "15px")});
`;
const Li = styled.li`
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "1rem")};
  color: ${(props) => props.$txtColor};
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: ${(props) => (props.$iconSize ? props.$iconSize : "7px")};
    height: ${(props) => (props.$iconSize ? props.$iconSize : "7px")};
    border-radius: ${(props) =>
      props.$circle ? "50%" : props.$iconRadius ? props.$iconRadius : 0};
    left: ${(props) =>
      props.$iconSize
        ? `calc(${-props.$iconSize.replace(/\D/g, "")}${props.$iconSize.replace(
            /(\d| )/g,
            ""
          )} - 2px)`
        : "-9px"};
    top: 50%;
    transform: translateY(-50%);
    background-color: ${(props) =>
      props.$iconColor ? props.$iconColor : props.$txtColor};
  }
`;

const startDataLight = [
  {
    duration: "1 night",
    value: 0,
    color: "#ef4444",
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#f97316",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#eab308",
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#84cc16",
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#22c55e",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#14b8a6",
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#3b82f6",
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#a855f7",
  },
];

const startDataDark = [
  {
    duration: "1 night",
    value: 0,
    color: "#b91c1c",
  },
  {
    duration: "2 nights",
    value: 0,
    color: "#c2410c",
  },
  {
    duration: "3 nights",
    value: 0,
    color: "#a16207",
  },
  {
    duration: "4-5 nights",
    value: 0,
    color: "#4d7c0f",
  },
  {
    duration: "6-7 nights",
    value: 0,
    color: "#15803d",
  },
  {
    duration: "8-14 nights",
    value: 0,
    color: "#0f766e",
  },
  {
    duration: "15-21 nights",
    value: 0,
    color: "#1d4ed8",
  },
  {
    duration: "21+ nights",
    value: 0,
    color: "#7e22ce",
  },
];

function prepareData(startData, data) {
  if (!data) return startData;
  const staysData = {}; // numNights: quantity
  let copiedStartData = JSON.parse(JSON.stringify(startData)); //Deep copy
  data.forEach((visitor) => {
    if (!staysData[visitor.numNights]) {
      staysData[visitor.numNights] = 1;
    } else {
      staysData[visitor.numNights] += 1;
    }
  });

  copiedStartData = copiedStartData
    .map((log) => {
      const flag = log.duration.split(" ")[0].split("-");
      if (flag.length === 1 && !flag[0].includes("+")) {
        if (staysData[+flag[0]] !== undefined) log.value += staysData[+flag[0]];
      } else if (flag.length === 2) {
        // if it's a range then get all data that it's in the range
        Object.keys(staysData).map((numNights) => {
          if (numNights >= +flag[0] && numNights <= +flag[1]) {
            log.value += staysData[numNights];
          }
        });
      } else if (flag.length === 1 && flag[0].includes("+")) {
        Object.keys(staysData).map((numNights) => {
          if (numNights >= +flag[0].match(/\d*/)) {
            log.value += staysData[numNights];
          }
        });
      }
      if (log.value) return log;
    })
    .filter((val) => val !== undefined);

  return copiedStartData;
}

function Content(props) {
  const { payload } = props;
  const [ids, setIds] = useState([]);
  useEffect(() => {
    // Get stable key across re-renders (prevent wasted re-renders)
    // unstable keys => re-render the component
    setIds(genListOfRandId(payload.length));
  }, [payload.length]);

  return (
    <Ul
      $gap={
        typeof props.iconSize === "number"
          ? `${props.iconSize}px`
          : props.iconSize
      }
    >
      {ids.length &&
        payload.map((entry, index) => (
          <Li
            $txtColor={entry.color}
            key={ids[index]}
            $iconSize={
              typeof props.iconSize === "number"
                ? `${props.iconSize}px`
                : props.iconSize
            }
            $iconRadius={props.iconRadius}
            $circle={props.circle}
            $fontSize={props.fontSize}
          >
            {entry.value}
          </Li>
        ))}
    </Ul>
  );
}

function DurationChart({ confirmedStays, isLoading }) {
  const options = usePieData();
  const { isDarkMode } = useDarkMode();
  const data = prepareData(
    isDarkMode ? startDataDark : startDataLight,
    confirmedStays
  );

  if (isLoading) {
    return (
      <LoadingDiv
        additionalStyle={{ height: "100%", gridColumn: "3 / span 2" }}
      />
    );
  }
  if (!confirmedStays.length) {
    return (
      <ChartBox>
        <Empty>No data to visualize</Empty>
      </ChartBox>
    );
  }
  return (
    <ChartBox $sm={options.svgSm} $md={options.svgMd}>
      <Heading as={options.heading}>Stay duration summary</Heading>

      <ResponsiveContainer width="100%">
        <PieChart>
          <Pie
            data={data}
            nameKey="duration"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.duration}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            content={Content}
            circle={true}
            iconSize="7px"
            fontSize="1.4rem"
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default DurationChart;
