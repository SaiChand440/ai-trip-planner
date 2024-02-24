import Link from 'next/link';
import React from 'react'

export const NavList = () => {
  return (
    <>
      <li
        className="hover:underline   
                hover:text-slate-300  
                  inline-block  
                  hover:duration-300  
                  cursor-auto
                  hover:underline-offset-8
                  "
      >
        <Link href="/">
          <p>Custom</p>
        </Link>
      </li>
      <li
        className="hover:underline   
                hover:text-slate-300  
                  inline-block  
                  hover:duration-300  
                  cursor-auto
                  hover:underline-offset-8
                  "
      >
        <Link href="/services">
          <p>Recommended Trips</p>
        </Link>
      </li>
      <li
        className="hover:underline   
                hover:text-slate-300  
                  inline-block  
                  hover:duration-300  
                  cursor-auto
                  hover:underline-offset-8
                  "
      >
        <Link href="/contacts">
          <p>My Trips</p>
        </Link>
      </li>
    </>
  );
}
