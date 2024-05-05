import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import useLogin from '../../hooks/useLogin';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, login, logout } = useLogin();
  const usernameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (usernameInputRef.current) {
      usernameInputRef.current.focus();
    }
  }, []);

  const handleLogin = useCallback(() => {
    login(username, password);
  }, [login, username, password]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const welcomeMessage = useMemo(() => {
    return isLoggedIn ? (
      <div>
        <p>Welcome, {username}!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) : null;
  }, [isLoggedIn, username, handleLogout]);

  const loginForm = useMemo(() => {
    return isLoggedIn ? null : (
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameInputRef}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }, [isLoggedIn, username, password, handleLogin]);

  return (
    <div>
      {welcomeMessage}
      {loginForm}
    </div>
  );
};

export default LoginForm;
