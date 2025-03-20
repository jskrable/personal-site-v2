"use client";
import Carousel from "@/app/_components/Carousel/Carousel";
import Loading from "@/app/_components/Loading/Loading";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function PhotoDetail() {
	const { id } = useParams<{ id: string }>();
	const [photos, setImages] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchImages() {
			try {
				const response = await fetch("/api/photos");
				const data = await response.json();
				setImages(data.photos);
			} catch (error) {
				console.error("Error fetching images:", error);
			} finally {
				setLoading(false);
			}
		}
		fetchImages();
	}, []);

	if (loading) return <Loading fullPage />;
	return <Carousel photos={photos} startingId={id} />;
}
