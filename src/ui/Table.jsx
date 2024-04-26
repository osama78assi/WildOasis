import { createContext, useContext } from "react";

import styled, { css } from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;

  @media (max-width: ${(props) => props.$fixWidthAt || 700}px) {
    & {
      width: 725px;
      margin: auto;
    }
  }
  ${(props) =>
    props.$additionStyles
      ? css`
          ${props.$additionStyles}
        `
      : ""}
`;

const CommonRow = styled.div`
  display: grid;
  ${(props) =>
    css`
      grid-template-columns: ${props.$columns};
    `}

  @media (max-width: 600px) {
    & {
      ${(props) =>
        css`
          grid-template-columns: ${props.$smColumns};
        `}
    }
  }
  column-gap: 2.4rem;
  align-items: center;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  ${(props) =>
    props.$additionStyles
      ? css`
          ${props.$additionStyles}
        `
      : ""}
`;

const StyledRow = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
  ${(props) =>
    props.$additionStyles
      ? css`
          ${props.$additionStyles}
        `
      : ""}
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
  width: 100%;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TabelContext = createContext();

function Table({ columns, smColumns, additionStyles, fixWidthAt, children }) {
  return (
    <TabelContext.Provider value={{ columns, smColumns }}>
      <StyledTable
        role="tabel"
        $additionStyles={additionStyles}
        $fixWidthAt={fixWidthAt}
      >
        {children}
      </StyledTable>
    </TabelContext.Provider>
  );
}

function Header({ additionStyles, children }) {
  const { columns, smColumns } = useContext(TabelContext);
  return (
    <StyledHeader
      $columns={columns}
      $smColumns={smColumns}
      role="row"
      $additionStyles={additionStyles}
      as={"header"}
    >
      {children}
    </StyledHeader>
  );
}

function Row({ additionStyles, children }) {
  const { columns, smColumns } = useContext(TabelContext);
  return (
    <StyledRow
      role="row"
      $columns={columns}
      $smColumns={smColumns}
      $additionStyles={additionStyles}
    >
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No Data To Show In The Moment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
