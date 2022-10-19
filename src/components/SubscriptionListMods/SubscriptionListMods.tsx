import { FC } from "react";
import Paragraph from "../UI/Paragraph";
import styles from "./SubscriptionListMods.module.scss";

const SubscriptionListMods: FC = () => {
    return (
        <ul className={styles.modesList}>
            <li className={styles.modeItem}>
                <Paragraph textStyle="ft__1">Your subscriptions</Paragraph>
            </li>
            <li className={styles.modeItem}>
                <Paragraph textStyle="ft__1">Upcoming bills</Paragraph>
            </li>
        </ul>
    )
}

export default SubscriptionListMods