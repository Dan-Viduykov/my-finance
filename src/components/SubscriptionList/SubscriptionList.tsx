import { FC } from "react";
import { selectSubscriptions } from "@/store/reducers/subscriptions/selectors";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import SubscriptionsItem from "@/components/SubscriptionItem";
import styles from "./SubscriptionList.module.scss";

interface SubscriptionListProps {
    className?: string;
}

const SubscriptionList: FC<SubscriptionListProps> = ({ className }) => {
    const { subscriptions } = useTypedSelector(selectSubscriptions)

    const listItems = subscriptions.map((sub, index) => {
        return (
            <li key={index} className={styles.item}>
                <SubscriptionsItem imageUrl={sub.picture.src} title={sub.name} price={sub.pricePaymentIn$} />
            </li>
        )
    })

    return (
        <ul className={`${styles.list} ${className}`}>
            {listItems}
        </ul>
    )
}

export default SubscriptionList