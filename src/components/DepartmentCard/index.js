import { useSelector } from 'react-redux'
import './index.scss'

const DepartmentCard = ({ info }) => {
    const { employees } = useSelector(state => state.employee)
    const inchargeInfo = id => {
        const emmpDetail = employees.find(emp => (emp.id).toString() === (id).toString())
        return !!emmpDetail ? emmpDetail : { name: 'N/A', email: 'N/A' }
    }

    return (
        <div className="d-item-container">
            <div className='heading-info between-flex pl-10 pr-10'>
                {info.dep_name}
                <button className='center-flex'>...</button>
            </div>
            <div className='d-item-detail'>
                <div>Incharge :{inchargeInfo(info.incharge_id).name}</div>
                <div>E-mail ID :{inchargeInfo(info.incharge_id).email}</div>
                <div>Total Employees :{info.total_emp}</div>
            </div>
        </div>
    );
}

export default DepartmentCard