import React, { useState } from "react";
import { Valid } from "./Validation";
import './Validation.css'
import {useCookies} from "react-cookie";
export const Registration: React.FC = () => {
  const [email2, setEmail2] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const [valid, setValid] = useState<{name:boolean,lastname:boolean,email:boolean,password:boolean}>({name:true,lastname:true,email:true,password:true});

  const [data, setData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }>({ firstName: "", lastName: "", email: "", password: "" });
  const [cookies,setCookie,removeCookie]=useCookies(['loginData'])
  

  const handleSubmit = async () => {
    if(valid.name&&valid.lastname&&valid.email&&valid.password) {
      const resp: Response = await fetch(
          "https://booking-tent-api.azurewebsites.net/api/Auth/registration",
          {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
      );

      console.log(resp.statusText);
    }
    {console.log(valid.password)}

    console.log(cookies)
    
}

  return (
    <div className=" place-items-center content-center flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="elements mt-14 text-center text-3xl font-bold tracking-tight text-gray-900">
            Zarejestruj się
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600"></p>
        </div>

        <div className={"errorMessages"}>

          {valid.name?null:<span>Imie musi mieć conajmniej jeden znak<br/></span>}
          {valid.lastname?null:<span>Nazwisko musi mieć conajmniej jeden znak<br/></span>}
          {valid.email?null:<span>Proszę podać poprawny email<br/></span>}
          {valid.password?null:<span>Hasło musi mieć conajmniej 8 znaków w tym liczby i litery małe i duże<br/></span>}
          {data.email===email2?null:<span>Emaile nie są takie same<br/></span>}
        </div>
        <div className="mt-10 space-y-10">
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <label htmlFor="email-address" className="sr-only">
              Imie
            </label>
            <input
              value={data.firstName}
              onChange={(e) => {
                setData({ ...data, firstName: e.target.value });
               setValid( {...valid,name:Valid(e)})
              }}
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Imie"
            />

            <label htmlFor="email-address" className="sr-only">
              Nazwisko
            </label>
            <input
              value={data.lastName}
              onChange={(e) => {
                setData({ ...data, lastName: e.target.value });
                setValid({...valid,lastname:Valid(e)})
              }}
              id="lastname"
              name="lastname"
              type="lastname"
              autoComplete="lastname"
              required
              className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Nazwisko"
            />

            <label htmlFor="email-address" className="sr-only">
              Email
            </label>
            <input
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
                setValid({...valid,email:Valid(e)})
              }}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email"
            />

            <label htmlFor="email-address" className="sr-only">
              Powtórz email
            </label>
            <input
              value={email2}
              onChange={(e) => {
                setEmail2(e.target.value);
                Valid(e)
              }}
              id="email2"
              name="email"
              type="email"
              required
              className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Powtórz email"
            />

            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              value={data.password}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
               setValid({...valid,password:Valid(e)});
              }
              }
              id="password"
              name="password"
              type={show ? "text" : "password"}
              autoComplete="current-password"
              required
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Hasło"
            />


            <div className=" flex items-center">
              <input
                onClick={() => setShow(!show)}
                id="show-password"
                name="show-password"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="show-password"
                className="my-10 elements ml-2 block text-sm text-gray-900"
              >
                Pokaż hasło
              </label>
            </div>
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
            Zarejestruj
          </button>
        </div>
      </div>
    </div>
  );
};
