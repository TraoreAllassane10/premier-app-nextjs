import { PageLayout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { VIDEOS } from "./data";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "Plan de formation",
  description: "Blabla",
};

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Plan de la formation</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {VIDEOS.map((video) => (
          <Link
            href={`/formations/${video.id}`}
            className="text-indigo-500 underline"
          >
            {video.title}
          </Link>
        ))}

        <Link href={`/formations/404`} className="text-indigo-500 underline">
          404
        </Link>
      </CardContent>
    </Card>
  );
}
