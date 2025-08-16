import { supabase } from "..";

export default async function getUserRole() {
  // First, get the currently authenticated user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    console.error("Error fetching user:", userError);
    return;
  }

  if (user) {
    // Now fetch the role from your "users" table using user.id
    const { data: profile, error: profileError } = await supabase
      .from("users")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profileError) {
      console.error("Error fetching profile:", profileError);
      return;
    }

    return profile?.role || "user";
  }
}
