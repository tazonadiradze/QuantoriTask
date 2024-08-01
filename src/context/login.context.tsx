import React, { createContext, ReactNode, useContext, useState } from "react";

// Define the shape of the context value
interface LoginContextType {
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  return (
    <LoginContext.Provider value={{ showLogin, setShowLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = (): LoginContextType => {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error("error");
  }
  return context;
};
