import { PageLayout } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Loading(props: {
  params: Promise<{ videoId: string; lessonId: string }>;
}) {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-10 w-full"></Skeleton>
        <Skeleton className="h-8 w-full"></Skeleton>
      </CardHeader>

      <CardFooter>
        <Skeleton className="h-8 w-full"></Skeleton>
      </CardFooter>
    </Card>
  );
}
