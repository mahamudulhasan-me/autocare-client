/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import bg from "../../assets/images/banner/slide4.jpg";
import logo from "../../assets/images/logo.png";
import BtnLoader from "../../components/ui/loaders/BtnLoader";
import { useLoginMutation } from "../../redux/authentication/authApiSlice";
import Register from "./Register";

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signInPage, setSignInPage] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [loginMutation, { isError, isSuccess, error: serverError, isLoading }] =
    useLoginMutation();
  //   const location = useLocation();
  //   const path = location?.state?.redirectPath || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    loginMutation(data);
  };

  useEffect(() => {
    if (isError) {
      setError((serverError as any)?.data?.message);
      toast.error(
        (serverError as any)?.data?.message || "Something went wrong"
      );
    }
    if (isSuccess) {
      toast.success("Login Successful");
      navigate("/");
    }
  }, [isError, isSuccess, serverError, navigate]);

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-[calc(100vh-2rem)] py-5 bg-cover bg-slate-900/70 bg-blend-overlay flex justify-center items-center"
    >
      <div className="md:w-3/5 px-2 md:px-0 mx-auto">
        <div className="flex bg-slate-300 gap-1 px-6 py-3 rounded-t-xl">
          <div className="size-3 bg-red-600 rounded-full"></div>
          <div className="size-3 bg-yellow-500 rounded-full"></div>
          <div className="size-3 bg-green-600 rounded-full"></div>
        </div>
        <div className="md:grid grid-cols-12">
          <div className="col-span-5 bg-slate-950/70 px-10 py-6 text-white">
            <img src={logo} alt="" className="my-5 w-52" />
            <p className="font-semibold mt-4 mb-10 text-primary">
              Login using social media to get quick access
            </p>
            <div className="space-y-5">
              <Link to="#" className="socialLogin bg-green-600">
                <FaGoogle /> SignIn With Google
              </Link>
              <Link to="#" className="socialLogin bg-[#171515]">
                <FaGithub /> SignIn With GitHub
              </Link>
              <Link to="#" className="socialLogin bg-[#4267B2]">
                <FaFacebook /> SignIn With Facebook
              </Link>
            </div>
          </div>

          <div className="col-span-7 bg-white p-10">
            {signInPage ? (
              <>
                <div className="border-b border-gray-300 mb-12 relative">
                  <h1 className="font-semibold text-3xl mb-4">
                    Login to your Account
                  </h1>
                  <div className="w-16 h-1 bg-primary absolute -bottom-0.5"></div>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 md:w-4/5"
                >
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                    placeholder="Email Address"
                    className="signInUp-input"
                  />
                  {errors.email && (
                    <p className="text-rose-500">{errors.email.message}</p>
                  )}
                  <br />
                  <div className="relative">
                    <input
                      type={`${showPassword ? "text" : "password"}`}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                      placeholder="Password"
                      className="signInUp-input"
                    />
                    <div
                      className="absolute top-5 text-xl right-0 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                  </div>
                  {errors.password && (
                    <p className="text-rose-500">{errors.password.message}</p>
                  )}
                  <br />
                  <div className="flex justify-between items-center">
                    <div>
                      <input type="checkbox" />
                      <label htmlFor=""> Remember Me</label>
                    </div>
                    <Link to="#" className="text-blue-600 hover:underline ">
                      Forget Password?
                    </Link>
                  </div>
                  {error && <p className="text-rose-500">{error}</p>}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-primary text-white font-semibold w-full rounded-md py-3"
                  >
                    {isLoading ? <BtnLoader /> : "Login with email"}
                  </button>
                  <p className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link
                      to="#"
                      className="text-blue-600 hover:underline font-semibold"
                      onClick={() => setSignInPage(!signInPage)}
                    >
                      Sign Up Free!
                    </Link>
                  </p>
                </form>
              </>
            ) : (
              <Register setSignInPage={setSignInPage} signInPage={signInPage} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
