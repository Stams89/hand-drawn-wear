import '../styles/login.css';
import { login } from '../services/userService';

export const Login = () => {

  const onSubmit = (e) => {
    e.preventDefault();

    const {
      email,
      password
    } = Object.fromEntries(new FormData(e.target));

    console.log(email);
    console.log(password);

    login(email, password)
    .then(authData => {
      console.log(authData);
    })
  };

  return (

    <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: 185 }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">We are here for you</h4>
                    </div>
                    <form id="login" onSubmit={onSubmit}>

                      <div className="form-outline mb-4">

                        <label  htmlFor="email">Email</label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                        />
                        <label  htmlFor="password"> Password</label>
                      </div>
                      
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <input
                          type="password"
                          id="password"
                          name="email"
                          className="form-control"
                        />
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                        >
                          Log in
                        </button>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
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