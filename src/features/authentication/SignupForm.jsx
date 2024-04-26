import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

import Button from "../../ui/buttons/Button";
import FormRow from "../../ui/form/FormRow";
import Input from "../../ui/form/Input";
import Form from "../../ui/form/Form";
import FormRowButtons from "../../ui/form/FormRowButtons";

// Email regex: /\S+@\S+\.\S+/
// password regex: /(\W+\d+\w*|\d+\W+\w*|\W+\w*\d+|\d+\w*\W+|\w*\W+\d+|\w*\d+\W+)/

function SignupForm() {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();
  const { signup, isLoading } = useSignup();

  function onSubmit({ fullName, email, password }) {
    fullName = fullName.trim();
    signup(
      { fullName, email, password },
      {
        onSettled: reset,
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Full name"
        error={errors?.fullName?.message}
        withError={true}
      >
        <Input
          $full={true}
          disabled={isLoading}
          type="text"
          id="fullName"
          {...register("fullName", {
            required: "This feild is required",
            validate: (curValue) => {
              if (curValue.length > 20)
                return "Full name length should be less or equal 20 characters";
              if (curValue.trim().split(" ").length > 2)
                return "Full name should contain one space";
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Email address"
        error={errors?.email?.message}
        withError={true}
      >
        <Input
          $full={true}
          disabled={isLoading}
          type="email"
          id="email"
          {...register("email", {
            required: "This feild is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters, contains special chars & numbers)"
        error={errors?.password?.message}
        withError={true}
      >
        <Input
          $full={true}
          disabled={isLoading}
          type="password"
          id="password"
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
        withError={true}
        error={errors?.passwordConfirm?.message}
      >
        <Input
          $full={true}
          disabled={isLoading}
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "This feild is required",
            validate: (value) =>
              value === getValues().password || "Password isn't matched",
          })}
        />
      </FormRow>

      <FormRowButtons>
        <Button
          onClick={reset}
          $variation="secondary"
          type="reset"
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRowButtons>
    </Form>
  );
}

export default SignupForm;
