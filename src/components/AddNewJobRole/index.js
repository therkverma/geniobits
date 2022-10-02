import { useEffect, useRef, useState } from "react"
import CommonInput from "../common/CommonInput"
import "./index.scss"

const AddNewJobRole = ({ handleClose, onSubmit }) => {
    const wrapperRef = useRef()
    const [formInfo, setFormInfo] = useState({
        "job_role": "",
        "ctc": "",
        "shifts": "",
        "work_hours": 0,
        "employees": 0
    })

    const handleClickOutside = e => {
        if (!!wrapperRef && wrapperRef.current !== null && !wrapperRef.current.contains(e.target)) {
            !!handleClose && handleClose()
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.addEventListener('mousedown', handleClickOutside)
        }
        // eslint-disable-next-line 
    }, [])

    const updateInfo = (key, value) => {
        setFormInfo({
            ...formInfo,
            [key]: value
        })
    }

    const isInValid = !formInfo || (!!formInfo && !formInfo.job_role) || (!!formInfo && !formInfo.ctc) || (!!formInfo && !formInfo.shifts) || (!!formInfo && !formInfo.work_hours) || (!!formInfo && !formInfo.employees)
    return (
        <div className="add-new-popup-container">
            <div className={`add-new-popup-sub-container`} ref={wrapperRef}>
                <div className="add-new-popup-header-section">
                    <div className="add-new-popup-header-title">Add New Job Role</div>
                    <div className="add-new-popup-header-action-tool">
                        <div className={`svg-img-holder between-flex`}>
                            <div className="cross-btn" onClick={() => !!handleClose && handleClose()}>X</div>
                        </div>
                    </div>
                </div>
                <div className="add-new-popup-wrapper pl-10 pr-10">
                    <div className="input-holder">
                        <div className="mr-10">
                            <CommonInput label="Job Role" onChange={e => updateInfo('job_role', e.target.value)} value={formInfo.job_role} />
                        </div>
                        <div className="mr-10">
                            <CommonInput label="CTC" onChange={e => updateInfo('ctc', e.target.value)} value={formInfo.ctc} />
                        </div>
                    </div>

                    {/* HINT:Later, I'll use textarea here for the shifts box */}
                    <div className="input-holder">
                        <div className="mr-10">
                            <CommonInput label="Shifts" onChange={e => updateInfo('shifts', e.target.value)} value={formInfo.shifts} />
                        </div>
                        <div className="mr-10" />
                    </div>

                    <div className="input-holder">
                        <div className="mr-10">
                            <CommonInput label="Work Hours" type="number" onChange={e => updateInfo('work_hours', e.target.value)} value={formInfo.work_hours} />
                        </div>
                        <div className="mr-10">
                            <CommonInput label="Total Employees" type="number" onChange={e => updateInfo('employees', e.target.value)} value={formInfo.employees} />
                        </div>
                    </div>
                </div>

                <div className="btn-holder">
                    <button onClick={() => handleClose()}>Cancel</button>
                    <button onClick={() => onSubmit(formInfo)} disabled={isInValid} >Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewJobRole