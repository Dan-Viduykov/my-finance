import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { subscriptionsState, ISubscription } from './types';

import logoSpotify from '@/assets/img/Spotify-Logo.png'
import logoYoutube from '@/assets/img/YT-Premium-Logo.png'

const initialState: subscriptionsState = {
  subscriptions: [
    {
        name: 'Spotify',
        description: 'Music app',
        category: 'Enterteintment',
        firstPayment: new Date('1.12.2022'),
        pricePaymentIn$: 5.99,
        picture: logoSpotify,
    },
    {
        name: 'YouTube Premium',
        description: 'videp player app',
        category: 'Enterteintment',
        firstPayment: new Date('31.12.2022'),
        pricePaymentIn$: 18.99,
        picture: logoYoutube,
    }
  ],
}

export const subscriptionsSlice = createSlice({
  name: 'subscriptions',
  initialState,
  reducers: {
    addSubscription: (state, action: PayloadAction<ISubscription>) => {
        state.subscriptions.push(action.payload)
    }
  },
})

export const {
    addSubscription
} = subscriptionsSlice.actions

export const subscriptionsReducer = subscriptionsSlice.reducer;