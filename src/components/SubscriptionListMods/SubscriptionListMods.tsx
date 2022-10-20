import { FC, useState } from "react";
import Paragraph from "../UI/Paragraph";
import styles from "./SubscriptionListMods.module.scss";

interface SubscriptionListModsProps {
    className?: string;
}

const SubscriptionListMods: FC<SubscriptionListModsProps> = ({className}) => {
    const [ currentMode, setCurrentMode ] = useState();

    const handleClick = () => {
        
    }

    return (
        <div className={`${styles.modesList} ${className}`}>
            <input
                className={styles.input}
                type="radio"
                name="modes"
                id="modeBase"
                onClick={handleClick}
                defaultChecked
            />
            <label className={styles.label} htmlFor="modeBase">
                <Paragraph textStyle="ft__1">Your subscriptions</Paragraph>
            </label>
            <input
                className={styles.input}
                type="radio"
                name="modes"
                id="modePaymentDate"
                onClick={handleClick}
            />
            <label className={styles.label} htmlFor="modePaymentDate">
                <Paragraph textStyle="ft__1">Upcoming bills</Paragraph>
            </label>
        </div>
    )
}

export default SubscriptionListMods