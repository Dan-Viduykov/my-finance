import { FC } from "react";
import SubscriptionsItem from "@/components/SubscriptionItem";

import logoSpotify from '@/assets/img/Spotify-Logo.png'
import logoOneDrive from '@/assets/img/OneDrive-Logo.png'
import logoNetflix from '@/assets/img/Netflix-Logo.png'
import logoHbo from '@/assets/img/HBO-GO-Logo.png'
import logoYoutube from '@/assets/img/YT-Premium-Logo.png'

import styles from "./SubscriptionList.module.scss";

const subs = [
    {image: logoSpotify, title: 'Spotify', price: 5.99},
    {image: logoOneDrive, title: 'Microsoft OneDrive', price: 29.99},
    {image: logoNetflix, title: 'Netflix', price: 37.99},
    {image: logoHbo, title: 'HGBO GO', price: 5.99},
    {image: logoYoutube, title: 'YouTube Premium', price: 18.99}
]

const SubscriptionList: FC = () => {

    const listItems = subs.map((sub, index) => {
        return (
            <li key={index} className={styles.item}>
                <SubscriptionsItem imageUrl={sub.image.src} title={sub.title} price={sub.price} />
            </li>
        )
    })

    return (
        <ul className={styles.list}>
            {listItems}
        </ul>
    )
}

export default SubscriptionList