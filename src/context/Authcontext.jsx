import { createContext, useState} from "react";

// Create a context
const AuthContext = createContext(null);

//To check the local Storage
const checkSessionStorage = () => {
  const storedUser = sessionStorage.getItem("user");
  if (storedUser) {
    const {data} = JSON.parse(storedUser);
      return data; 
  }
  return null; // Default to null if no valid user data
};

// To provide the context
const AuthProvider = ({ children }) => {
 
  const [user, setUser] = useState(checkSessionStorage());

  // Function to log in and store user with expiry
  const login = (userData) => {
    sessionStorage.setItem("user", JSON.stringify({ data: userData}));
    setUser(userData);
  };

  // Function to log out and remove user from local storage
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
