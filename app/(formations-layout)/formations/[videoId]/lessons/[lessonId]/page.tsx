import { PageLayout } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { VIDEOS } from "@/app/formations/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const videos = VIDEOS;

  const result = videos.flatMap((video) => {
    const params = video.lessons.map((lesson) => ({
      videoId: video.id,
      lessonId: lesson.id,
    }));

    return params;
  });

  return result;
}

export default async function Page(props: {
  params: Promise<{ videoId: string; lessonId: string }>;
}) {
  const params = await props.params;

  const video = VIDEOS.find((video) => video.id === params.videoId);

  if (!video) {
    return <p>Invalid Video</p>;
  }

  const lesson = video.lessons.find(
    (lesson) => lesson.id === Number(params.lessonId),
  );

  if (!lesson) {
    notFound();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{lesson.title}</CardTitle>
        <CardDescription>{lesson.description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Link href={`/formations/${video.id}`}>Back</Link>
      </CardFooter>
    </Card>
  );
}
