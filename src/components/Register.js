import '../styles/register.css';

export const Register = () => {
    return (
        <div id="login-box">
            <div className="left">
                <h1>Sign up</h1>
                <input type="text" name="username" placeholder="Username" />
                <input type="text" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="password2" placeholder="Retype password" />
                <input type="submit" name="signup_submit" defaultValue="Sign me up" />
            </div>
            <div className="right">
            <h4 className="mt-1 mb-5 pb-1" style={{ fontFamily: "curve" }}>Welcome to our page </h4>
                <span className="loginwith">
                    Sign in with
                    <br />
                    social network
                </span>
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


    )
}