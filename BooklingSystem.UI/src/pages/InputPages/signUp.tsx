import React, {useEffect, useState} from "react";
import './Validation.css'
import {useCookies} from "react-cookie";
import {useTranslation} from "react-i18next";
export const SignUp: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [check,setCheck]=useState(false);
  const[login,setLogin]=useState<boolean>(true)
  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const { t, i18n } = useTranslation();
  const [cookies,setCookie,removeCookie]=useCookies(['loginData'])

  const handleSubmit = async () => {
    // try{
    // const resp = await fetch(
    //   "https://booking-tent-api.azurewebsites.net/api/Auth/login",
    //   {
    //     body: JSON.stringify(data),
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // await console.log(await resp.json());
    // setLogin(resp.status===200)
    // }catch(e)
    // {
    //   setLogin(false)
    // }
    setCookie("loginData",{name:'jan',lastname:'chuj'})
  };

  return (

    <div className="place-items-center content-center flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="elements mt-14 text-center text-3xl font-bold tracking-tight text-gray-900">
            {t("Sign In")}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600"></p>
        </div>
        <div className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              {false?undefined: t("ErrLog")}
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                id="password"
                name="password"
                type={show ? "text" : "password"}
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder={`${t("Password")}`}
              />

              <div className="flex items-center">
                <input
                  onClick={() => setShow(!show)}
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 bg-gray-100 rounded border-gray-300  dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                />

                <label
                  htmlFor="remember-me"
                  className="my-10 elements font-medium ml-2 block text-sm text-gray-900"
                >
                  {t("ShowPassword")}
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {t("ForgotPassword")}
              </a>
            </div>
          </div>

          <div>
            <button
              onClick={handleSubmit}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {t("Sign In")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
