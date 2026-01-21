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
          <ul className="list-disc pl-5 space-y-2">
            <li>Page Router vs App Router architecture</li>
            <li>Server components vs client components</li>
            <li>Data Fechting patterns (SSR, SSG, ISR)</li>
            <li>Page Router vs App Router architecture</li>
            <li>Page Router vs App Router architecture</li>
          </ul>
        </CardContent>
      </Card>
    </PageLayout>
  );
}
