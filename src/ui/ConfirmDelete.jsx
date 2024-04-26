import styled from "styled-components";

import Button from "./buttons/Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({
  resourceName,
  onConfirm,
  disabled,
  moreDetails,
  onCloseModal,
}) {
  return (
    <StyledConfirmDelete>
      <Heading as="h2">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undoed.{" "}
        {moreDetails && (
          <span style={{ color: "var(--color-warning)" }}>
            &quot;{moreDetails}&quot;
          </span>
        )}
      </p>

      <div>
        <Button
          $variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button $variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
