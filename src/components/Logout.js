import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../services/contexts/AuthContext";
import { auth } from "./firebase";

export const Logout = () => {
  const navigate = useNavigate();
  const { user, userLogout } = useContext(AuthContext);

  useEffect(() => {
    auth.signOut(user.accessToken)
      .then(() => {
        userLogout();
        navigate('/');
      })
      .catch(() => {
        navigate('/');
      })
  });
  return null;
}
