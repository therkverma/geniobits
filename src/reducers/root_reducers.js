import { combineReducers } from 'redux'
import employee from './employee'
import jobRole from './jobRole'
import department from './department'

const rootReducer = combineReducers({
    employee,
    jobRole,
    department
})

export default rootReducer