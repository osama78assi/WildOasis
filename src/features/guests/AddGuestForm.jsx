import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddGuest } from "./useAddGuest";

import Button from "../../ui/buttons/Button";
import Form from "../../ui/form/Form";
import FormRow from "../../ui/form/FormRow";
import FormRowButtons from "../../ui/form/FormRowButtons";
import Input from "../../ui/form/Input";
import Countries from "./Countries";

function AddGuestForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [country, setCountry] = useState("");
  const [countryErr, setCountryErr] = useState("");
  const { addGuest, isLoading } = useAddGuest();

  function onSubmit({ fullName, email, nationalID }) {
    if (!country) {
      setCountryErr("This field is required");
      return;
    }
    const [countryName, countryFlag] = country.split(",");
    // prepare the data
    addGuest(
      {
        fullName,
        email,
        nationalID,
        nationality: countryName,
        countryFlag: `https://flagcdn.com/${countryFlag
          .trim()
          .toLocaleLowerCase()}.svg`,
      },
      {
        onSuccess: reSet,
      }
    );
  }

  function reSet() {
    // reset the error and the value
    setCountry("");
    setCountryErr("");
    reset();
  }

  function getCountry(val) {
    // reset the error and set the value
    setCountry(val);
    setCountryErr("");
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, function onError() {
        if (!country) {
          setCountryErr("This field is required");
        } else setCountryErr("");
      })}
      style={{ overflow: "visible" }}
    >
      <FormRow
        label="Full name"
        withError={true}
        error={errors?.fullName?.message}
      >
        <Input
          $full={true}
          id="fullName"
          type="text"
          {...register("fullName", {
            required: "This feild is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Email address"
        withError={true}
        error={errors?.email?.message}
      >
        <Input
          $full={true}
          id="email"
          type="text"
          {...register("email", {
            required: "This feild is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="National ID"
        withError={true}
        error={errors?.nationalID?.message}
      >
        <Input
          $full={true}
          id="nationalID"
          type="text"
          {...register("nationalID", {
            required: "This feild is required",
          })}
        />
      </FormRow>

      <Countries
        setter={getCountry}
        country={country ? country.split(",")[0] : ""}
        value={country}
        errMsg={countryErr}
      />

      <FormRowButtons>
        <Button
          $variation="secondary"
          $size="medium"
          type="reset"
          onClick={(e) => {
            e.preventDefault();
            reSet();
          }}
          disabled={isLoading}
        >
          Reset
        </Button>
        <Button $variations="primary" $size="medium" disabled={isLoading}>
          Submit
        </Button>
      </FormRowButtons>
    </Form>
  );
}

export default AddGuestForm;
