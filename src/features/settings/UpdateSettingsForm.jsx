import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";

import toast from "react-hot-toast";

import ErrorMsg from "../../ui/ErrorMsg";
import Form from "../../ui/form/Form";
import FormRow from "../../ui/form/FormRow";
import Input from "../../ui/form/Input";
import Spinner from "../../ui/loading/Spinner";

function UpdateSettingsForm() {
  const { isPending, settings, error } = useSettings();
  const { isEditing, updateSettings } = useUpdateSettings();

  if (isPending) return <Spinner />;

  if (error) {
    toast.error("Settings couldn't be loaded", { duration: 5000 });
    return <ErrorMsg faildFor="settings" queryKey={["settings"]} />;
  }

  function handelUpdate(e, fieldName) {
    const { value } = e.target;
    if (!value) return;
    updateSettings({ [fieldName]: value });
  }

  const {
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice,
  } = settings;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isEditing}
          onBlur={(e) => handelUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isEditing}
          onBlur={(e) => handelUpdate(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isEditing}
          onBlur={(e) => handelUpdate(e, "maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isEditing}
          onBlur={(e) => handelUpdate(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
