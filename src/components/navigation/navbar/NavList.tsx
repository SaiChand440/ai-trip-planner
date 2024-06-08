import Link from 'next/link';
import React from 'react'

export const NavList = ({toggle}:{toggle?:() => void}) => {
  const clickHandler = ()=>{
    if(toggle){
      toggle()
    }
  }
  return (
    <>
      <li
        onClick={clickHandler}
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
        onClick={clickHandler}
        className="hover:underline   
                hover:text-slate-300  
                  inline-block  
                  hover:duration-300  
                  cursor-auto
                  hover:underline-offset-8
                  "
      >
        <Link href="/recommended-trips">
          <p>Recommended Trips</p>
        </Link>
      </li>
      <li
        onClick={clickHandler}
        className="hover:underline   
                hover:text-slate-300  
                  inline-block  
                  hover:duration-300  
                  cursor-auto
                  hover:underline-offset-8
                  "
      >
        <Link href="/my-trips">
          <p>My Trips</p>
        </Link>
      </li>
    </>
  );
}
