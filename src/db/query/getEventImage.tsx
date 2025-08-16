import { supabase } from "..";

export default async function getEventImage() {
  try {
    const { data, error } = await supabase
      .from("events")
      .select("image_url")
      .order("date", { ascending: true })
      .limit(4);

    if (error) {
      console.error("Error fetching events images:", error);
      return [];
    }

    // convert list object to list of image link string and map only the image_url field
    return data.map((event) => event.image_url).filter(Boolean);
  } catch (error) {
    console.log(error);
  }
}
