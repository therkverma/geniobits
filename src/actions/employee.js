export const SET_IS_PROCESSING = 'SET_IS_PROCESSING'
export const SET_ALL_EMPLOYEES = 'SET_ALL_EMPLOYEES'

export const setIsProcessing = isProcessing => ({
  type: SET_IS_PROCESSING,
  payload: { isProcessing }
})

export const setAllEmployees = employees => ({
  type: SET_ALL_EMPLOYEES,
  payload: {
    employees,
    isProcessing: false
  }
})