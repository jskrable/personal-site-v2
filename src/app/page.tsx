import {
	DownloadIcon,
	GitHubLogoIcon,
	LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import styles from "./page.module.css";

export default () => {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div>
					Experienced and versatile full stack software engineer and IT
					generalist with 10 years of professional experience. In my current
					role at Beam, a public benefits facilitation SaaS company, I joined as
					a software engineer supporting an existing legacy application. Despite
					having no prior experience with the tech stack, I quickly mastered
					Typescript, React, and GraphQL to build a custom application
					supporting a wide range of public benefits. This expanded the
					company's reach while enhancing software performance and capabilities.
					I'm seeking an engineering lead and architect position with an
					organization dedicated to creating positive social impact through
					innovative technology solutions.
				</div>
				<div className={styles.ctas}>
					<a
						href="https://github.com/jskrable"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button type="button">
							<GitHubLogoIcon />
							Github
						</Button>
					</a>
					<a
						href="https://linkedin.com/in/jackskrable"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button type="button">
							<LinkedInLogoIcon />
							LinkedIn
						</Button>
					</a>
					<a
						href="/files/jack-skrable.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button type="button">
							<DownloadIcon />
							Resume
						</Button>
					</a>
				</div>
			</main>
			<footer className={styles.footer}>
				© Jack Skrable {new Date().getFullYear()}
			</footer>
		</div>
	);
};
