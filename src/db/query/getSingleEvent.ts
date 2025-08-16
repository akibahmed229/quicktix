import { supabase } from "..";

export default async function getSingleEvent(id: string) {
  try {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching events:", error);
    }

    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
  }
}
