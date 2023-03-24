import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../services/contexts/AuthContext";
import { auth } from "./firebase";

export const Logout = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  let currentUser = user;



  const handleLogout = async () => {
    try {
      await auth.signOut(currentUser.accessToken);
      logout();
      localStorage.clear();
      currentUser = null;
      navigate('/');

    } catch (error) {
      console.log(error);
      navigate('/');
    }
  };


  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return null;
}
