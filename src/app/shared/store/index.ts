import { createSelector } from 'reselect';
// Recuder
import * as fromTest from './reducers/test.reducer'
// Effect
import { TestEffects } from './effects/test.effect';

/**
 * We treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  userInfo: fromTest.State
}

/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const reducers = {
  userInfo: fromTest.reducer
};

/**
 * Effects
 */
export const effects = [
  TestEffects
]

/**
 * Selector
 * @param state 
 */
export const getUserInfoState = (state: State) => state.userInfo;
export const getUserInfoLoaded = createSelector(getUserInfoState, fromTest.getLoaded);
export const getUserInfoLoading = createSelector(getUserInfoState, fromTest.getLoading);
export const getUserInfo = createSelector(getUserInfoState, fromTest.getUser);
export const getUserInfoFailed = createSelector(getUserInfoState, fromTest.getFailed);