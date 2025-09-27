import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { email, plan: 'free' | 'silver' | 'premium' }

  const login = (email, password) => {
    const mockUser = { email, plan: 'premium' }; // Change plan to test
    setUser(mockUser);
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
