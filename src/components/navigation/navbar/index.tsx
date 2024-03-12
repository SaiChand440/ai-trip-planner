import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { NavList } from "./NavList";
import { SignInDialog } from "@/components/customcomponents/SignInDialog";
import { createSupabaseClient } from "@/lib/supabase/browser";
import { Session } from "@supabase/supabase-js";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const supabase = createSupabaseClient();
  
export const Navbar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then((userData) => {
      setSession(userData.data.session);
    })
  }, [])

  return (
    <>
      <div className="w-full h-20 sticky top-0 z-10">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className={`inline-flex items-center md:hidden ${
                isOpen ? "hidden" : "block"
              }`}
              onClick={toggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6 text-white ">
              <NavList />
            </ul>
            {!session?.user.user_metadata ? (
              <div className="hidden md:block">
                <SignInDialog />
              </div>
            ) : (
              <Avatar>
                <AvatarImage referrerPolicy="no-referrer" src={session.user.user_metadata.picture} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

