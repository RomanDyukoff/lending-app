import type { StaticImageData } from "next/image";

export interface SlideProps {
    src: StaticImageData;
    alt: string;
    handelClick?: () => void;
}
