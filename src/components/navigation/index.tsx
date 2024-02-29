"use client";
import { useState } from "react";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";

export const Navigation = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
    </>
  );
};