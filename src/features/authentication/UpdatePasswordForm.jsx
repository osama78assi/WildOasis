import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";

import Button from "../../ui/buttons/Button";
import Form from "../../ui/form/Form";
import FormRow from "../../ui/form/FormRow";
import FormRowButtons from "../../ui/form/FormRowButtons";
import Input from "../../ui/form/Input";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="New password (min 8 characters, contains special chars & numbers)"
        error={errors?.password?.message}
        withError={true}
      >
        <Input
          $full={true}
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This feild is required",
            minLength: {
              value: 8,
              message: "Password must be a miniumum of 8 characters",
            },
            pattern: {
              value:
                /(\W+\d+\w*|\d+\W+\w*|\W+\w*\d+|\d+\w*\W+|\w*\W+\d+|\w*\d+\W+)/,
              message: "password should contain special character and numbers",
            },
            validate: (pass) => {
              if (pass.includes(" ")) {
                return "Password shouldn't contain a space";
              }
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
        withError={true}
      >
        <Input
          $full={true}
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>
      <FormRowButtons>
        <Button onClick={reset} type="reset" $variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update password</Button>
      </FormRowButtons>
    </Form>
  );
}

export default UpdatePasswordForm;
