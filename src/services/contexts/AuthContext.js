import { createContext, useState, useEffect } from "react";
import { firebaseConfig } from "../../components/firebase"
import firebase from "../../components/firebase";
import "../../components/firebase";

firebase.initializeApp(firebaseConfig);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const register = async (username, email, password, repass) => {
    if (password !== repass) {
      console.log("Passwords do not match");
      return;
    }

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const currentUser = firebase.auth().currentUser;
      await currentUser.updateProfile({
        displayName: username
      });
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
