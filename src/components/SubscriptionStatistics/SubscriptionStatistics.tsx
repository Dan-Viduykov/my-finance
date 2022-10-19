import { FC } from "react";
import Paragraph from "../UI/Paragraph";
import styles from "./SubscriptionStatistics.module.scss";

const SubscriptionStatistics: FC = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <Paragraph className={styles.description}>Active subs</Paragraph>
                <p className={styles.value}>{12}</p>
            </li>
            <li className={styles.item}>
                <Paragraph className={styles.description}>Highest subs</Paragraph>
                <p className={styles.value}>${19.99}</p>
            </li>
            <li className={styles.item}>
                <Paragraph className={styles.description}>Lowest subs</Paragraph>
                <p className={styles.value}>${5.99}</p>
            </li>
        </ul>
    )
}

export default SubscriptionStatistics