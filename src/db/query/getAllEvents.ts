import { supabase } from "..";

export default async function getAllEvents() {
  try {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("date", { ascending: true });

    if (error) {
      console.error("Error fetching events:", error);
    }

    return data;
  } catch (err) {
    console.error("Unexpected error:", err);
  }
}
