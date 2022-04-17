import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

// https://www.youtube.com/watch?v=bpbLq6NxIm8
// https://github.com/mayank7924/nextjs-with-redux/blob/redux-toolkit/store/store.js

// Redux Toolkit with Next JS does not seem to be working:
// changing page causes the global State to reset...
// https://stackoverflow.com/questions/68346822/how-to-implement-redux-toolkit-and-next-js-and-not-lose-ssr

// Use Vanilla Redux instead.

import theme from '@store/themeSlice';

const combinedReducer = combineReducers({
    theme
})

const masterReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
        }
        return nextState;
    } else {
        return combinedReducer(state, action)
    }
}

export const makeStore = () =>
    configureStore({
        reducer: masterReducer,
    })



export const wrapper = createWrapper(makeStore, {
    debug: true
});