import { FC } from "react";
import SubscriptionsList from "@/components/SubscriptionList";
import SubscriptionListMods from "@/components/SubscriptionListMods";
import styles from "./Home.module.scss";

const Home: FC = () => {
    return (
        <div>
            <div className={`${styles.details} ${styles.topSection}`}></div>
            <div className={styles.content}>
                <SubscriptionListMods className={styles.modeList} />
                <SubscriptionsList className={styles.subList} /> 
            </div>
        </div>
    )
}

export default Home