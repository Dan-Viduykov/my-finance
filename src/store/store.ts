import { subscriptionsReducer } from './reducers/subscriptions/slice';
import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit'

export function makeStore() {
    return configureStore({
        reducer: {
            subscriptionsReducer
        },
    })
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore)