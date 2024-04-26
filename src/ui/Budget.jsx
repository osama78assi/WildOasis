import styled from "styled-components";

const Budget = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: var(--border-radius-sm);
  background-color: ${(props) => props.$bc};
`;

export default Budget;
