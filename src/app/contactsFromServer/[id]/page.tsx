"use client";
import ContactInfo from "@/components/contactInfo/ContactInfo";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ContactType } from "../../../../types";

const Contact = () => {
	const params = useParams<{ id: string }>();
	const [contact, setContact] = useState<ContactType | null>(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setContact(data);
			});
	}, []);

	return <ContactInfo contact={contact} />;
};

export default Contact;
