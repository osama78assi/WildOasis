import { useState } from "react";
import { useUpdateUser } from "./useUpdateUser";
import { useUser } from "./useUser";

import Button from "../../ui/buttons/Button";
import FileInput from "../../ui/form/FileInput";
import Form from "../../ui/form/Form";
import FormRow from "../../ui/form/FormRow";
import FormRowButtons from "../../ui/form/FormRowButtons";
import Input from "../../ui/form/Input";

function UpdateUserDataForm() {
  // We don't need the loading state, and can immediately use the user data, because we know that it has already been loaded at this point
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [fullNameErr, setFullNameErr] = useState("");
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (fullName === currentFullName && avatar === null) {
      setFullNameErr("Please change the full name at least");
      return;
    }
    if (fullNameErr === "") {
      updateUser({ fullName, avatar });
    }
  }

  function validateName(e) {
    if (!e.target.value.length) {
      setFullNameErr("Full name can't be empty");
    } else if (e.target.value === currentFullName && avatar === null) {
      setFullNameErr("Please change the full name at least");
    } else if (e.target.value.trim().split(" ").length > 2) {
      setFullNameErr("Full name should contain one space");
    } else if (e.target.value.trim().length > 20) {
      setFullNameErr("Full name should be less or equle 20 characters");
    } else {
      setFullNameErr("");
    }
    setFullName(e.target.value);
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name" withError={true} error={fullNameErr}>
        <Input
          $full={true}
          type="text"
          value={fullName}
          onChange={validateName}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRowButtons>
        <Button
          type="reset"
          $variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRowButtons>
    </Form>
  );
}

export default UpdateUserDataForm;
