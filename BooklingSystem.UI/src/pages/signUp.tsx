
import React, {useState} from "react"
export const SignUp:React.FC=()=>{
    const [show,setShow]=useState<boolean>(false)

    const[data,setData]=useState<{login:string,password:string}>({login:"",password:""})

    const handleSubmit=async()=>{
        

const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

    console.log(data)
    const resp=await fetch("https://booking-tent-api.azurewebsites.net/api/Auth/login",{
      body:JSON.stringify(data),
      method:'POST',
      headers:{
        'Content-Type':"application/json"
      }
    })
    await console.log(await resp.json())

    }

  



    return( 
<div className="place-items-center h-screen content-center flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Zaloguj się</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
      </p>
    </div>
    <div className="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true"/>
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="email-address" className="sr-only">Email</label>
          <input value={data.login} onChange={e=>{setData({...data,login:e.target.value})}} name="email" type="email" autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email"/>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input value={data.password} onChange={e=>setData({...data,password: e.target.value})} id="password" name="password" type={show?"text":"password"} autoComplete="current-password" required className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Hasło"/>
          <div className="flex items-center">
          <input onClick={()=>setShow(!show)} id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Pokaż hasło</label>
        </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Zapomniałes hasła?</a>
        </div>
      </div>

      <div>
        <button onClick={handleSubmit} className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
       
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
            </svg>
          </span>
          Zaloguj
        </button>
      </div>
    </div>
  </div>
</div>
    )
}