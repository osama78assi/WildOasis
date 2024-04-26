import { useSearchParams } from "react-router-dom";

import styled, { css } from "styled-components";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
  ${(props) =>
    props.$singlePage &&
    css`
      width: 100%;
      text-align: center;
    `}
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? " var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Pagination({ count, pageSize }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : +searchParams.get("page");
  const pageCount = Math.ceil(count / pageSize);

  function nextPage() {
    if (currentPage === pageCount) return;
    const next = currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    if (currentPage == 1) return;
    const prev = currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  return (
    <StyledPagination>
      {pageCount > 1 && (
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <HiChevronLeft />
          <span>Previous</span>
        </PaginationButton>
      )}

      <P $singlePage={pageCount === 1}>
        Showing <span>{(currentPage - 1) * pageSize + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * pageSize}
        </span>{" "}
        of <span>{count} </span> results
      </P>

      {pageCount > 1 && (
        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <HiChevronRight />
          <span>Next</span>
        </PaginationButton>
      )}
    </StyledPagination>
  );
}

export default Pagination;
