import { FC } from "react";
import Image from "next/image";
import Paragraph from "@/components/UI/Paragraph";
import styles from "./SubscriptionItem.module.scss";

interface SubscriptionItemProps {
    className?: string;
    imageUrl?: string;
    title?: string;
    price?: number;
}

const SubscriptionItem: FC<SubscriptionItemProps> = (props) => {
    const { className, imageUrl = '', title, price } = props;

    return (
        <div className={`${styles.wrap} ${className}`}>
            <Image className={styles.image} src={imageUrl} alt='' width={40} height={40} />
            <Paragraph className={styles.title} textStyle='ft__2'>{title}</Paragraph>
            <Paragraph className={styles.price} textStyle='ft__2'>${price}</Paragraph>
        </div>
    )
}

export default SubscriptionItem