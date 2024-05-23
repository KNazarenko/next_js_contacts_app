"use client";

import Title from "@/components/title/Title";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Products() {
	const router = useRouter();
	useEffect(() => {
		setInterval(() => {
			router.push("/main");
		}, 3000);
	}, []);
	return (
		<>
			<Title someTitle="Products" />
			<p>
				This is empty page so you will be redirect to Main page in 3 sec
			</p>
		</>
	);
}
