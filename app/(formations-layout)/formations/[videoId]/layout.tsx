import { PageLayout } from "@/components/layout";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { VIDEOS } from "../data";
import { notFound } from "next/navigation";

export default async function Layout(
  props: PropsWithChildren<{ params: Promise<{ videoId: string }> }>,
) {
  const params = await props.params;

  const video = VIDEOS.find((video) => video.id === params.videoId);

  if (!video) {
    notFound();
  }
  return (
    <PageLayout>
      <header className="border-b flex items-center gap-2 -mx-4 px-4 pb-2">
        <Link href={`/formations/${params.videoId}`} className="font-bold">
          /formations/{params.videoId}
        </Link>
        {video.lessons.map((lesson) => (
          <Link
            href={`/formations/${params.videoId}/lessons/${lesson.id}`}
            key={lesson.id}
            className="text-sm"
          >
            {lesson.title}
          </Link>
        ))}

        <Link
          href={`/formations/${params.videoId}/lessons/404`}
          className="text-sm"
        >
          404
        </Link>
      </header>
      {props.children}
    </PageLayout>
  );
}
