import { FC } from "react";
import SubscriptionsList from "@/components/SubscriptionList";
import SubscriptionListMods from "@/components/SubscriptionListMods";
import styles from "./Home.module.scss";
import SubscriptionStatistics from "@/components/SubscriptionStatistics";

const Home: FC = () => {
    return (
        <div>
            <div className={styles.topSection}>
                <div className={styles.details}>
                    <SubscriptionStatistics />
                </div>
            </div>
            <div className={styles.content}>
                <SubscriptionListMods className={styles.modeList} />
                <SubscriptionsList className={styles.subList} /> 
            </div>
        </div>
    )
}

export default Home