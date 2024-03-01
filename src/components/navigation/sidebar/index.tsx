import Link from "next/link";
import Logo from "../navbar/Logo";
import { Button } from "@/components/ui/button";
import { NavList } from "../navbar/NavList";
import { SignInDialog } from "@/components/customcomponents/SignInDialog";

export const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="fixed w-full h-full justify-center bg-black left-0 z-10 flex"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
          zIndex: `${isOpen ? 20 : 0}`,
        }}
      >
        <div className="absolute -left-1 p-5 my-4 h-full w-full">
          <Logo />
        </div>
        {/* Close icon */}
        <button className="absolute right-0 p-5 " onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>
        <ul className="flex flex-col justify-evenly text-center leading-relaxed text-xl z-10">
          <NavList />
          <SignInDialog />
        </ul>
      </div>
    </>
  );
};