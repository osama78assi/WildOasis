import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins couldn't be loaded");
  }

  return data;
}

export async function editCabin(cabin, id) {
  const hasImage = typeof cabin.image === "string";
  // 1. there is an image then just update the data
  if (hasImage) {
    const { data, error } = await supabase
      .from("cabins")
      .update(cabin)
      .eq("id", id)
      .select();
    if (error) {
      console.log(error);
      throw new Error("Cabin couldn't be updated");
    }
    return data;
  } else {
    // 2. get the old image
    const { data: oldImage } = await supabase
      .from("cabins")
      .select("image")
      .eq("id", id)
      .single();

    // 3. there is a new image
    const imageName = `${Math.random()}-${cabin.image.name}`
      .replaceAll("/", "")
      .replaceAll("\\", "");

    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
    const { error: uploadingErr } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, cabin.image);

    // 4. if there any problem while uploading the image cancel everything
    if (uploadingErr) {
      console.log(uploadingErr);
      throw new Error("Coudln't update the cabin. Try again");
    }

    // 5. if everything fine just GO ON
    const { data, error: updateError } = await supabase
      .from("cabins")
      .update({ ...cabin, image: imagePath })
      .eq("id", id)
      .select();
    if (updateError) {
      console.log(updateError);

      // if there a problem just delete the uploaded image
      await supabase.storage.from("cabin-images").remove([imageName]);
      throw new Error("Coudln't update the cabin. Try again");
    }

    // 6. delete the old one and for user expirance no error thrown in this state
    const oldImgName = oldImage.image.split("/").at(-1);
    await supabase.storage.from("cabin-images").remove([oldImgName]);

    return data;
  }
}

export async function createCabin(newCabin, copy = false) {
  const imageName = !copy
    ? `${Math.random()}-${newCabin.image.name}`
        .replaceAll("/", "")
        .replaceAll("\\", "")
    : newCabin.image.split("/").at(-1);
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${
    !copy ? imageName : `copy-${imageName}`
  }`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select()
    .single();
  if (error) {
    console.log(error);
    throw new Error("Cabins couldn't be created");
  }

  if (!copy) {
    // 2. Upload image if it's not a copy

    const { error: uploadingErr } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    // 3. Delete the cabin if there was an error
    if (uploadingErr) {
      await supabase.from("cabins").delete().eq("id", data.id);
      console.log(uploadingErr);

      throw new Error(
        "Cabin image coudn't be uploaded and the cabin was not created"
      );
    }
  } else if (copy) {
    // 2. Copy the image
    const { error: copyError } = await supabase.storage
      .from("cabin-images")
      .copy(imageName, `copy-${imageName}`);
    // 3. Delete the cabin if there was an error
    if (copyError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      console.log(copyError);

      throw new Error(
        "Cabin image coudn't be copied and the cabin was not created"
      );
    }
  }
  return data;
}

export async function deleteCabin(id) {
  // 1. geting the cabin details
  const { data: cabin, error: gettingCabinError } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id);

  if (gettingCabinError) {
    console.log(gettingCabinError);
    throw new Error("Cabin couldn't be deleted. Try again");
  }

  // 2. extract image name
  const imageName = cabin[0].image.split("/").at(-1);

  // 3. getting the image to upload it again if the deleting faild
  const { data: theImg, error: gettingImgErr } = await supabase.storage
    .from("cabin-images")
    .download(imageName);

  if (gettingImgErr) {
    console.log(gettingImgErr);
    throw new Error("Cabin couldn't be deleted. Try again");
  }

  // 4. delete the image
  const { error: deleteingImgErr } = await supabase.storage
    .from("cabin-images")
    .remove([imageName]);

  // 5. delete the cabin
  const { error: deleteingCabinErr } = await supabase
    .from("cabins")
    .delete()
    .eq("id", id);
  // 6. if something happend
  if (deleteingCabinErr || deleteingImgErr) {
    // 7. reupload the image
    if (deleteingImgErr) {
      await supabase.storage.from("cabin-images").upload(imageName, theImg);
      console.log(deleteingImgErr);
    }
    // 8. reupload the cabin data
    if (deleteingCabinErr) {
      await supabase.from("cabins").insert([cabin]);
      console.log(deleteingCabinErr);
    }
    throw new Error("Cabin couldn't be deleted. Try again");
  }
}
