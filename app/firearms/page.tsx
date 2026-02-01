import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Firearms | Alamo Ranch Firearms",
  description:
    "Browse firearms by category including handguns, semi-automatic rifles, bolt-action rifles, and rifle-style pistols.",
};

export default function FirearmsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Firearms</h1>

      <p className="text-lg text-gray-300 mb-12 max-w-3xl">
        Browse our firearms by category. All firearms are transferred in
        compliance with federal and state regulations through Alamo Ranch
        Firearms.
      </p>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <CategoryCard
          title="Handguns"
          href="/firearms/handguns"
          description="Pistols and revolvers for concealed carry, duty, and home defense."
        />

        <CategoryCard
          title="Semi-Automatic Rifles"
          href="/firearms/semi-automatic-rifles"
          description="Modern sporting rifles designed for reliability and performance."
        />

        <CategoryCard
          title="Bolt-Action Rifles"
          href="/firearms/bolt-action-rifles"
          description="Precision rifles for hunting and long-range shooting."
        />

        <CategoryCard
          title="Rifle-Style Pistols"
          href="/firearms/rifle-style-pistols"
          description="Compact platforms built for maneuverability and control."
        />
      </section>
    </main>
  );
}

function CategoryCard({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="block border border-neutral-700 rounded-lg p-6 hover:border-white transition"
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-400">{description}</p>
    </Link>
  );
}
