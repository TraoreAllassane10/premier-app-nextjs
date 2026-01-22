import { PageLayout } from "@/components/layout";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  return (
    <div>
      <header className="border-b  -mx-4 px-4 pb-2 mb-4">
        <Link href="/formations" className="font-bold">
          /formations
        </Link>
      </header>
      {props.children}
    </div>
  );
}
