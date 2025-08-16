"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/db";
import ProtectedRoute from "@/components/ProtectedRoute";
import getUserRole from "@/db/query/getUserRole";

export default function AddEventsAdmin() {
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    date: "",
    location: "",
    price: "",
    image_url: "",
  });

  // Fetch user role from "users" table
  useEffect(() => {
    const fetchRole = async () => {
      const role = await getUserRole();
      setUserRole(role);
    };

    fetchRole();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (userRole !== "admin") {
      alert("Access denied! Only admins can add events.");
      return;
    }

    const { error } = await supabase.from("events").insert([
      {
        title: form.title,
        description: form.description,
        category: form.category,
        date: form.date,
        location: form.location,
        price: parseFloat(form.price),
        image_url: form.image_url,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Error adding event!");
    } else {
      alert("Event added successfully!");
      router.push("/events"); // redirect to events page
    }
  };

  // Input handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (userRole !== "admin") {
    return (
      <p className="text-red-500">You are not authorized to view this page.</p>
    );
  }

  // ✅ Render form for admins only
  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-6 shadow-md rounded-xl">
        <h1 className="text-2xl font-bold mb-4">Add New Event</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Event Description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            step="0.01"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="image_url"
            placeholder="Image URL"
            value={form.image_url}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Event
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}
