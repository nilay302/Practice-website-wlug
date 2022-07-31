import React from 'react'
import './Login.css';
import { useFormik } from "formik";
import{AiOutlineArrowLeft} from 'react-icons/ai';
import{FiUser} from 'react-icons/fi';
import{FiKey} from 'react-icons/fi';
import{FaRocket} from 'react-icons/fa';
import axios from "axios";
import * as Yup from "yup";

function Login (props) {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required*"),
      password: Yup.string()
        .min(8, "minimum 8 required")
        .required("Password is required*"),
    }),
    onSubmit: (values) => {
      console.log(values);
      LoginHandler(values);
    },
  });
  const LoginHandler = (values) => {
    const URL = "https://wlug-website-3.herokuapp.com/api/v1/users/signup";
    axios
      .post(
        URL,
        {
          email: values.username,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 'success') {
          const data = response.data;
          localStorage.setItem("username", values.username);
          localStorage.setItem("token", data["token"]);
          console.log(data["token"]);
          console.log(response.status);
          console.log(values.username);
          alert("Successfully Logged In");
          window.location = "/";
        }
      })
      .catch((err) => {
        if (err.message === "Request failed with status code 400") {
          // setAlertCode(1);
          alert("Bad Request");
          return 0;
        }
        if (err.message === "Request failed with status code 404") {
          // setAlertCode(2);
          alert("You have entered an invalid username or password");
          return 0;
        }
        if (err.message === "Request failed with status code 401") {
          // setAlertCode(3);
          return 0;
        }
        // setAlertCode(4);
        return 0;
      });
    // values.username = "";
    values.password = "";
  };
  const websiteButton=()=>{
    window.location.href = '/';
  }
  return (
    
    <div>
        <div className='container-fluid login'>
        <div className='arrow_back'>
          <AiOutlineArrowLeft onClick={websiteButton}/>
          </div>
        <div className=' login_form'>
          
          <div className='heading'>
          <p>WLUG</p>
          </div>

          {/* div main */}
          <div className='form_part'>  
            <form 
            onSubmit={(e) => formik.handleSubmit(e)}
            >
              {/* div 1 */}
              <div className='input_form'>
                {/* div 2 */}
                <div>
                <FiUser className='logo'/>
                </div>
                {/* div 3 */}
                <div>
                <input 
                id="username"
                name="username"
                type="text"
                autoComplete='off'
                placeholder='Your username or e-mail'
                className='input'
                value={formik.values.username}
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                />
                </div>
              </div>
              {formik.touched.username && formik.errors.username ? (
                <p className="error_login">{formik.errors.username}</p>
              ) : null}

              {/* div 1 */}
              <div className='input_form'>
                <div>
                <FiKey className='logo'/>
                </div>
                <div>
                <input 
                id='password'
                name='password'
                type='password'
                 placeholder='Password' 
                 className='input'
                 value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                 />
                </div>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <p className="error_login">{formik.errors.password}</p>
              ) : null}

              {/* div1 */}
              <div className='lower_login'>
                {/* div 2 */}
                <div className='forgot'>

                  <p onClick={websiteButton}>Forgot Password?</p>
                </div>
                {/* div 3 */}
                <div className='login_btn'>
                  <button className='btn ' type='submit'>
                    <p className='btn_txt'>Log in</p>
                  </button>
                </div>
              </div>
            </form>
          </div>
         
        </div>
        <div className='login_card '>
          <div className='card-body'>
          <div className='welcome '>
          <p>Welcome!</p>
          </div>
          <div className='subtext'>
          <p>Linux Enthusiasts!!</p>
          </div>
          <div className='website_btn'>
          <button className='btn flex' onClick={websiteButton}>
            <p>To Website <FaRocket className='rocket'/></p>
            
          </button>
          </div>
        </div>
        </div>
        </div>


        {/* background */}
        <div className='hexagon_outer'>
            <div className='hexagon_inner'>
            </div>
        </div>
    </div>
  )
}

export default Login