import React, { useState } from "react";
import { AppForm, FormBtn, FormInput } from "../shared/Form";
import * as Yup from "yup";
import Button from "../shared/Button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
  checkbox: Yup.string().required().label("Remember me"),
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const toogleChecked = () => {
    return !isChecked ? setIsChecked(true) : setIsChecked(false);
  };

  const placeOrder = (values) => {
    setLoading(true);
    console.log(values);
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-5">
      <div className="mx-auto max-w-[400px] bg-slate-100 rounded-md">
        <div className="p-6 pt-8 my-6 md:my-8">
          <div className="flex justify-center space-x-4 uppercase font-semibold text-xl text-center border-b-2 border-slate-400 pb-6">
            <h1
              className={`${
                isLogin ? "text-slate-700" : "text-slate-400"
              } cursor-pointer`}
              onClick={() => setIsLogin(true)}
            >
              login
            </h1>
            <h1
              className={`${
                !isLogin ? "text-slate-700" : "text-slate-400"
              } cursor-pointer`}
              onClick={() => setIsLogin(false)}
            >
              register
            </h1>
          </div>
          <h2 className="text-sub-title pt-8 pb-6">
            {isLogin ? "Login to Your Account" : "Create Your Account"}
          </h2>

          <AppForm
            initialValues={{
              email: "",
              password: "",
              checkbox: "",
            }}
            onSubmit={placeOrder}
            validationSchema={validationSchema}
          >
            <FormInput name="email" placeholder="Email" type="email" />
            <FormInput name="password" placeholder="Password" type="password" />
            <div className="flex items-center px-2 gap-2 ">
              <div className="-mb-3">
                <FormInput
                  name="checkbox"
                  type="checkbox"
                  onClick={() => toogleChecked()}
                />
              </div>
              <span className={`${isChecked ? "text-title" : "text-gray-400"}`}>
                Remember me
              </span>
            </div>
            <FormBtn
              title={isLogin ? "LOGIN" : "SIGN UP"}
              onClick={placeOrder}
              loading={loading}
            />
          </AppForm>
          <div className="flex justify-center gap-4 flex-col items-center py-6">
            <div className="flex justify-center flex-col border-b-2 w-full pb-4">
              {isLogin ? (
                <>
                  <p className="text-center text-sub-title pb-2">
                    You don't have any account?
                  </p>
                  <span
                    className="text-title hover:hover-primary cursor-pointer m-auto w-fit"
                    onClick={() => setIsLogin(false)}
                  >
                    Register Now
                  </span>
                </>
              ) : (
                <>
                  <p className="text-center text-sub-title pb-2">
                    Already have an account?
                  </p>
                  <span
                    className="text-title hover:hover-primary cursor-pointer m-auto w-fit"
                    onClick={() => setIsLogin(true)}
                  >
                    LogIn here
                  </span>
                </>
              )}
            </div>

            <p className="pb-2">
              Or
              <span className="text-primary pl-2">Continue with</span>
            </p>
            <Button
              icon={<FcGoogle size={25} />}
              title="Google"
              className={"bg-slate-800 text-white w-full text-lg"}
            ></Button>
            <Button
              icon={<FaFacebookSquare size={20} />}
              title="Facebook"
              className={"bg-blue-500 text-white w-full text-lg"}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
