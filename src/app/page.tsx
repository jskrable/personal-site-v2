import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				Experienced and alloyed full stack software engineer and IT generalist
				with 10 years of professional experience. In my current role for Beam, a
				public benefits facilitation SaaS company, I came on as a software
				engineer supporting an existing legacy application. Despite having no
				prior experience with the tech stack, I quickly taught myself
				Typescript, React, and GraphQL and built a custom application to support
				a wide range of public benefits, expanding the company’s reach as well
				as the performance and capabilities of the software. I’m looking to
				continue my work as an engineering lead and architect with an
				organization focused on making changes in the climate sector.
			</main>
			<footer className={styles.footer}>
				© Jack Skrable {new Date().getFullYear()}
			</footer>
		</div>
	);
}
