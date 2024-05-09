import { useState, useCallback } from 'react';

const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback((username: string, password: string) => {
    
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      alert('Invalid username or password');
    }
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return { isLoggedIn, login, logout };
};

export default useLogin;
