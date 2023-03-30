import '../styles/login.css';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../services/contexts/AuthContext';

import { auth } from "./firebase";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        login(user);
        navigate('/catalog');
      })
      .catch((error) => {
        setErrorMessage("Invalid email or password");
      });
  };
  return (

    <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-66">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: 155 }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">We are here for you</h4>
                    </div>
                    <form id="login" onSubmit={onSubmit}>

                      <div className="form-outline mb-4">

                        <label htmlFor="email" >Email</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          style={{ width: 230, marginTop: '-2rem' }}
                        />
                        <label htmlFor="password" style={{ marginTop: '1rem' }}> Password</label>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <input
                          type="password"
                          id="password"
                          name="pass2"
                          className="form-control"
                          style={{ width: 400, marginTop: '-2rem' }}
                        />
                        <button
                          className="btn btn-primary15 btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                          style={{ width: 250, marginTop: '7em' }}
                        >
                          Log in
                        </button>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
  {errorMessage && <div className="alert alert-danger" style={{ marginLeft: "-125px" }}>{errorMessage}</div>}
</div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4" style={{ fontFamily: "curve" }}>
                    <h4 className="mb-3">We are more than just a company</h4>
                    <p className="small mb-0" style={{ fontSize: "20px" }}>
                      Welcome to our company, where we specialize in creating handmade, hand-painted t-shirts that are as unique as you are. Our team of talented artists and designers are passionate about creating wearable works of art that not only look great, but also express your individuality and style.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}