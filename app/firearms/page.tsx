import type { Metadata } from "next";
import Link from "next/link";
import { firearms, type FirearmCategory, type FirearmProduct } from "./products";

export const metadata: Metadata = {
  title: "Firearms | Alamo Ranch Firearms",
  description:
    "Browse firearms. Filter by category and sort by name or price.",
};

type SortKey = "default" | "name" | "price";

export default function FirearmsPage({
  searchParams,
}: {
  searchParams: { category?: string; sort?: string };
}) {
  const category = normalizeCategory(searchParams.category);
  const sort = normalizeSort(searchParams.sort);

  const filtered = category
    ? firearms.filter((p) => p.category === category)
    : firearms;

  const sorted = sortProducts(filtered, sort);

  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <h1 className="text-5xl font-bold tracking-tight mb-8">Firearms</h1>

      {/* Controls */}
      <section className="flex flex-col gap-5 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Filter */}
          <div>
            <div className="text-sm text-gray-400 mb-2">Filter</div>
            <div className="flex flex-wrap gap-3">
              <ControlLink
                label="Bolt Action Rifle"
                href={hrefWith({ category: "bolt-action-rifles", sort })}
                active={category === "bolt-action-rifles"}
              />
              <ControlLink
                label="Handgun"
                href={hrefWith({ category: "handguns", sort })}
                active={category === "handguns"}
              />
              <ControlLink
                label="Rifle Style Pistol"
                href={hrefWith({ category: "rifle-style-pistols", sort })}
                active={category === "rifle-style-pistols"}
              />
              <ControlLink
                label="Semi-Automatic Rifle"
                href={hrefWith({ category: "semi-automatic-rifles", sort })}
                active={category === "semi-automatic-rifles"}
              />
              <ControlLink
                label="All"
                href={hrefWith({ sort })}
                active={!category}
              />
            </div>
          </div>

          {/* Sort */}
          <div className="lg:text-right">
            <div className="text-sm text-gray-400 mb-2">Sort</div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ControlLink
                label="Default"
                href={hrefWith({ category: category ?? undefined, sort: "default" })}
                active={sort === "default"}
              />
              <ControlLink
                label="Name"
                href={hrefWith({ category: category ?? undefined, sort: "name" })}
                active={sort === "name"}
              />
              <ControlLink
                label="Price"
                href={hrefWith({ category: category ?? undefined, sort: "price" })}
                active={sort === "price"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* List */}
      <section className="space-y-6">
        {sorted.map((p) => (
          <ProductRow key={p.slug} product={p} />
        ))}
      </section>
    </main>
  );
}

function ProductRow({ product }: { product: FirearmProduct }) {
  return (
    <article className="border border-neutral-800 bg-black rounded-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr]">
        {/* Image */}
        <div className="bg-neutral-900">
          {product.image ? (
            // If you add images in /public and set product.image, swap to next/image later if you want
            // Keeping it simple: plain img is fine for now.
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover aspect-[4/3] md:aspect-auto"
            />
          ) : (
            <div className="w-full aspect-[4/3] md:aspect-auto md:h-full flex items-center justify-center text-neutral-500">
              Image
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                {product.name}
              </h2>
              {product.sku ? (
                <div className="text-sm text-gray-400 mt-2">{product.sku}</div>
              ) : null}
            </div>

            <div className="text-3xl md:text-4xl font-bold whitespace-nowrap">
              ${product.price}
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed max-w-3xl">
            {product.description}
          </p>

          <div className="pt-2">
            <Link
              href={`/firearms/${product.slug}`}
              className="inline-flex items-center justify-center px-5 py-3 border border-neutral-700 hover:border-white transition text-sm font-semibold"
            >
              View →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function ControlLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center px-4 py-2 border text-sm font-medium transition",
        active
          ? "bg-white text-black border-white"
          : "border-neutral-700 hover:border-white text-white",
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

function hrefWith(params: { category?: string; sort?: string }) {
  const qp = new URLSearchParams();
  if (params.category) qp.set("category", params.category);
  if (params.sort && params.sort !== "default") qp.set("sort", params.sort);
  const q = qp.toString();
  return q ? `/firearms?${q}` : "/firearms";
}

function normalizeCategory(value?: string): FirearmCategory | null {
  if (!value) return null;
  const v = value.toLowerCase();
  if (v === "bolt-action-rifles") return "bolt-action-rifles";
  if (v === "handguns") return "handguns";
  if (v === "rifle-style-pistols") return "rifle-style-pistols";
  if (v === "semi-automatic-rifles") return "semi-automatic-rifles";
  return null;
}

function normalizeSort(value?: string): SortKey {
  if (!value) return "default";
  const v = value.toLowerCase();
  if (v === "name" || v === "price") return v;
  return "default";
}

function sortProducts(items: FirearmProduct[], sort: SortKey) {
  if (sort === "name") return [...items].sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "price") return [...items].sort((a, b) => a.price - b.price);
  return items; // default = keep original order
}
