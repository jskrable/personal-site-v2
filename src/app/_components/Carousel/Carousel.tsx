"use client";
import type { PhotoProps } from "@/app/_types/photos";
import * as Dialog from "@radix-ui/react-dialog";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	Cross2Icon,
} from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { type KeyboardEventHandler, useMemo, useState } from "react";
import styles from "./component.module.css";

type CarouselProps = {
	photos: PhotoProps[];
	startingId?: string;
};

const Carousel = ({ photos, startingId }: CarouselProps) => {
	const router = useRouter();

	const [open, setOpen] = useState(true);
	const startingIndex = useMemo(
		() => photos.findIndex((photo) => photo.id === startingId),
		[photos, startingId],
	);

	const [currentIndex, setCurrentIndex] = useState(startingIndex);
	const totalLength = photos.length;

	const handleNext = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setCurrentIndex((prevIndex) => (prevIndex + 1) % totalLength);
	};

	const handlePrev = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setCurrentIndex((prevIndex) => (prevIndex - 1 + totalLength) % totalLength);
	};

	const handleOpenChange = (open: boolean) => {
		if (!open) {
			router.push("/photos");
		} else {
			setOpen(open);
		}
	};

	const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
		console.log(e);
		e.preventDefault();
		switch (e.key) {
			case "ArrowRight":
				return handleNext(e);
			case "ArrowLeft":
				return handlePrev(e);
			default:
				break;
		}
	};

	return (
		<div className={styles.container}>
			<Dialog.Root open={open} onOpenChange={handleOpenChange}>
				<Dialog.Portal>
					<Dialog.Overlay className={styles.dialogOverlay} />
					<Dialog.Content
						className={styles.dialogContent}
						onKeyDown={handleKeyDown}
					>
						<Dialog.Title />
						<div className={styles.carouselContainer}>
							<Dialog.Close asChild>
								<Button className={styles.closeButton} aria-label="Close">
									<Cross2Icon width={24} height={24} />
								</Button>
							</Dialog.Close>

							<Button
								className={styles.navButton}
								onClick={handlePrev}
								aria-label="Previous image"
							>
								<ChevronLeftIcon width={24} height={24} />
							</Button>

							<div className={styles.imageContainer}>
								<Image
									alt={photos[currentIndex]?.alt}
									className={styles.carouselImage}
									placeholder="blur"
									blurDataURL={photos[currentIndex]?.src}
									src={photos[currentIndex]?.src}
									width={1920}
									height={1280}
									priority
								/>
								<div className={styles.imageCaption}>
									{`Image ${currentIndex + 1} of ${photos.length}`}
								</div>
							</div>

							<Button
								className={styles.navButton}
								onClick={handleNext}
								aria-label="Next image"
							>
								<ChevronRightIcon width={24} height={24} />
							</Button>
						</div>
					</Dialog.Content>
				</Dialog.Portal>
			</Dialog.Root>
		</div>
	);
};

export default Carousel;
