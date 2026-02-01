"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeaderNav() {
  const [firearmsOpen, setFirearmsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-lg font-semibold">
          Alamo Ranch Firearms
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <div className="relative">
            <button
              type="button"
              className="hover:underline"
              onClick={() => setFirearmsOpen(!firearmsOpen)}
            >
              Firearms
            </button>

            {firearmsOpen && (
              <div className="absolute top-full mt-2 w-64 rounded-md border border-neutral-800 bg-black shadow-lg z-50">
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

        {/* Hamburger Button (Mobile) */}
        <button
          type="button"
          className="md:hidden text-sm border border-neutral-700 px-3 py-2 rounded"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-black">
          <nav className="flex flex-col px-6 py-4 text-sm gap-4">
            <button
              type="button"
              className="text-left font-semibold"
              onClick={() => setFirearmsOpen(!firearmsOpen)}
            >
              Firearms
            </button>

            {firearmsOpen && (
              <div className="pl-4 flex flex-col gap-2">
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
              </div>
            )}

            <Link href="/suppressors">Suppressors</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 hover:bg-neutral-900"
    >
      {label}
    </Link>
  );
}
