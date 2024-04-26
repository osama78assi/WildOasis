import supabase from "./supabase";

export async function getAllGuests(page, result) {
  const query = supabase
    .from("guests")
    .select("id, fullName, email, nationalID, nationality", { count: "exact" });

  const from = (page - 1) * result;
  const to = from + result - 1;

  query.range(from, to);

  const { data: guests, count, error } = await query;

  if (error) throw new Error(error.message);

  return { guests, count };
}

export async function deleteGuest(id) {
  const { error } = await supabase.from("guests").delete().eq("id", id);
  if (error) throw new Error(error.message);

  return true;
}

export async function addGuest(values) {
  // { fullName, email, nationalID, nationality, countryFlag } = values
  const { error } = await supabase.from("guests").insert([values]);

  if (error) throw new Error(error.message);

  return true;
}

export async function searchGuestsBy({ column, value }) {
  if (value === "") return [];
  const { data, error } = await supabase
    .from("guests")
    .select(`id, fullName, nationalID`)
    .ilike(column, `%${value}%`);
  if (error) {
    throw new Error(error.message);
  }

  return data;
}
