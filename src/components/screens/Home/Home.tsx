import { FC } from "react";
import SubscriptionsList from "@/components/SubscriptionList";
import SubscriptionListMods from "@/components/SubscriptionListMods";
import styles from "./Home.module.scss";

const Home: FC = () => {
    return (
        <div>
            <div className={styles.details}></div>
            <div className={styles.content}>
                <SubscriptionListMods />
                <SubscriptionsList /> 
            </div>
        </div>
    )
}

export default Home