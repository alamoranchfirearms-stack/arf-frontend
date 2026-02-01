import { redirect } from "next/navigation";

export default function HandgunsPage() {
  redirect("/firearms?category=handguns");
}
