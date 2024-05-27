"use client";
import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import { createSupabaseClient } from "@/lib/supabase/browser";
import { Session } from "@supabase/supabase-js";

const supabase = createSupabaseClient();

export const Navigation = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then((userData) => {
      setSession(userData.data.session);
    })
  }, [setSession])

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} session={session} setSession={setSession}/>
      <Navbar isOpen={isOpen} toggle={toggle} session={session} setSession={setSession}/>
    </>
  );
};