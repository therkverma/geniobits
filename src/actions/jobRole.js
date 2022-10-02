import { dummyJobRoleList } from "../constant";
import { sleep } from "../constant/helpers";

export const SET_JR_IS_PROCESSING = 'SET_JR_IS_PROCESSING'
export const SET_ALL_JOB_ROLES = 'SET_ALL_JOB_ROLES'
export const ADD_NEW_JOB_ROLES = 'ADD_NEW_JOB_ROLES'


const setJRIsProcessing = isProcessing => ({
  type: SET_JR_IS_PROCESSING,
  payload: {
    isProcessing
  }
})

export const setAllJobRoles = jobRoles => ({
  type: SET_ALL_JOB_ROLES,
  payload: {
    jobRoles,
    isProcessing: false
  }
})

export const addJobRole = jobRole => ({
  type: ADD_NEW_JOB_ROLES,
  payload: {
    jobRole
  }
})


/**
 * Fetch All Job Roles
 * @returns 
 */
export const fetchAllJobRoles = () => async (dispatch) => {
  dispatch(setJRIsProcessing(true));
  try {
    // Assuming we're fetching job roles list to the server
    await sleep()
    dispatch(setAllJobRoles(dummyJobRoleList));
    return true
  } catch (e) {
    dispatch(setJRIsProcessing(false));
    console.log('fetchAllJobRoles Error: ', e);
    return false
  }
}


/**
 * Add New Department
 * @returns 
 */
export const addNewJobRole = (info) => async (dispatch) => {
  dispatch(setJRIsProcessing(true));
  try {
    // Assuming we're storing employee in the DB server
    await sleep(3000) // Meanwhile loading will be visible on the UI
    dispatch(addJobRole(info));
    return true
  } catch (e) {
    dispatch(setJRIsProcessing(false));
    console.log('addNewJobRole Error: ', e);
    return false
  }
}
