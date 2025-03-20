import Carousel from "@/app/_components/Carousel/Carousel";
import data from "@/app/api/photos/data.json";

export default async ({ params }: { params: Promise<{ id: string }> }) => {
	const { id } = await params;
	return <Carousel photos={data} startingId={id} />;
};
