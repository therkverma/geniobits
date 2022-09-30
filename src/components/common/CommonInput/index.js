import "./index.scss"

const CommonInput = ({
    id = '', label = 'Label', className = '', min = "0", max = "1000000000",
    disabled = false, readOnly = false, placeholder = '',
    type = 'text', value, onChange, required = false
}) => {
    return (
        <label htmlFor={id} className={`common-input ${className}`}>{label}
            {
                type === 'number' ? <input id={id} type='number' min={min} max={max} value={value || min}
                    disabled={disabled} readOnly={readOnly} placeholder={placeholder}
                    onChange={onChange} required={required} /> :
                    <input id={id} type={type} value={value || ''}
                        disabled={disabled} readOnly={readOnly} placeholder={placeholder}
                        onChange={onChange} required={required} />
            }
        </label>
    )
}

export default CommonInput