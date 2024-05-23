import Title from "@/components/title/Title";
import Link from "next/link";
import { ContactType } from "../../../types";
import { FC } from "react";

async function getData() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

const Contacts: FC = async () => {
	const contacts: Array<ContactType> = await getData();

	return (
		<>
			<Title someTitle="Contacts from Server" />
			<ul>
				{contacts &&
					contacts.map(({ id, name, email }) => (
						<li key={id}>
							<Link href={`/contactsFromServer/${id}`}>
								{name}
							</Link>
							{email}
						</li>
					))}
			</ul>
		</>
	);
};

export default Contacts;
