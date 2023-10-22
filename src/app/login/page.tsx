import "./login.css";
import { BsFillPhoneFill } from "react-icons/bs";
import fonts from "../fonts/fonts";
let Login = () => {
    return (
        <section id="Login" className="flex flex-row justify-center pt-20">
            <div className="login inline-flex flex-col justify-center">
                <div className="flex flex-row items-center login-head">
                    <p className={fonts.rajdhani.className + " text-2xl "}>Email verification</p>
                </div>
                <div className="login-body flex flex-col items-center gap-4">
                    <div className={fonts.ubuntu.className+" flex flex-col items-center text-lg"}>
                        <p>Enter your phone number to</p>
                        <p>login/sign up</p>
                    </div>
                    <div className="inline-flex flex-row items-center login-input gap-1">
                        <BsFillPhoneFill />
                        <p>+91 -</p>
                        <input />
                    </div>
                    <button className="nxt-btn py-2">Next</button>
                    <div className="flex flex-col gap-2">
                        <p className={fonts.kanit.className}>By continuing, you agree to our</p>
                        <div className={fonts.rajdhani.className+" flex flex-row gap-3 justify-center"} >
                            <p>Terms of service</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
}
export default Login;