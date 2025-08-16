import { supabase } from "@/db";

interface BookingParams {
  eventId: string;
  userId: string;
  tickets: number;
}

export default async function bookTickets({
  eventId,
  userId,
  tickets,
}: BookingParams) {
  try {
    const bookings = Array.from({ length: tickets }).map(() => ({
      event_id: eventId,
      seat_number: Math.floor(Math.random() * 1000).toString(),
      booking_time: new Date().toISOString(),
      qr_code: Math.random().toString(36).substring(2, 10),
      user_id: userId,
    }));

    const { error } = await supabase.from("tickets").insert(bookings);

    if (error) {
      console.error("Booking failed:", error);
      return { success: false, error };
    }

    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false, error: err };
  }
}
