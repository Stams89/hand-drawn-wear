import '../styles/register.css';

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../services/contexts/AuthContext";

import { auth } from "./firebase";

export const Register = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repass');

    if (password !== repass) {
      return;
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const { user } = userCredential;
        userLogin(user);
        navigate('/catalog');


      })
  }
  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={onSubmit}>
        <div id="login-box">
          <div className="left">
            <h1>Register</h1>
            <input type="text" name="username" placeholder="Username" />
            <input type="text" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
            <input type="password" name="repass" placeholder="Retype password" />
            <input type="submit" name="signup_submit" defaultValue="Sign me up" />
          </div>
          <div className="right">
            <h4 className="mt-1 mb-5 pb-1" style={{ fontFamily: "curve" }}>Welcome to our page </h4>

            <div >
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