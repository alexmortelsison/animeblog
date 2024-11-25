"use client";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Shell } from "lucide-react";
import { navlinks } from "./navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="flex items-center justify-between border-b py-3 mx-auto max-w-7xl px-4">
      <div className="flex">
        <Shell className="text-primary" />
        <p className="font-extrabold text-lg tracking-tighter">
          anime.<span className="text-primary">List</span>
        </p>
      </div>
      <div className="space-x-2 border px-8 py-2 rounded-full border-primary tracking-tighter text-muted-foreground">
        {navlinks.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className={`if ${
              pathName === link.href
                ? "text-primary"
                : "text-muted-foreground hover:font-bold"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
