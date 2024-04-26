import supabase, { supabaseUrl } from "./supabase";

// magolon226@hisotyr.com, lili123#
// osama@example.com, osama123#
// magolon226@hisotyr.com, fakefake

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);
  console.log(data, error);
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Check if the user has an image
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (userError) {
    console.log(userError.message);
    throw new Error(userError.message);
  }

  // 2. Update the password OR full name
  let updateData;
  if (password) updateData = { password };
  else if (fullName) updateData = { data: { fullName } };
  const { data, error: dataError } = await supabase.auth.updateUser(updateData);

  if (dataError) {
    console.log(dataError.message);
    throw new Error(dataError.message);
  }
  // If there is an avatar
  if (!avatar) return data;
  // 3. Upload the avatar image
  const fileName = `${data.user.id}-${avatar.name}`;

  const { error: storageError } = await supabase.storage
    .from(`avatars`)
    .upload(fileName, avatar);
  if (storageError) {
    console.log(storageError.message);
    throw new Error(storageError.message);
  }
  // 4. Update avatar in the user
  const { data: updatedUser, error: errorUser } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (errorUser) {
    console.log(errorUser.message);
    throw new Error(errorUser.message);
  }

  // check if there is no old image
  if (user.user_metadata.avatar === "") {
    return updatedUser;
  }

  // Delete the old image (don't throw an error in this process)
  await supabase.storage
    .from("avatars")
    .remove([user.user_metadata.avatar.split("/").at(-1)]);
  return updatedUser;
}
