export type FirearmCategory =
  | "bolt-action-rifles"
  | "handguns"
  | "rifle-style-pistols"
  | "semi-automatic-rifles";

export type FirearmProduct = {
  slug: string;
  name: string;
  sku?: string;
  price: number;
  category: FirearmCategory;
  description: string;
  image?: string; // optional, put files in /public and set e.g. "/products/triac-g17.jpg"
};

export const firearms: FirearmProduct[] = [
  {
    slug: "triac-glock-17-gen-4-5",
    name: "Triarc Glock 17 Gen 4/5",
    sku: "GL-17FT-TRIA",
    price: 1450,
    category: "handguns",
    description:
      "Glock 17 with DPP cut, Cerakote tan frame/slide, professionally stippled, threaded barrel.",
    image: "", // add later
  },
  {
    slug: "hk-usp-45-compact-stainless",
    name: "HK USP .45 Compact Stainless",
    sku: "HK-USPC-45ST",
    price: 1300,
    category: "handguns",
    description:
      "USP Compact in .45 ACP, stainless slide, polymer frame, DA/SA, two magazines.",
    image: "",
  },
  {
    slug: "aics-remington-700-300wm-package",
    name: "AICS Remington 700 .300WM MKII Package",
    sku: "AT-MKII-300WM",
    price: 2350,
    category: "bolt-action-rifles",
    description:
      "Remington 700 in .300 Win Mag with AICS chassis and Burris XTR II 8-40 optic.",
    image: "",
  },
];
