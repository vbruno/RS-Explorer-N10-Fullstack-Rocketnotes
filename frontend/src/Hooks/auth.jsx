import { createContext, useContext, useState } from "react";

import { api } from '../services/api'

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export function AuthProvider( {children} ) {

  const [data, setData] = useState({});

  async function signIn({email, password}) {

    try {
      const response = await api.post('/sessions', {
        email,
        password
      });
      const { token, user } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({token, user});
    } catch (error) {
      if(error.response) {
        alert(error.response.data.error);
      }else {
        alert('Erro ao realizar login, tente novamente mais tarde');
      }

    }

  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
