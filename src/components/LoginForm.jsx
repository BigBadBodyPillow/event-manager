import { useFormik } from 'formik';
import { useState } from 'react';
//css
import '../styles/LoginForm.css';

const validate = (values) => {
  const errors = {};

  // email
  const emailRegex = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // password
  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

function LogInForm({ onLoginSuccess, onShowSignUp }) {
  const [loginError, setLoginError] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      // //get from local storage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      // check if details are found
      const user = users.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );
      if (user) {
        setLoginError('');
        if (onLoginSuccess) {
          onLoginSuccess(user.username);
        }
        formik.resetForm();
      } else {
        setLoginError('User not found or incorrect password.');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {loginError && <div className="errors">{loginError}</div>}
      {/* email */}
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <div className="errors">{formik.errors.email}</div>
        )}
      </div>
      {/* password */}
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <div className="errors">{formik.errors.password}</div>
        )}
      </div>

      <button type="submit">Log In</button>

      {/* <button type="button" onClick={onShowSignUp}>
        Sign Up
      </button> */}
      <a
        tabIndex="0"
        className="switch-to-signup"
        onClick={onShowSignUp}
        aria-label="switch to sign up"
      >
        Sign Up
      </a>
    </form>
  );
}

export default LogInForm;
