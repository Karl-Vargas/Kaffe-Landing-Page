import React from 'react'
import useForm from './useForm';
import validate from './ValidateInfo';
import './Form.css'

const FormSignUp = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <label className="form-label" htmlFor="username">
                        Username:
                    </label>
                    <input id="username" type="text" name="username" className="form-input"
                        placeholder="Enter your Username"
                        value={values.username}
                        onChange={handleChange} />
                        {errors.username && <p>{errors.username}</p>}
                    <div className="form-inputs">
                        <label className="form-label" htmlFor="email">
                            Email:
                        </label>
                        <input id="email" type="email" name="email" className="form-input" placeholder="Enter your E-mail"
                        value={values.email}
                        onChange={handleChange} />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="form-inputs">
                        <label className="form-label" htmlFor="password">
                            Password:
                        </label>
                        <input id="password" type="password" name="password" className="form-input" placeholder="Enter your password" 
                        value={values.password}
                        onChange={handleChange}/>
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className="form-inputs">
                        <label className="form-label" htmlFor="password2">
                            Confirm Password:
                        </label>
                        <input id="password2" type="password" name="password2" className="form-input" placeholder="Enter again your Password" 
                        value={values.password2}
                        onChange={handleChange}/>
                        {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                </div>
                <button className="btn btn-primary form-input-btn">
                    Sign up 
                </button> 
                <br />
                <span className="form-input-login">
                    Already have an account? Login <a href="/signup">Here</a>
                </span>
            </form>
        </div>
    );
};

export default FormSignUp;
