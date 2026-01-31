import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Handguns for Sale | Alamo Ranch Firearms",
  description:
    "Shop handguns from trusted manufacturers. Alamo Ranch Firearms offers compliant transfers, expert guidance, and reliable service for pistol purchases.",
};

export default function HandgunsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/firearms" className="hover:underline">
          Firearms
        </Link>{" "}
        / Handguns
      </nav>

      <h1 className="text-4xl font-bold mb-6">Handguns</h1>

      <p className="text-lg text-gray-300 mb-8">
        Handguns remain one of the most versatile firearm categories, suitable
        for personal defense, duty use, training, and sport shooting. Alamo
        Ranch Firearms provides access to quality pistols and revolvers through
        compliant transfer processes and knowledgeable support.
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Pistols</h2>
          <p className="text-gray-400">
            Semi-automatic pistols from leading manufacturers, available in
            common calibers for carry, home defense, and range use.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Revolvers</h2>
          <p className="text-gray-400">
            Reliable revolvers valued for simplicity and durability, suitable
            for defensive use and sporting applications.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Compliance & Transfers
          </h2>
          <p className="text-gray-400">
            All handgun purchases are handled through federally compliant
            transfer procedures. Our team assists with FFL coordination and
            ensures a smooth transaction process.
          </p>
        </div>
      </section>
    </main>
  );
}
