import * as actions from '../actions/kjh-md.action'

export interface State {
    loading: boolean;
    loaded: boolean;
    failed: boolean;
    user: JSON;
}

const INITIAL_STATE: State = {
    loading: false,
    loaded: false,
    failed: false,
    user: <JSON>{}
}

export function reducer(state = INITIAL_STATE, action: actions.Actions): State {
    if (!action) return state;

    switch (action.type) {
        case actions.ActionTypes.GET_USER_DETAIL_KJH:
            console.log("GET_USER_DETAIL_KJH")
            return Object.assign({}, state, {
                loading: true,
                loaded: false,
                failed: false
            })
        case actions.ActionTypes.GET_USER_DETAIL_SUCCESS_KJH:
            console.log("GET_USER_DETAIL_SUCCESS_KJH")
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                failed: false,
                user: action.payload
            })
        case actions.ActionTypes.GET_USER_DETAIL_FAIL_KJH:
            console.log("GET_USER_DETAIL_FAIL_KJH")
            return Object.assign({}, INITIAL_STATE, { failed: true });
        default: {
            return state;
        }
    }

}

export const getUser = (state: State) => state.user;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getFailed = (state: State) => state.failed;