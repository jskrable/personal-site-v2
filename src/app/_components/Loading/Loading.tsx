import { Spinner } from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/props";
import styles from "./component.module.css";

interface LoadingProps {
	fullPage?: boolean;
	size?: Responsive<"1" | "2" | "3">;
}

export default function Loading({ fullPage = false }: LoadingProps) {
	if (fullPage)
		return (
			<div className={styles.container}>
				<Spinner size="3" />
			</div>
		);
	return <Spinner size="1" />;
}
