"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../_components/Loading/Loading";
import styles from "./page.module.css";

export default function PhotoBook() {
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

	return (
		<div className={styles.container}>
			<div className={styles.gallery}>
				{photos.map(({ alt, id, src }) => (
					<Link
						key={id}
						href={`/photos/${id}`}
						className={styles.thumbnailContainer}
						shallow
					>
						<Image
							alt={alt}
							className={styles.thumbnail}
							placeholder="blur"
							blurDataURL={src}
							src={src}
							width={720}
							height={480}
							sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
						/>
					</Link>
				))}
			</div>
		</div>
	);
}
