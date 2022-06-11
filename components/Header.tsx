import { useSession } from "next-auth/react";
import Image from "next/image"
import Link from "next/link";
import React from 'react'

const links = [
  { label: "How it Works", link: "#how-it-works" },
  { label: "Docs", link: "/docs" },
  { label: "About", link: "/about" },
]

export const Header: React.FC = ({ }) => {
  const { data: session, status } = useSession()

  return (
    <div className="flex max-w-[1250px] py-6 mx-auto justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <Image className="cursor-pointer" src="/logo1.svg" height={40} width={40} />
        </Link>

        <ul className="flex list-none items-center gap-x-7 text-[16px] font-semibold ml-5">
          {links.map(({ label, link }, idx) => (
            <li key={idx}>
              <Link href={link}>
                <button className="text-text-light-1 hover:text-accent-1 transition">{label}</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {status === "loading" || !session ? (
        <Link href="/signin">
          <button className="rounded border-[1.5px] border-accent-2 px-[16px] py-[4px] text-[16px] font-semibold text-text-light-1 h-fit hover:bg-secondary-dark transition ease-in-out">
            Sign in
          </button>
        </Link>
      ) : (
        <button className="rounded border-[1.5px] border-accent-2 px-[16px] py-[4px] text-[16px] font-semibold text-text-light-1 h-fit hover:bg-secondary-dark transition ease-in-out">
          Go to Dashboard
        </button>
      )}
    </div>
  );
}