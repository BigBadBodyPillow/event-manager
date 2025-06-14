import { useState, useContext } from 'react';
import { LoginContext } from '../context/LoginContext.jsx';

//components
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';

//css
import '../styles/Home.css';

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [username, setUsername] = useState('');
  const { isLoggedIn, username, login, logout } = useContext(LoginContext);

  function handleSignUpSuccess() {
    setShowLogin(true);
  }

  function handleLogin(usernameFromLogin) {
    login(usernameFromLogin);
  }

  function handleLogout() {
    logout();
    setShowLogin(false);
  }

  return (
    <div className="home">
      <h2>Home</h2>
      {isLoggedIn ? (
        <div className="logout-container">
          <h1>Welcome {username}!</h1>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : showLogin ? (
        //  show login form
        <div className="login-container">
          <h1>Login</h1>
          <LoginForm
            onLoginSuccess={handleLogin}
            onShowSignUp={() => setShowLogin(false)}
            // on click
          />
        </div>
      ) : (
        // else(by default) show sign up form
        <div className="signup-container">
          <h1>Sign Up</h1>
          <SignupForm
            onSignUpSuccess={handleSignUpSuccess}
            onShowLogin={() => setShowLogin(true)}
            // on click
          />
        </div>
      )}
    </div>
  );
}

export default Home;
