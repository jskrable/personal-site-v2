"use client";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import type { IconProps } from "@radix-ui/react-icons/dist/types";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import type { JSX, RefAttributes } from "react";
import styles from "./component.module.css";

interface NavbarProps {
	isMobile?: boolean;
}

const navItems = [
	{ label: "home", path: "/" },
	{ label: "photos", path: "/photos" },
	{ label: "projects", path: "/projects" },
];

const MenuButton = (
	props: JSX.IntrinsicAttributes & IconProps & RefAttributes<SVGSVGElement>,
) => (
	<Button>
		<HamburgerMenuIcon {...props} />
	</Button>
);

export default ({ isMobile = false }: NavbarProps) => {
	if (isMobile) {
		return (
			<NavigationMenu.Root className={styles.navRoot}>
				<NavigationMenu.List className={styles.navList}>
					<NavigationMenu.Item className={styles.navItem}>
						<NavigationMenu.Trigger asChild className={styles.trigger}>
							<MenuButton />
						</NavigationMenu.Trigger>
						<NavigationMenu.Content className={styles.dialogContent}>
							{navItems.map(({ label, path }) => (
								<Link key={label} className={styles.navMenuLink} href={path}>
									{label}
								</Link>
							))}
						</NavigationMenu.Content>
					</NavigationMenu.Item>
				</NavigationMenu.List>
			</NavigationMenu.Root>
		);
	}
	return (
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
};
