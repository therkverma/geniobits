import { combineReducers } from 'redux'
import employee from './employee'
import department from './department'

const rootReducer = combineReducers({
    employee,
    department
})

export default rootReducer