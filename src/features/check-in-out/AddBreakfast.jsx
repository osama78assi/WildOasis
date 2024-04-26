import { useSettings } from "../settings/useSettings";

import toast from "react-hot-toast";
import { formatCurrency } from "../../utils/helpers";

import ErrorMsg from "../../ui/ErrorMsg";
import Checkbox from "../../ui/customInputs/Checkbox";
import LoadingDiv from "../../ui/loading/LoadingDiv";

function AddBreakfast({
  addBreakfast,
  setAddBreakfast,
  setPrice,
  onChange,
  numNights,
  numGuests,
}) {
  const { settings, isPending: isFetchingSettings, error } = useSettings();

  if (isFetchingSettings)
    return <LoadingDiv duration={2000} additionalStyle={"height: 4.5rem;"} />;

  if (error) {
    toast.error("Something went wrong while loading breakfast price");
    return <ErrorMsg faildFor="breakfast price" queryKey={["settings"]} />;
  }

  const { breakfastPrice } = settings;
  const price = breakfastPrice * numGuests * numNights;

  return (
    <Checkbox
      checked={addBreakfast}
      onChange={() => {
        setAddBreakfast((add) => !add);
        onChange?.();
        setPrice?.(price);
      }}
    >
      Want to add breakfast for {formatCurrency(price)} ?
    </Checkbox>
  );
}

export default AddBreakfast;
