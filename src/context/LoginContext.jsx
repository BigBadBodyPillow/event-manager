import { createContext, useState } from 'react';

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  function login(usernameFromLogin) {
    setIsLoggedIn(true);
    setUsername(usernameFromLogin);
  }
  function logout() {
    setIsLoggedIn(false);
    setUsername('');
  }

  return (
    <LoginContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}
