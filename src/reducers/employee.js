import { SET_IS_PROCESSING, SET_ALL_EMPLOYEES } from '../actions/employee';
import { dummyEmployeeList } from '../constant';

const defaultState = {
  isProcessing: false,
  employees: dummyEmployeeList
};

const Employee = (state = defaultState, action) => {
  switch (action.type) {
    case SET_IS_PROCESSING:
    case SET_ALL_EMPLOYEES:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default Employee;
