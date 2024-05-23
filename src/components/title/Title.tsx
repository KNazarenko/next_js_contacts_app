import { FC } from "react";
import styles from "./Title.module.scss";

type TytleProps = {
	someTitle: string;
};

const Title: FC<TytleProps> = ({ someTitle }) => {
	return <h1 className={styles.title}>{someTitle} page</h1>;
};

export default Title;
