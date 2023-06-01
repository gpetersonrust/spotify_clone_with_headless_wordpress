import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function SidebarItem({
    icon: Icon,
    label,
    active,
    href,
    className,

}) {
    console.log(active, 'active');
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-md font-med cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        active && `text-white`
      )}
    >
      <Icon size={26} /> <p className='w-full truncate'> {label} </p>
    </Link>
  );
}
