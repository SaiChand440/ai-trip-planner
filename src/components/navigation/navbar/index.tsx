import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { NavList } from "./NavList";
import { SignInDialog } from "@/components/customcomponents/SignInDialog";
import { createSupabaseClient } from "@/lib/supabase/browser";
import { Session } from "@supabase/supabase-js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const supabase = createSupabaseClient();

export const Navbar = ({
  isOpen,
  toggle,
  session,
  setSession
}: {
  isOpen: boolean;
  toggle: () => void;
  session: Session | null;
  setSession: (session:Session | null) => void;
}): JSX.Element => {


  return (
    <div >
      <div className="w-full h-20 sticky top-0 z-10">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button
              type="button"
              className={`inline-flex items-center md:hidden ${isOpen ? "hidden" : "block"
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
            {!session?.user.user_metadata ? 
            <div className="md:block hidden">
              <SignInDialog isSideBar={false}/> 
            </div>
            : 
            <Dialog>
            <DialogTrigger asChild>
            <Avatar className="md:block hidden">
            <AvatarImage referrerPolicy="no-referrer" src={session.user.user_metadata.picture} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
            </DialogTrigger>
            <DialogContent>
      <DialogHeader>
        <DialogTitle>Sign Out</DialogTitle>
        <DialogDescription>
          Are you sure you want to Sign out?
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
      <Button variant="default" className="md:block hidden" onClick={()=>{
            supabase.auth.signOut().then(()=>{
              setSession(null);
            });
            }}>Confirm</Button>
      </DialogFooter>
    </DialogContent>
            </Dialog>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

