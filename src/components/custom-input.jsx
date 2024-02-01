import PropTypes from "prop-types"

CustomInput.propTypes = {
    value: PropTypes.any.isRequired,
    icon: PropTypes.any,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.any.isRequired,
    errors: PropTypes.string
};



function CustomInput({ value, icon, name, placeholder, type, onChange, errors }) {
    return (
        <div className="box-border">
            <div className="flex justify-start items-center relative bg-transparent">
                {icon ? <img src={icon} className="mr-8 w-5" /> : null}
                <input className="box-border w-full mt-4 mb-4 p-4 caret-white text-white bg-transparent border-b-2 border-b-[#A7A6C5] focus:outline-none focus:border-b-white " type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange}></input>
            </div>
            {errors ? <div className="text-sm ml-12 text-red-600">{errors}</div> : null}
        </div>
    )
}

export default CustomInput