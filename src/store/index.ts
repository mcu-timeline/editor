import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { batchedSubscribe } from 'redux-batched-subscribe'
import { debounce } from 'lodash';

import TimelineReducer from '../modules/Timeline/store'

const debounceNotify = debounce(notify => notify());

export const store = configureStore({
  reducer: {
    timeline: TimelineReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [batchedSubscribe(debounceNotify)],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
