import { FC } from "react";
import { ContactType } from "../../../types";
import Title from "../title/Title";
import styles from "./ContactInfo.module.scss";

type ContactInfoProps = {
	contact: ContactType | null;
};

const ContactInfo: FC<ContactInfoProps> = ({ contact }) => {
	const { name, email, address } = contact || {};
	const { street, suite, city, zipcode } = address || {};
	if (!contact) {
		return <Title someTitle={"Empty contact"} />;
	}
	return (
		<>
			{name && <Title someTitle={name} />}
			<div className={styles.email}>
				<strong>Email: </strong>
				{email}
			</div>
			<div>
				<strong>Address: </strong>
				{`${street}, ${suite}, ${city}, ${zipcode}`}
			</div>
		</>
	);
};

export default ContactInfo;
