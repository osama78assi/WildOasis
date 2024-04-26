import { useCallback, useReducer, useRef, useState } from "react";
import { useSettings } from "../settings/useSettings";
import { useAddBooking } from "./useAddBooking";

import toast from "react-hot-toast";
import {
  differenceBetween,
  formatCurrency,
  getRandId,
  isCorrectDate,
  isPast,
} from "../../utils/helpers";

import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import Budget from "../../ui/Budget";
import ErrorMsg from "../../ui/ErrorMsg";
import Span from "../../ui/Span";
import Button from "../../ui/buttons/Button";
import Checkbox from "../../ui/customInputs/Checkbox";
import DatePicker from "../../ui/customInputs/DatePicker";
import Form from "../../ui/form/Form";
import FormRow from "../../ui/form/FormRow";
import FormRowButtons from "../../ui/form/FormRowButtons";
import Input from "../../ui/form/Input";
import Textarea from "../../ui/form/Textarea";
import LoadingDiv from "../../ui/loading/LoadingDiv";
import CabinDetails from "../cabins/CabinDetails";
import CabinsSelect from "../cabins/CabinsSelect";
import GuestSelect from "../guests/GuestSelect";
import SelectStatus from "./SelectStatus";

const additonalRowStyle = `
  gap: 1.4rem;
  @media(max-width: 600px) {
    & {
      grid-template-rows: none;
      gap: 0.5rem;
    }
  }
`;

const paidStyle = `${additonalRowStyle} grid-template-columns: 1fr;`;

const initialState = {
  guestId: "",
  guestDetails: "",
  cabinName: "",
  cabinId: "",
  numGuests: 1,
  startDate: new Date(),
  endDate: new Date(),
  withBreakfast: false,
  isPaid: false,
  observations: "",
  status: "",
  isThereErr: false,
  errors: {
    errGuestId: "",
    errCabinId: "",
    errNumGuests: "",
    errStartDate: "",
    errEndDate: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "isSubmiting":
      return { ...state, isSubmiting: action.payload };
    case "guest":
      return {
        ...state,
        guestId: action.payload.guestId,
        guestDetails: action.payload.guestDetails,
      };
    case "cabin":
      return {
        ...state,
        cabinName: action.payload.cabinName,
        cabinId: action.payload.cabinId,
      };
    case "numGuests":
      return { ...state, numGuests: action.payload };
    case "startDate":
      return { ...state, startDate: action.payload };
    case "endDate":
      return { ...state, endDate: action.payload };
    case "withBreakfast":
      return { ...state, withBreakfast: action.payload };
    case "isPaid":
      return { ...state, isPaid: action.payload };
    case "observations":
      return { ...state, observations: action.payload };
    case "status":
      return { ...state, status: action.payload };
    case "reset":
      return { ...initialState };
    case "setErrors":
      return { ...state, errors: { ...state.errors, ...action.payload } };
    default:
      return state;
  }
}

function AddSingleBooking() {
  const cabinRef = useRef(null);
  const guestRef = useRef(null);

  const [
    {
      guestId,
      guestDetails,
      cabinName,
      cabinId,
      numGuests,
      startDate,
      endDate,
      withBreakfast,
      isPaid,
      observations,
      status,
      errors: {
        errGuestId,
        errCabinId,
        errNumGuests,
        errStartDate,
        errEndDate,
      },
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const cabinDetails = useRef(""); // there is no need to re-render when add this info

  const guestName = guestDetails.split(",")[0].split(":")[1];
  const [startDateKey, setStartDateKey] = useState(getRandId()); // for reset (unstabel key)
  const [endDateKey, setEndDateKey] = useState(getRandId()); // for reset (unstabel key)

  const {
    settings: {
      breakfastPrice,
      maxGuestsPerBooking,
      minBookingLength,
      maxBookingLength,
    } = {},
    isPending: isLoadingSettings,
    error: settingsError,
  } = useSettings();

  const { addBooking, isLoading: isAdding } = useAddBooking();

  // the two component is expensive so I used memo on theme
  // but they get a function on props and function isn't the same
  // across re-renders
  const setGuest = useCallback(function setGuest(id, details) {
    if (id === guestId && details === guestDetails) return;
    dispatch({
      type: "guest",
      payload: { guestId: id, guestDetails: details },
    });
  }, []);

  // for the behavoir of comparing object in js (by reference)
  // I must check if the value isn't the same before cause an state(which is an object) to update
  const setCabin = useCallback(function setCabin(id, name) {
    if (id === cabinId && name === cabinName) return;
    dispatch({ type: "cabin", payload: { cabinId: id, cabinName: name } });
  }, []);

  // the DatePicker is somehow expensive so memoize the function that passed to it
  const setStartDate = useCallback((date) => {
    // for date it's an object so using primitive value like getTime => integar
    if (date?.getTime() !== startDate?.getTime())
      dispatch({ type: "startDate", payload: date });
  }, []);

  const setEndDate = useCallback((date) => {
    if (date?.getTime() !== endDate?.getTime())
      dispatch({ type: "endDate", payload: date });
  }, []);

  // check functions

  function checkGuestId() {
    let isThereError = false;
    if (!guestId) {
      if (!errGuestId)
        dispatch({
          type: "setErrors",
          payload: { errGuestId: "This field is reqiured" },
        });
      isThereError = true;
    } else dispatch({ type: "setErrors", payload: { errGuestId: "" } });

    return isThereError;
  }

  function checkCabinId() {
    let isThereError = false;

    if (!cabinId) {
      if (!errCabinId)
        dispatch({
          type: "setErrors",
          payload: { errCabinId: "This field is reqiured" },
        });
      isThereError = true;
    } else dispatch({ type: "setErrors", payload: { errCabinId: "" } });

    return isThereError;
  }

  function checkNumGuests() {
    let isThereError = false;

    const firstErr = "This field is reqiured";
    const secondErr = "This number should be bigger than zero";
    const thirdErr = `Number of guests shouldn't excced ${maxGuestsPerBooking} guests`;

    if (!numGuests) {
      if (!errNumGuests || errNumGuests !== firstErr)
        dispatch({
          type: "setErrors",
          payload: { errNumGuests: firstErr },
        });
      isThereError = true;
    } else if (numGuests < 0) {
      if (!errNumGuests || errNumGuests !== secondErr) {
        dispatch({
          type: "setErrors",
          payload: {
            errNumGuests: secondErr,
          },
        });
      }
      isThereError = true;
    } else if (numGuests > maxGuestsPerBooking) {
      if (!errNumGuests || errNumGuests !== thirdErr) {
        dispatch({
          type: "setErrors",
          payload: {
            errNumGuests: thirdErr,
          },
        });
      }
    } else if (errNumGuests) {
      dispatch({ type: "setErrors", payload: { errNumGuests: "" } });
    }

    return isThereError;
  }

  function checkStartDate() {
    let isThereError = false;
    const firstErr = "This date shouldn't be in the past";
    const secondErr = "The start date should be before end date";
    const thirdErr = `Min booking days should be more or equal to ${minBookingLength} days`;
    const forthErr = `Max booking days should be less or equal to ${maxBookingLength} days`;

    // be carefull when dealing with object in state to not cause unnecessary re-renders
    if (isPast(startDate)) {
      if (!errStartDate || errStartDate !== firstErr) {
        dispatch({
          type: "setErrors",
          payload: { errStartDate: firstErr },
        });
      }
      isThereError = true;
    } else if (!isCorrectDate(endDate, startDate)) {
      if (!errStartDate || errStartDate !== secondErr) {
        dispatch({
          type: "setErrors",
          payload: {
            errStartDate: secondErr,
          },
        });
      }
      isThereError = true;
    } else if (differenceBetween(endDate, startDate) < minBookingLength) {
      if (!errStartDate || errStartDate !== thirdErr) {
        dispatch({
          type: "setErrors",
          payload: {
            errStartDate: thirdErr,
          },
        });
      }
      isThereError = true;
    } else if (differenceBetween(endDate, startDate) > maxBookingLength) {
      if (!errStartDate || errStartDate !== forthErr) {
        dispatch({
          type: "setErrors",
          payload: {
            errStartDate: forthErr,
          },
        });
      }
      isThereError = true;
    } else {
      if (errStartDate) {
        dispatch({
          type: "setErrors",
          payload: {
            errStartDate: "",
          },
        });
      }
    }

    return isThereError;
  }

  function checkEndDate() {
    let isThereError = false;

    const secondErr = "The end date should be after start date";
    const thirdErr = `Min booking days should be more or equal to ${minBookingLength} days`;
    const forthErr = `Max booking days should be less or equal to ${maxBookingLength} days`;

    if (!isCorrectDate(endDate, startDate)) {
      if (!errEndDate || errEndDate !== secondErr) {
        dispatch({
          type: "setErrors",
          payload: {
            errEndDate: secondErr,
          },
        });
      }
      isThereError = true;
    } else if (differenceBetween(endDate, startDate) < minBookingLength) {
      if (!errEndDate || errEndDate !== thirdErr) {
        dispatch({
          type: "setErrors",
          payload: {
            errEndDate: thirdErr,
          },
        });
      }
      isThereError = true;
    } else if (differenceBetween(endDate, startDate) > maxBookingLength) {
      if (!errEndDate || errEndDate !== forthErr) {
        dispatch({
          type: "setErrors",
          payload: {
            errEndDate: forthErr,
          },
        });
      }
      isThereError = true;
    } else {
      if (errEndDate) {
        dispatch({
          type: "setErrors",
          payload: {
            errEndDate: "",
          },
        });
      }
    }

    return isThereError;
  }

  // reset function
  function res() {
    dispatch({ type: "reset" });
    setStartDateKey(getRandId()); // to reset the datePicker (unstabel key)
    setEndDateKey(getRandId());
  }

  // submit function
  function submit(e) {
    e.preventDefault();
    const errors = [
      // check for the guest id
      checkCabinId(),
      // check for cabin id
      checkGuestId(),
      // check for guests count
      checkNumGuests(),
      // check for start date
      checkStartDate(),
      // check for end date
      checkEndDate(),
    ];
    const isThereErr = errors.some((a) => a);
    if (isThereErr) return;
    // prepare data
    const { regularPrice, discount } = cabinDetails.current;
    const numNights = differenceBetween(endDate, startDate);
    const cabinPrice = regularPrice - discount;
    const extrasPrice = breakfastPrice * numNights;

    const data = {
      startDate,
      endDate,
      numNights,
      numGuests,
      cabinPrice,
      extrasPrice,
      totalPrice: cabinPrice * numNights + extrasPrice,
      status,
      hasBreakfast: withBreakfast,
      isPaid,
      observations,
      cabinId,
      guestId,
    };

    addBooking(data, {
      onSuccess: () => {
        toast.success("Booking added successfully");
        res();
      },
    });
  }

  if (settingsError) return <ErrorMsg faildFor="settings" />;

  return (
    <Form style={{ overflow: "visible" }} onSubmit={submit}>
      <GuestSelect
        error={errGuestId}
        setter={setGuest}
        activeOption={guestDetails}
        activeValue={guestId}
        selectRef={guestRef}
      />
      <CabinsSelect
        error={errCabinId}
        setter={setCabin}
        activeOption={cabinName}
        activeValue={cabinId}
        selectRef={cabinRef}
      />

      {cabinId && <CabinDetails id={cabinId} setDetails={cabinDetails} />}

      <FormRow
        label="Enter number of guests"
        error={errNumGuests}
        withError={true}
        additionalStyle={additonalRowStyle}
      >
        <Input
          type="number"
          id="numGuests"
          name="numGuests"
          $full={true}
          value={numGuests}
          onChange={(e) => {
            if (+e.target.value !== numGuests)
              dispatch({ type: "numGuests", payload: +e.target.value });
          }}
        />
      </FormRow>

      <DatePicker
        label="Select start date"
        id="startDate"
        error={errStartDate}
        setter={setStartDate}
        key={startDateKey}
      />

      <DatePicker
        label="Select end date"
        id="endDate"
        error={errEndDate}
        setter={setEndDate}
        key={endDateKey}
      />

      <FormRow additionalStyle={additonalRowStyle}>
        {isLoadingSettings ? (
          <LoadingDiv additionalStyle={{ minHeight: "5rem" }} />
        ) : (
          <>
            <Checkbox
              checked={withBreakfast}
              onChange={() =>
                dispatch({ type: "withBreakfast", payload: !withBreakfast })
              }
            >
              With breakfast
            </Checkbox>

            <Budget
              $bc="var(--color-green-100)"
              style={{ padding: "1rem 0rem" }}
            >
              <HiOutlineCurrencyDollar
                style={{ color: "var(--color-green-700)", fontSize: "2rem" }}
              />
              <Span
                $additionalStyle={{
                  fontSize: "1.4rem",
                  color: "var(--color-green-700)",
                }}
              >
                Breakfast price: {formatCurrency(breakfastPrice)}
              </Span>
            </Budget>
          </>
        )}
      </FormRow>

      <FormRow withError={false} additionalStyle={paidStyle}>
        <Checkbox
          checked={isPaid}
          onChange={() => dispatch({ type: "isPaid", payload: !isPaid })}
        >
          Has {guestName ? guestName : "the guest"} paid ?
        </Checkbox>
      </FormRow>

      <FormRow
        withError={false}
        additionalStyle={additonalRowStyle}
        label="Add observations"
      >
        <Textarea
          id="observations"
          name="observations"
          value={observations}
          onChange={(e) =>
            dispatch({ type: "observations", payload: e.target.value })
          }
        />
      </FormRow>

      <SelectStatus
        label="Set the status"
        setter={(newStatus) => {
          if (newStatus !== status)
            dispatch({ type: "status", payload: newStatus });
        }}
      />

      <FormRowButtons>
        <Button
          $variation="secondary"
          type="reset"
          onClick={res}
          disabled={isAdding || isLoadingSettings || settingsError}
        >
          Reset
        </Button>
        <Button
          $variation="primary"
          disabled={isAdding || isLoadingSettings || settingsError}
        >
          Add Booking
        </Button>
      </FormRowButtons>
    </Form>
  );
}

export default AddSingleBooking;
