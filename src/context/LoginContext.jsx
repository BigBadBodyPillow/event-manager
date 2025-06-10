import { createContext, useContext, useState } from 'react';

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const login = (usernameFromLogin) => {
    setIsLoggedIn(true);
    setUsername(usernameFromLogin);
  };
  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}
