"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { ThemeSwitch } from "./ThemeSwitch";
import { supabase } from "@/db";
import UserCard from "./UserCard";
import { useRouter } from "next/navigation";
import getUserRole from "@/db/query/getUserRole";
import type { Session } from "@supabase/supabase-js";

const MenuIcon = dynamic(() => import("lucide-react").then((m) => m.Menu), {
  ssr: false,
});

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Admin", href: "/admin" },
  ];

  // Filter nav links based on userRole
  const filteredNavLinks = navLinks.filter((link) => {
    if (link.name.toLowerCase() === "admin") {
      return userRole === "admin"; // only show Admin link if role is admin
    }
    return true; // show all other links
  });

  useEffect(() => {
    setMounted(true);

    const fetchSessionAndRole = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setSession(session);

        const role = await getUserRole();
        setUserRole(role);
      } catch (error) {
        console.warn("No session available:", error);
        setSession(null);
        setUserRole(null);
      }
    };

    fetchSessionAndRole();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <header className="shadow-md bg-gray-100 dark:bg-gray-700 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition"
        >
          QuickTix
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {mounted &&
            filteredNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {link.name}
              </Link>
            ))}
        </nav>

        {/* Right Side Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {session ? (
            <>
              <UserCard />
              <ThemeSwitch />
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 bg-blue-600 text-white dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition"
              >
                Register
              </Link>
              <ThemeSwitch />
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-700 border-t border-gray-200 dark:border-gray-700">
          {mounted &&
            filteredNavLinks.map((link) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {link.name}
              </Link>
            ))}

          {/* Auth Actions for Mobile */}
          <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            {session ? (
              <>
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/profile"
                  className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/login"
                  className="block px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 rounded"
                >
                  Sign In
                </Link>
                <Link
                  onClick={() => setIsOpen(false)}
                  href="/signup"
                  className="block px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded mt-2 hover:bg-blue-700 dark:hover:bg-blue-600"
                >
                  Sign Up
                </Link>
              </>
            )}
            {/* Theme Switch for Mobile */}
            <div className="mt-4 flex justify-center">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
