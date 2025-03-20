import data from "@/app/api/photos/data.json";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default () => {
	return (
		<div className={styles.container}>
			<div className={styles.gallery}>
				{data.map(({ alt, id, src }) => (
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
};
