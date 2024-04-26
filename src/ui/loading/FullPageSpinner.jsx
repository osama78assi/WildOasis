import styled from "styled-components";
import Spinner from "./Spinner";

const Div = styled.div`
  height: 100dvh;
  backgorund-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FullPageSpinner() {
  return (
    <Div>
      <Spinner />
    </Div>
  );
}

export default FullPageSpinner;
