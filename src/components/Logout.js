import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../services/contexts/AuthContext";
import { auth } from "./firebase";

export const Logout = () => {
  const navigate = useNavigate();
  const { user, userLogout } = useContext(AuthContext);
  
  const handleLogout = async () => {
    try {
      await auth.signOut(user.accessToken);
      userLogout();
      localStorage.clear(); 
      navigate('/');
    } catch (error) {
      console.log(error);
      navigate('/');
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return null;
}
