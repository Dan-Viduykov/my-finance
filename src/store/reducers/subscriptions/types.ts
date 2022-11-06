import { StaticImageData } from "next/image";

export interface ISubscription {
    name: string;
    description: string;
    category: string;
    firstPayment: Date;
    pricePaymentIn$: number;
    picture: StaticImageData;
}

export interface subscriptionsState {
    subscriptions: ISubscription[];
}