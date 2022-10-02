import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewJobRole, fetchAllJobRoles } from '../../actions/jobRole';
import AddNewJobRole from '../AddNewJobRole';
import CommonTable from '../common/CommonTable';
import SpinLoader from '../common/SpinLoader';
import './index.scss';

const columns = [
    {
        Header: 'Job Role',
        accessor: 'job_role',
    },
    {
        Header: 'CTC',
        accessor: 'ctc',
    },
    {
        Header: 'Shifts',
        accessor: 'shifts',
    },
    {
        Header: 'Work Hours',
        accessor: 'work_hours',
    },
    {
        Header: 'No of Employees',
        accessor: 'employees',
    },
]

const JobRoles = () => {
    const { jobRoles, isProcessing } = useSelector(state => state.jobRole)
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllJobRoles())
        // eslint-disable-next-line
    }, [])
    const onSubmit = async (info) => {
        const resp = await dispatch(addNewJobRole(info))
        if (!!resp) {
            setShow(false)
        }
    }

    return (
        <div className="job-roles-container">
            {!!show && <AddNewJobRole handleClose={() => setShow(false)} onSubmit={onSubmit} />}
            {!!isProcessing && <SpinLoader />}


            <div className='header-part-container between-flex'>
                <div className='header-sec ai-center'>
                    <img src={require('../../assets/images/back.png')} alt="Back" />
                    {"Century > Divisions > Departments >"} <span>Job Roles</span>
                </div>
                <button className='add-new-btn' onClick={() => setShow(true)}><span>+</span> Add New Job Roles</button>
            </div>

            <div className='table-content-holder'>
                <div className='head-title d-flex ai-center'>List of Job Roles - HR (Human Resources)</div>
                <CommonTable data={jobRoles} columns={columns} />

            </div>
        </div>
    );
}

export default JobRoles