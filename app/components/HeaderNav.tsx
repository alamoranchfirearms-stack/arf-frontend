import Link from "next/link";

export default function HeaderNav() {
  return (
    <header className="border-b border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Alamo Ranch Firearms
        </Link>

        <nav className="flex items-center gap-8 text-sm">
          <Link href="/firearms" className="hover:underline">
            Firearms
          </Link>
          <Link href="/suppressors" className="hover:underline">
            Suppressors
          </Link>
        </nav>
      </div>
    </header>
  );
}
