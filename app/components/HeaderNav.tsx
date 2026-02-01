// force-deploy

"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-lg font-semibold">
          Alamo Ranch Firearms
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {/* Firearms hover menu */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="cursor-default hover:underline">
              Firearms
            </span>

            {open && (
              <div className="absolute top-full left-0 mt-2 w-56 rounded-md border border-neutral-800 bg-black shadow-lg z-50">
                <ul className="flex flex-col">
                  <NavItem href="/firearms/handguns" label="Handguns" />
                  <NavItem
                    href="/firearms/semi-automatic-rifles"
                    label="Semi-Automatic Rifles"
                  />
                  <NavItem
                    href="/firearms/bolt-action-rifles"
                    label="Bolt-Action Rifles"
                  />
                  <NavItem
                    href="/firearms/rifle-style-pistols"
                    label="Rifle-Style Pistols"
                  />
                </ul>
              </div>
            )}
          </div>

          <Link href="/suppressors" className="hover:underline">
            Suppressors
          </Link>
        </nav>

        {/* Hamburger (mobile only) */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-black">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
            <Link href="/firearms" onClick={() => setOpen(false)}>
              Firearms
            </Link>
            <Link href="/firearms/handguns" onClick={() => setOpen(false)}>
              Handguns
            </Link>
            <Link href="/suppressors" onClick={() => setOpen(false)}>
              Suppressors
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="block px-4 py-3 hover:bg-neutral-900"
      >
        {label}
      </Link>
    </li>
  );
}
