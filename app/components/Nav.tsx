import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-gray-800">
      <div className="mx-auto max-w-4xl px-6 py-4 flex gap-6 text-sm">
        <Link href="/firearms" className="hover:underline">
          Firearms
        </Link>

        <Link href="/firearms/handguns" className="hover:underline">
          Handguns
        </Link>
      </div>
    </nav>
  );
}
