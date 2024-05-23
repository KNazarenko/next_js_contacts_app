import Title from "@/components/title/Title";
import Image from "next/image";
import tigerImage from "../../../public/tiger1.webp";

export default function About() {
	return (
		<>
			<Title someTitle="About" />
			<Image
				src={tigerImage}
				width={1200}
				height={700}
				alt="tiger"
				placeholder="blur"
			/>
		</>
	);
}
