import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// how to apply those action types into a reducer
const reducer = (state: RepoState, action: Action): RepoState => {
  switch (action.type) {
    // action we see as soon as a user types in the search button
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    // payload will contain the error message

    default:
      return state;
  }
};

export default reducer;
