import PropTypes from "prop-types"
import { useState } from "react"

import passwordShow from '../assets/icons/password_show.svg'
import passwordHide from '../assets/icons/password_hide.svg'

import { NavLink,useNavigate } from "react-router-dom";

CustomInputPassword.propTypes = {
    value: PropTypes.any.isRequired,
    icon: PropTypes.any,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.any.isRequired,
    errors: PropTypes.string,
    showForgotPassword: PropTypes.bool,
};


function CustomInputPassword({ value, icon, name, placeholder, onChange, errors, showForgotPassword }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigate = useNavigate();

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    //TODO: Set Navlink to Forgot Password Page
    return (
        <div>
            <div className="flex justify-start items-center relative bg-transparent">
                {icon ? <img src={icon} className="mr-8 w-5" /> : null}
                <input className="box-border w-full mt-4 mb-4 p-4 caret-white text-white bg-transparent border-b-2 border-b-[#A7A6C5] focus:outline-none focus:border-b-white" type={isPasswordVisible ? "text" : "password"} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange}></input>
                <button type="button" className="absolute right-0 p-0" onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? <img src={passwordHide}></img> : <img src={passwordShow}></img>}
                </button>
            </div>
            {showForgotPassword ? <div className="flex justify-end"><NavLink to={"/"}  className="text-[#A7A6C5] underline" onClick={() => { navigate(-1) }}>Forgot password?</NavLink> </div>: null}
            {errors ? <div className="text-sm ml-12 mt-2 text-red-600">{errors}</div> : null}
        </div>
    )
}

export default CustomInputPassword
