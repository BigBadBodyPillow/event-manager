import { useFormik } from 'formik';
//css
import '../styles/SignupForm.css';

const validate = (values) => {
  const errors = {};

  // username
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 20) {
    errors.username = 'Must be 20 characters or less';
  }

  // email
  const emailRegex = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  //password
  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
};

function SignUpForm({ onSignUpSuccess, onShowLogin }) {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      // get usernames from loacl storage
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      // add user details to localstorage
      users.push({
        username: values.username,
        email: values.email,
        password: values.password,
      });
      localStorage.setItem('users', JSON.stringify(users));
      if (onSignUpSuccess) {
        onSignUpSuccess(values.username);
      }
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* username */}
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username && (
          <div className="errors">{formik.errors.username}</div>
        )}
      </div>

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

      <button type="submit">Sign Up</button>
      {/* <button type="button" onClick={onShowLogin}>
        Log In
      </button> */}

      <a
        tabIndex="0"
        className="switch-to-login"
        onClick={onShowLogin}
        aria-label="switch to log in"
      >
        Log in
      </a>
    </form>
  );
}

export default SignUpForm;
