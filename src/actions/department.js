import { dummyDeptList } from "../constant";
import { sleep } from "../constant/helpers";

export const SET_DEP_IS_PROCESSING = 'SET_DEP_IS_PROCESSING'
export const SET_ALL_DEPARTMENTS = 'SET_ALL_DEPARTMENTS'
export const ADD_NEW_DEPARTMENT = 'ADD_NEW_DEPARTMENT'


const setDeptIsProcessing = isProcessing => ({
  type: SET_DEP_IS_PROCESSING,
  payload: {
    isProcessing
  }
})

export const setAllDepartments = departments => ({
  type: SET_ALL_DEPARTMENTS,
  payload: {
    departments,
    isProcessing: false
  }
})

export const addDepartment = department => ({
  type: ADD_NEW_DEPARTMENT,
  payload: {
    department
  }
})


/**
 * Fetch All Departments
 * @returns 
 */
export const fetchAllDepartments = () => async (dispatch) => {
  dispatch(setDeptIsProcessing(true));
  try {
    // Assuming we're fetching employee list to the server
    await sleep()
    dispatch(setAllDepartments(dummyDeptList));
    return true
  } catch (e) {
    dispatch(setDeptIsProcessing(false));
    console.log('fetchAllDepartments Error: ', e);
    return false
  }
}


/**
 * Add New Department
 * @returns 
 */
export const addNewDepartment = (info) => async (dispatch) => {
  dispatch(setDeptIsProcessing(true));
  try {
    // Assuming we're storing employee in the DB server
    await sleep(3000) // Meanwhile loading will be visible on the UI
    dispatch(addDepartment(info));
    return true
  } catch (e) {
    dispatch(setDeptIsProcessing(false));
    console.log('addNewDepartment Error: ', e);
    return false
  }
}
