import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
      navigate(from, { replace: true });
    });
  };

  const handleCaptcha = () => {
    const captchaValue = captchaRef.current.value;
    console.log(captchaValue);
    if (validateCaptcha(captchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <div class="w-full mt-60 border max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div class="px-6 py-4">
        <div class="flex justify-center mx-auto">
          <img
            class="w-auto h-7 sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </div>

        <h3 class="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          Welcome Back
        </h3>

        <p class="mt-1 text-center text-gray-500 dark:text-gray-400">
          Login or create account
        </p>

        <form onSubmit={handleSubmit}>
          <div class="w-full mt-4">
            <input
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Email Address"
              aria-label="Email Address"
              name="email"
            />
          </div>

          <div class="w-full mt-4">
            <input
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Password"
              aria-label="Password"
              name="password"
            />
          </div>

          <div class="flex items-center justify-between mt-4">
            <div>
              <LoadCanvasTemplate />
            </div>
            <input
              className="border rounded w-20"
              name="catcha"
              placeholder="captcha"
              type="text"
              ref={captchaRef}
            />
            <button
              onClick={handleCaptcha}
              className="btn btn-sm bg-slate-950 text-white"
            >
              Captcha
            </button>
          </div>
          <div className="mt-3">
            <button
              disabled={disabled}
              className="btn text-white btn-primary w-full"
            >
              Signin
            </button>
          </div>
        </form>
      </div>

      <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span class="text-sm text-gray-600 dark:text-gray-200">
          Don't have an account?{" "}
        </span>

        <Link to={"/signup"}>
          <span class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
            Register
          </span>
        </Link>
      </div>
      <div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
