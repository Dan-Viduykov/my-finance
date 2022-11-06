import { RootState } from "@/store/store";

export const selectSubscriptions = (state: RootState) => state.subscriptionsReducer;