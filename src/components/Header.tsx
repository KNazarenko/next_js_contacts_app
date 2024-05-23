import { FC } from "react";

const Header: FC = () => {
	return (
		<div className="header">
			<a href="/main">Main</a>
			<a href="/about">About</a>
			<a href="/products">Products</a>
			<a href="/contactsFromClient">Contacts from Client</a>
			<a href="/contactsFromServer">Contacts from Server</a>
		</div>
	);
};

export default Header;
