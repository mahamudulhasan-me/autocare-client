/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import BtnLoader from "../../components/ui/loaders/BtnLoader";
import { useRegisterMutation } from "../../redux/features/authentication/authApiSlice";

interface RegisterProps {
  setSignInPage: (value: boolean) => void;
  signInPage: boolean;
}

interface Inputs {
  name: string;
  email: string;
  phone: string;
  address?: string;
  password: string;
  acceptTerms: boolean;
}

const Register = ({ setSignInPage, signInPage }: RegisterProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [registerMutation, { isError, isLoading, isSuccess, error }] =
    useRegisterMutation();

  const navigate = useNavigate();

  const getPassword = (e: ChangeEvent<HTMLInputElement>): void => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPassError("");

    if (!/(?=.*?[A-Z])/.test(newPassword)) {
      setPassError("At least one upper case");
    } else if (!/(?=.*?[a-z])/.test(newPassword)) {
      setPassError("At least one lower case");
    } else if (!/(?=.*?[0-9])/.test(newPassword)) {
      setPassError("At least one digit");
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(newPassword)) {
      setPassError("At least one special character");
    } else if (newPassword.length < 6) {
      setPassError("Minimum password length is 6 characters");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const userInfo = { ...data, role: "user" };
    registerMutation(userInfo);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Registration Successful");
      setSignInPage(true);
    } else if (isError) {
      toast.error((error as any).data.message);
    }
  }, [error, isError, isSuccess, navigate, setSignInPage]);

  return (
    <>
      <div className="border-b border-gray-300 mb-12 relative">
        <h1 className="font-semibold text-3xl mb-4">Sign up for free!</h1>
        <div className="w-16 h-1 bg-primary absolute -bottom-0.5"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:w-4/5">
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          placeholder="Full Name"
          className="signInUp-input"
        />
        {errors.name && <p className="text-rose-500">{errors.name.message}</p>}

        <input
          type="text"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email address",
            },
          })}
          placeholder="Email Address"
          className="signInUp-input"
        />
        {errors.email && (
          <p className="text-rose-500">{errors.email.message}</p>
        )}

        <input
          type="text"
          {...register("phone", { required: "Phone number is required" })}
          placeholder="Phone Number"
          className="signInUp-input"
        />
        {errors.phone && (
          <p className="text-rose-500">{errors.phone.message}</p>
        )}

        <input
          type="text"
          {...register("address")}
          placeholder="Address"
          className="signInUp-input"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password is required",
              validate: () => passError === "",
            })}
            value={password}
            onChange={getPassword}
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
        {passError && (
          <p className="font-semibold text-rose-600 min-h-3">{passError}</p>
        )}

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register("acceptTerms", {
              required: "You must accept the terms and conditions",
            })}
            className="h-4 w-4"
            checked={acceptTerms}
            onChange={() => setAcceptTerms(!acceptTerms)}
          />
          <label className="text-black">
            Accept{" "}
            <Link
              to="#"
              className="text-blue-600 hover:underline font-semibold"
            >
              Terms & Condition
            </Link>
          </label>
        </div>
        {errors.acceptTerms && (
          <p className="text-rose-500">{errors.acceptTerms.message}</p>
        )}

        <button
          type="submit"
          disabled={!acceptTerms || !password || passError !== "" || isLoading}
          className={`bg-primary text-white font-semibold w-full rounded-md py-3 ${
            !acceptTerms || isLoading ? "bg-opacity-70" : "bg-opacity-100"
          }`}
        >
          {isLoading ? <BtnLoader /> : "Sign up with email"}
        </button>
        <p className="text-center text-black ">
          Have an account?{" "}
          <Link
            to="#"
            className="text-blue-600 hover:underline font-semibold"
            onClick={() => setSignInPage(!signInPage)}
          >
            Sign In
          </Link>
        </p>
      </form>
    </>
  );
};

export default Register;
