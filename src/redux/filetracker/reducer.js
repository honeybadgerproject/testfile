import { Map } from 'immutable';
import { getDefaultPath } from '../../helpers/urlSync';
import actions, { getView } from './actions';

import {
  ADD_NEW_CATEGORY,
  PRINT_BROWSE_FILES
} from './types';

const preKeys = getDefaultPath();

/*const initState = new Map({
  categoryList: [ {
    title: 'geometri basic',
    group: 'math'
  }]
});*/

const initState = {
  categoryList: [ {
    title: 'geometri basic',
    group: 'math'
  }],
  filesList: [ ],
  selectedBrowseFile: ''
}


export default function filetrackerReducer(state = initState, action) {
  switch (action.type) {
    case ADD_NEW_CATEGORY:
      console.log("payload", action.payload )
      return {
        ...state,
        categoryList: [ ...state.categoryList, action.payload]
      }
    case PRINT_BROWSE_FILES:
      return {
        ...state,
        selectedBrowseFile: action.payload
      }
    default:
      return state;
  }
  return state;
}
