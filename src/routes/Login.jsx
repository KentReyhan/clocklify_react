import clocklifyLogo from '../assets/images/logo.png'
import emailIcon from '../assets/icons/email.svg'
import passwordIcon from '../assets/icons/password.svg'

import CustomInput from '../components/custom-input'
import CustomInputPassword from '../components/custom-input-password'

import { useFormik } from "formik"
import { NavLink, useNavigate } from "react-router-dom";

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.lastName = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more';
  }

  return errors;
}

function Login() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      console.log(values)
    }
  });

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col container justify-center">
        <img src={clocklifyLogo} alt="Clocklify Logo" className='h-1/4 w-1/4 self-center mb-16' />
        <form onSubmit={formik.handleSubmit} className='w-1/3 self-center box-border' >
          <CustomInput
            value={formik.values.email}
            icon={emailIcon}
            name={"email"}
            placeholder={"Email"}
            type={"email"}
            onChange={formik.handleChange}
            errors={formik.errors.email}
          />
          <CustomInputPassword
            value={formik.values.password}
            icon={passwordIcon}
            name={"password"}
            placeholder={"Password"}
            onChange={formik.handleChange}
            errors={formik.errors.password}
            showForgotPassword={true}
          />
          <div className="flex ml-12 mt-12 mb-8">
            <button className="p-3 w-4/5 self-center bg-gradient-to-b from-[#45CDDC] to-[#2EBED9] text-white" type="submit">Login</button>
          </div>
        </form>
        <div className="flex justify-center mr-6"><NavLink to={"/register"}  className="text-[#A7A6C5] underline" onClick={() => { navigate(-1) }}>Create New Account?</NavLink> </div>
      </div>
    </>
  )
}

export default Login
