import data from "@/app/api/projects/data.json";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import styles from "./page.module.css";

export default () => {
	return (
		<div className={styles.page}>
			{data.map((project) => (
				<div key={project.title} className={styles.card}>
					<h2>{project.title}</h2>
					<Image
						alt={project.description}
						className={styles.thumbnail}
						placeholder="blur"
						blurDataURL={project.src}
						src={project.src}
						width={720}
						height={480}
						sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
					/>
					<p>{project.description}</p>
					<a
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.githubLink}
					>
						<Button type="button">
							<GitHubLogoIcon />
							Github
						</Button>
					</a>
				</div>
			))}
		</div>
	);
};
