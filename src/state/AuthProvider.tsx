import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  accessToken: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType | never {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const login = (token: string) => {
    try {
      localStorage.setItem("accessToken", token);
      setAccessToken(token);
    } catch (err) {
      console.log("error storing access token ", err);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("accessToken");
      setAccessToken(null);
    } catch (err) {
      console.log("error removing access token ", err);
    }
  };

  useEffect(() => {
    const getStoredToken = () => {
      try {
        const storedToken = localStorage.getItem("accessToken");
        if (storedToken) {
          setAccessToken(storedToken);
        }
      } catch (error) {
        console.error("error retrieving access token:", error);
      }
    };

    getStoredToken();
  }, []);

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
