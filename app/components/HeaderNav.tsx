"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-lg font-semibold">
          Alamo Ranch Firearms
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm">
          {/* Firearms dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="hover:underline">
              Firearms
            </button>

            {open && (
              <div className="absolute top-full mt-2 w-56 rounded-md border border-neutral-800 bg-black shadow-lg">
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

          {/* Suppressors */}
          <Link href="/suppressors" className="hover:underline">
            Suppressors
          </Link>
        </nav>
      </div>
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
