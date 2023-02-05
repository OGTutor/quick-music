import { Context, createWrapper } from 'next-redux-wrapper';
import { createStore, Store, applyMiddleware, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk/es/types';
import { reducer, RootState } from './reducers';

const makeStore = (context: Context) =>
    createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
    debug: true,
});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
