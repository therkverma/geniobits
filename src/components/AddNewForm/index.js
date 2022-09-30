import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import CommonInput from "../common/CommonInput"
import "./index.scss"

const AddNewForm = ({ handleClose, onSubmit }) => {
    const wrapperRef = useRef()
    const [formInfo, setFormInfo] = useState({
        "dep_name": "",
        "incharge_id": null,
        "total_emp": 0
    })

    const { employees } = useSelector(state => state.employee)

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

    const emailVal = () => {
        let value = ""
        if (!!formInfo && !!formInfo.incharge_id && !!employees && !!employees.length) {
            const empData = employees.find(e => (e.id).toString() === (formInfo.incharge_id).toString())
            value = !!empData && !!empData.email ? empData.email : ''
        }
        return value
    }

    const isInValid = !formInfo || (!!formInfo && !formInfo.dep_name) || (!!formInfo && !formInfo.incharge_id)
    return (
        <div className="add-new-popup-container">
            <div className={`add-new-popup-sub-container`} ref={wrapperRef}>
                <div className="add-new-popup-header-section">
                    <div className="add-new-popup-header-title">Add New Division</div>
                    <div className="add-new-popup-header-action-tool">
                        <div className={`svg-img-holder between-flex`}>
                            <div className="cross-btn" onClick={() => !!handleClose && handleClose()}>X</div>
                        </div>
                    </div>
                </div>
                <div className="add-new-popup-wrapper pl-10 pr-10">
                    <CommonInput label="Division Name" placeholder="Department Name" onChange={e => updateInfo('dep_name', e.target.value)} value={formInfo.dep_name} />

                    <div className="between-flex mt-20">
                        <div className="mr-10">
                            <label htmlFor={"id"} className={`common-input`}
                                onClick={(e) => {

                                }}>{"Incharge"}
                                <select onChange={e => updateInfo('incharge_id', e.target.value)} onSelect={e => console.log('haha ', e)} value={formInfo.incharge_id || 0}>
                                    <option value={0} disabled>Select Incharge</option>
                                    {
                                        !!employees && !!employees.length && employees.map((emp, i) => <option value={emp.id} key={i}>{emp.name}</option>)
                                    }
                                </select>
                            </label>
                        </div>
                        <div className="mr-10">
                            <CommonInput label="Incharge Email ID" placeholder="Enter Email ID" readOnly={true} disabled={true} value={emailVal(formInfo.incharge_id)} />
                        </div>
                        <div className="mr-10">
                            <CommonInput label="Total Employee Working" type="number" onChange={e => updateInfo('total_emp', e.target.value)} value={formInfo.total_emp} />
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

export default AddNewForm