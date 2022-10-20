import { FC } from "react";
import Paragraph from "../UI/Paragraph";
import styles from "./SubscriptionStatistics.module.scss";

interface SubscriptionStatisticsProps {
    className?: string;
}

const SubscriptionStatistics: FC<SubscriptionStatisticsProps> = ({className}) => {
    return (
        <ul className={`${styles.list} ${className}`}>
            <li className={`${styles.item} ${styles.gradientBorder}`}>
                <Paragraph className={styles.description} textStyle={'ft__1'}>Active subs</Paragraph>
                <Paragraph className={styles.value} textStyle={'ft__2'}>{12}</Paragraph>
            </li>
            <li className={`${styles.item} ${styles.gradientBorder}`}>
                <Paragraph className={styles.description} textStyle={'ft__1'}>Highest subs</Paragraph>
                <Paragraph className={styles.value} textStyle={'ft__2'}>${19.99}</Paragraph>
            </li>
            <li className={`${styles.item} ${styles.gradientBorder}`}>
                <Paragraph className={styles.description} textStyle={'ft__1'}>Lowest subs</Paragraph>
                <Paragraph className={styles.value} textStyle={'ft__2'}>${5.99}</Paragraph>
            </li>
        </ul>
    )
}

export default SubscriptionStatistics