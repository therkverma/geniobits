import { ADD_NEW_DEPARTMENT, SET_ALL_DEPARTMENTS, SET_DEP_IS_PROCESSING } from '../actions/department';

const defaultState = {
  isProcessing: false,
  departments: []
};

const Department = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DEP_IS_PROCESSING:
    case SET_ALL_DEPARTMENTS:
      return Object.assign({}, state, action.payload);
    case ADD_NEW_DEPARTMENT: {
      const { department } = action.payload
      return {
        ...state,
        isProcessing: false,
        departments: [
          ...state.departments,
          department
        ]
      }
    }
    default:
      return state;
  }
};

export default Department;
