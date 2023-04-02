import '../styles/register.css';


import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../services/contexts/AuthContext";

import { auth } from "./firebase";

export const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null)


  const onSubmit = async (e) => { // make the onSubmit handler async
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repass');

    // Check if the email is valid using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email address");
      return;
    }
    if (password !== repass) {
      setErrorMessage("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    const emailExists = await auth.fetchSignInMethodsForEmail(email);
    if (emailExists.length !== 0) {
      setErrorMessage("Email already exists");
      return;
    }




    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }


    try {
      await auth.createUserWithEmailAndPassword(email, password);
      const currentUser = auth.currentUser;
      localStorage.setItem('username', name);
      await currentUser.updateProfile({
        displayName: name
      });
      register(currentUser); // update the user context with the new user
      navigate('/catalog');
    } catch (error) {
      setErrorMessage("Invalid email or password");
    }
  }

  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={onSubmit}>
        <div id="login-box">
          <div className="left">
            <h1>Register</h1>
            <input type="text-info" name="username" placeholder="Username" />
            <input type="text-info" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="repass" placeholder="Repeat password" />
            <input type="submit" name="signup_submit" defaultValue="Sign me up" />
          </div>

          <div className="right">
            <h4 className="mt-1 mb-5 pb-1" style={{ fontFamily: "curve" }}>Welcome to our page </h4>
            <div className="error-message">
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            </div>
            <div>
              <div className="text-white px-5 py-4 p-md-3 mx-md-2" style={{ fontFamily: "curve" }}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  style={{ width: 230 }}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>



  )
}