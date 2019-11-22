import * as actions from '../actions/mina.action';

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
  if(!action) return state;

  switch(action.type) {
    case actions.ActionTypes.GET_MINA_DETAIL:
      console.log("GET_MINA_DETAIL");
      return Object.assign({}, state, {
          loading: true,
          loaded: false,
          failed: false
      });
    case actions.ActionTypes.GET_MINA_DETAIL_SUCCESS:
      console.log("GET_MINA_DETAIL_SUCCESS");
      return Object.assign({}, state, {
          loading: false,
          loaded: true,
          failed: false,
          user: action.payload
      });
    case actions.ActionTypes.GET_MINA_DETAIL_FAIL:
      console.log("GET_MINA_DETAIL_FAIL");
      return Object.assign({}, INITIAL_STATE, {
        failed: true
      });
    default: {
      return state;
    }
  }

}

export const getMina = (state: State) => state.user;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getFailed = (state: State) => state.failed;