export type AddressType = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
};

export type ContactType = {
	name: string;
	email: string;
	address: AddressType;
	id: number;
	username: string;
	phone: string;
	website: string;
};

// export type ContactsType = {
// 	id: number;
// 	name: string;
// 	email: string;
// 	username: string;
// 	phone: string;
// 	website: string;
// };
