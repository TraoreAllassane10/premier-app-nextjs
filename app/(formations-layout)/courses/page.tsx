import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { SelectStar } from "./select-star";
import { revalidatePath } from "next/cache";

export default async function Page() {
  const reviews = await prisma.review.findMany();

  const setNewStar = async (reviewId: string, star: number) => {
    "use server";
    await prisma.review.update({
      where: {
        id: reviewId,
      },
      data: {
        star,
      },
    });

    revalidatePath("/courses")
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Courses !</CardTitle>
      </CardHeader>
      <CardContent>
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <SelectStar
                star={review.star}
                setNewStar={setNewStar.bind(null, review.id)}
              />
              <CardTitle>{review.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{review.review}</p>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
