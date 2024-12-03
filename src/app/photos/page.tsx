import fs from "node:fs";
import path from "node:path";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import styles from "./page.module.css";

export default function PhotoBook() {
	const dirRelativeToPublicFolder = "photos";

	const dir = path.resolve("./public", dirRelativeToPublicFolder);

	const filenames = fs.readdirSync(dir);

	const photos = filenames.map((name) =>
		path.join("/", dirRelativeToPublicFolder, name),
	);

	return (
		<div className={styles.photoContainer}>
			{photos.map((path) => (
				<AspectRatio.Root key={path} ratio={16 / 9}>
					<Image
						src={path}
						alt={path.split("/")[2].split(".")[0]}
						style={{ objectFit: "contain" }}
						fill
					/>
				</AspectRatio.Root>
			))}
		</div>
	);
}
