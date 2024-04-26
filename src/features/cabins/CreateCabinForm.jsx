import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin";
import { useUpdateCabin } from "./useUpdateCabin";

import Button from "../../ui/buttons/Button";
import FileInput from "../../ui/form/FileInput";
import Form from "../../ui/form/Form";
import FormRow from "../../ui/form/FormRow";
import Input from "../../ui/form/Input";
import Textarea from "../../ui/form/Textarea";
import FormRowButtons from "../../ui/form/FormRowButtons";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id, ...editValue } = cabinToEdit;
  // to know if the form for update or create
  const isEditSession = Boolean(id);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValue : {},
  });

  const { errors } = formState;
  // creating a new cabin
  const { isCreating, create } = useCreateCabin();
  // update an old cabin
  const { isUpdating, update } = useUpdateCabin();

  const isWorking = isUpdating || isCreating;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession) {
      update(
        { newCabinData: { ...data, image }, id },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      create(
        { newCabinData: { ...data, image }, copy: false },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    }
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      $type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow
        label="Cabin Name"
        error={errors?.name?.message}
        withError={true}
      >
        <Input
          $full={true}
          disabled={isWorking}
          type="text"
          id="name"
          {...register("name", {
            required: "This feild is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Maximum capacity"
        error={errors?.maxCapacity?.message}
        withError={true}
      >
        <Input
          $full={true}
          disabled={isWorking}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This feild is required",
            min: {
              value: 1,
              message: "Capacity Should Be At Least 1",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Regular price"
        error={errors?.regularPrice?.message}
        withError={true}
      >
        <Input
          $full={true}
          disabled={isWorking}
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            validate: (value) => {
              if (+value <= 0)
                return "Regular price should be bigger than zero";
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Discount"
        error={errors?.discount?.message}
        withError={true}
      >
        <Input
          $full={true}
          disabled={isWorking}
          type="number"
          id="discount"
          {...register("discount", {
            required: isEditSession ? false : "This feild is required",
            validate: (value) => {
              if (+value >= +getValues().regularPrice)
                return "Discount Should Be Less Than Regular Price";
              if (+value < 0) return "Discount shouldn't be negative";
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
        withError={true}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register("description", {
            required: "This feild is required",
          })}
        />
      </FormRow>

      <FormRow
        label="Cabin photo"
        error={errors?.image?.message}
        withError={cabinToEdit?.id ? false : true}
      >
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            ...(cabinToEdit?.id ? {} : { required: "This feild is required" }),
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRowButtons>
        <Button
          disabled={isWorking}
          $variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit cabin" : "Creata new cabin"}
        </Button>
      </FormRowButtons>
    </Form>
  );
}

export default CreateCabinForm;
