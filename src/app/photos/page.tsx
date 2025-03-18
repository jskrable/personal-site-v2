import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import resolveAssetPath from "../utils/resolveAssetPath";
import styles from "./page.module.css";

export default function PhotoBook() {
	const directory = resolveAssetPath("photos");
	const filenames = fs.readdirSync(directory);

	const photos = filenames.map((name) => path.join("/", "photos", name));

	return (
		<div className={styles.container}>
			<div className={styles.gallery}>
				{photos.map((path) => (
					<Link
						key={path}
						href={`/?path=${path}`}
						as={`/p${path}`}
						// ref={path === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
						className={styles.thumbnailContainer}
						shallow
					>
						<Image
							alt={path.split("/")[2].split(".")[0]}
							className={styles.thumbnail}
							placeholder="blur"
							blurDataURL={path}
							src={path}
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
