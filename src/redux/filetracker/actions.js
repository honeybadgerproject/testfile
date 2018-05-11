import {
  ADD_NEW_CATEGORY,
  PRINT_BROWSE_FILES
} from './types';

import listReactFiles from 'list-react-files'

export function addNewCategory(title, group) {
  var newCategory = {
    title: title,
    group: group
  };
  return {
    type: ADD_NEW_CATEGORY,
    payload: newCategory
  }
}

export function printBrowseFiles() {
  listReactFiles(".").then(files => console.log(files))

  return  {
    type: PRINT_BROWSE_FILES,
    payload: "empty"
  }
}
