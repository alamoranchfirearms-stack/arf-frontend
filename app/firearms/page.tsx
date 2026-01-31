import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Firearms for Sale | Alamo Ranch Firearms",
  description:
    "Browse firearms for sale including handguns, rifles, and suppressors. Alamo Ranch Firearms offers compliant transfers, trusted brands, and expert service.",
};

export default function FirearmsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Firearms</h1>

      <p className="text-lg text-gray-300 mb-8">
        Alamo Ranch Firearms offers a curated selection of firearms, including
        handguns, rifles, and NFA items. Whether you are purchasing your first
        firearm or expanding your collection, we focus on compliance, quality,
        and trusted manufacturers.
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
          <a href="/firearms/handguns" className="hover:underline">
      Handguns
    </Link>
  </h2>
  <p className="text-gray-400">
    Pistols and revolvers from leading manufacturers, suitable for concealed
    carry, duty use, and home defense.
  </p>
</div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Rifles</h2>
          <p className="text-gray-400">
            Bolt-action, semi-automatic, and sporting rifles designed for
            precision, durability, and performance.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Suppressors</h2>
          <p className="text-gray-400">
            NFA-regulated suppressors available through compliant transfer
            processes, including Form 4 guidance and dealer support.
          </p>
        </div>
      </section>
    </main>
  );
}
