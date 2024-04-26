import { memo, useEffect, useState } from "react";
import { useCabins } from "./useCabins";

import styled, { css } from "styled-components";
import { formatCurrency } from "../../utils/helpers";

import { CiDiscount1 } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import Budget from "../../ui/Budget";
import Span from "../../ui/Span";
import TextOverflow from "../../ui/TextOverflow";
import LoadingDiv from "../../ui/loading/LoadingDiv";
import Img from "./Img";

const Container = styled.div`
  display: flex;
  padding: 1.2rem 0 2.4rem;
  border-bottom: 1px solid var(--color-grey-200);
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 700px) {
    gap: 2rem;
  }
`;

const Child = styled.div`
  flex-basis: ${(props) => (props.$width ? props.$width : "50%")};
  width: ${(props) => (props.$width ? props.$width : "50%")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.$dir ? props.$dir : "row")};
  ${(props) =>
    props.$gap
      ? css`
          gap: ${props.$gap};
        `
      : ""}
  @media(max-width: 700px) {
    flex-basis: 100%;
    width: 100%;
  }
  ${(props) =>
    props.$hasImg &&
    css`
      padding: 1.5rem 2rem 2rem;
      @media (max-width: 800px) {
        padding: 1rem;
      }
    `}
  ${(props) =>
    props.$additionalStyle &&
    css`
      ${props.$additionalStyle}
    `}
`;

function LoadingImage({ imgUrl, alt }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl("");
    async function loadImgAsync() {
      const res = await fetch(imgUrl, { method: "GET" });
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setUrl(url);
    }
    loadImgAsync();
  }, [imgUrl]);

  return url ? (
    <Img
      src={url}
      alt={alt}
      $additionalStyle="border-radius: var(--border-radius-lg);"
    />
  ) : (
    <LoadingDiv additionalStyle={{ height: "250px", width: "100%" }} />
  );
}

// expensive
const CabinDetails = memo(function CabinDetails({ id, setDetails }) {
  const { cabins, isFetching: isLoading } = useCabins();

  let fontSize = "1.5rem";

  if (!isLoading) {
    const { regularPrice, maxCapacity, discount, name, image, description } =
      cabins.filter((cabin) => cabin.id === id)[0];
    setDetails.current = { regularPrice, discount };
    return (
      <Container>
        <Child $dir="column">
          <Span $additionalStyle={{ fontSize }}>Cabin {name}&apos;s image</Span>
          <Child $width="100%" $hasImg={true}>
            <LoadingImage imgUrl={image} alt={`cabin ${name}'s image`} />
          </Child>
        </Child>

        <Child $dir="column" $gap="1rem">
          <Budget $bc="var(--color-green-100)">
            <HiOutlineCurrencyDollar
              style={{ color: "var(--color-green-700)", fontSize: "2rem" }}
            />
            <Span
              $additionalStyle={{
                fontSize,
                color: "var(--color-green-700)",
              }}
            >
              Price: {formatCurrency(regularPrice)}
            </Span>
          </Budget>

          <Budget $bc="var(--color-blue-100)">
            <FaUserFriends
              style={{ color: "var(--color-blue-700)", fontSize: "2rem" }}
            />
            <Span
              $additionalStyle={{
                fontSize,
                color: "var(--color-blue-700)",
              }}
            >
              Fit up to: {maxCapacity} Guests
            </Span>
          </Budget>

          <Budget $bc="var(--color-indigo-100)">
            <CiDiscount1
              style={{ color: "var(--color-indigo-700)", fontSize: "2rem" }}
            />
            <Span
              $additionalStyle={{
                textDecoration: `${discount == 0 ? "line-through" : ""}`,
                fontSize,
                color: "var(--color-indigo-700)",
              }}
            >
              Discount: {discount}$
            </Span>
          </Budget>
        </Child>

        <Child $width="100%" $dir="column">
          <TextOverflow collapseAt={21}>{description}</TextOverflow>
        </Child>
      </Container>
    );
  }

  return null;
});

export default CabinDetails;
