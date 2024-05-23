"use client";
import Title from "@/components/title/Title";
import { useEffect, useState } from "react";
import { ContactType } from "../../../types";

const Contacts = () => {
	const [contacts, setContacts] = useState<Array<ContactType> | []>([]);
	console.log("Contacts");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setContacts(data);
			});
	}, []);
	return (
		<>
			<Title someTitle="Contacts from Client" />
			<ul>
				{contacts &&
					contacts.map(({ id, name, email }) => (
						<li key={id}>
							<strong>{name}</strong>
							{email}
						</li>
					))}
			</ul>
		</>
	);
};

export default Contacts;
