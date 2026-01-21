import { PageLayout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <PageLayout>
      <Card>
        <CardHeader>
          <CardTitle>Plan de la formation</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Link
            href="/formations/video-1"
            className="text-indigo-500 underline"
          >
            Fundamentals
          </Link>
          <Link
            href="/formations/video-2"
            className="text-indigo-500 underline"
          >
            Server Component + Prisma
          </Link>
          <Link
            href="/formations/video-3"
            className="text-indigo-500 underline"
          >
            Server Function + Mutation
          </Link>
        </CardContent>
      </Card>
    </PageLayout>
  );
}
