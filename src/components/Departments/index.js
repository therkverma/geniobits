import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewDepartment } from '../../actions/department';
import AddNewForm from '../AddNewForm';
import CommonInput from '../common/CommonInput';
import SpinLoader from '../common/SpinLoader';
import DepartmentCard from '../DepartmentCard';
import './index.scss';

const Departments = () => {
    const { departments, isProcessing } = useSelector(state => state.department)
    const [show, setShow] = useState(false)
    const [term, setTerm] = useState("")
    const dispatch = useDispatch()

    const onSubmit = async (info) => {
        const resp = await dispatch(addNewDepartment(info))
        if (!!resp) {
            setShow(false)
        }
    }

    const filteredRec = departments.filter(item => item.dep_name.toLowerCase().includes(term.toLowerCase()))
    return (
        <div className="departments-container">
            {!!show && <AddNewForm handleClose={() => setShow(false)} onSubmit={onSubmit} />}
            {!!isProcessing && <SpinLoader />}
            <div className='tile-sec-part'>
                <div className='header-sec ai-center'>
                    <img src={require('../../assets/images/back.svg').default} alt="Back" />
                    {"Century >"} <span>Divisions</span>
                </div>
                <div className='card-item-holder'>
                    {
                        !!filteredRec && !!filteredRec.length && filteredRec.map((d, i) => <DepartmentCard info={d} key={i} />)

                    }
                </div>
            </div>
            <div className='filter-sec-part'>
                <button className='add-new-btn' onClick={() => setShow(true)}>+ Add New Button</button>
                <div className='filter-container'>
                    <CommonInput label='Filter By Department' onChange={e => setTerm(e.target.value)} value={term} placeholder="Filter By Department" />
                </div>
            </div>
        </div>
    );
}

export default Departments;
