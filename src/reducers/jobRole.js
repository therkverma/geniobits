import { ADD_NEW_JOB_ROLES, SET_ALL_JOB_ROLES, SET_JR_IS_PROCESSING } from '../actions/jobRole';

const defaultState = {
  isProcessing: false,
  jobRoles: []
};

const JobRole = (state = defaultState, action) => {
  switch (action.type) {
    case SET_JR_IS_PROCESSING:
    case SET_ALL_JOB_ROLES:
      return Object.assign({}, state, action.payload);
    case ADD_NEW_JOB_ROLES: {
      const { jobRole } = action.payload
      return {
        ...state,
        isProcessing: false,
        jobRoles: [
          ...state.jobRoles,
          jobRole
        ]
      }
    }
    default:
      return state;
  }
};

export default JobRole;
