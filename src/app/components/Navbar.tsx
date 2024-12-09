import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import styles from "./component.module.css";

const navItems = [
	{ label: "Home", path: "/" },
	{ label: "Photos", path: "/photos" },
];

export default () => (
	<NavigationMenu.Root className={styles.navRoot}>
		<NavigationMenu.List className={styles.navList}>
			{navItems.map(({ label, path }) => (
				<NavigationMenu.Item key={label} className={styles.navItem}>
					<Link className={styles.navMenuLink} href={path}>
						{label}
					</Link>
				</NavigationMenu.Item>
			))}
		</NavigationMenu.List>
	</NavigationMenu.Root>
);
