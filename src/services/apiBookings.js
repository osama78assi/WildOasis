import { RESULTS_BOOKINGS_FOR_PAGE } from "../utils/constants";

import { getToday } from "../utils/helpers";
import supabase from "./supabase";

export async function getBookings(filterFlag, sortFlag, page) {
  // Method either eq, lt, lte, lg, lge and so one...
  // Filter value is simply "filter how" and field is "filter what"
  const { field, value, filterMethod } = filterFlag;
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, status, totalPrice, cabins(name), guests(fullName, email)",
      { count: "exact" }
    );
  // filter
  if (value) query[filterMethod](field, value);
  // sort
  if (sortFlag.sortField)
    query.order(sortFlag.sortField, {
      ascending: sortFlag.sortDirection === "asc",
    });
  // pagination
  if (page) {
    const from = RESULTS_BOOKINGS_FOR_PAGE * (page - 1);
    const to = from + RESULTS_BOOKINGS_FOR_PAGE - 1;
    query.range(from, to);
  }
  const { data: bookings, error, count } = await query;
  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return { bookings, count };
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
export async function getBookingsAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("id, created_at, extrasPrice, totalPrice")
    .lte("created_at", getToday({ end: true }))
    .gte("created_at", date);
  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName)")
    .gte("startDate", date)
    .lte("startDate", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

// Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullName, nationality, countryFlag)")
    .or(
      `and(status.eq.unconfirmed,startDate.eq.${getToday()}),and(status.eq.checked-in,endDate.eq.${getToday()})`
    )
    .order("created_at");

  // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||
  // (stay.status === 'checked-in' && isToday(new Date(stay.endDate)))

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data;
}

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

export async function deleteBooking(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}

export async function addNewBooking(theBooking) {
  const { data, error } = await supabase.from("bookings").insert([theBooking]);

  if (error) {
    console.log(error.message);
    throw new Error("Booking couldn't be uploaded");
  }

  return data;
}
