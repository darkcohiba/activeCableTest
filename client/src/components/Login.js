import { useState } from 'react';
import {useNavigate} from 'react-router-dom'




function Login({isAuthenticated,setUser,setIsAuthenticated, user}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState([])

    const navigate = useNavigate()


    function onSubmit(e){
    
        e.preventDefault()
        const currentUser = {
          username: username,
          password
        }
        console.log(currentUser)
  
        fetch(`http://localhost:3000/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(currentUser)
        })
        .then(res => {
          if(res.ok){
            res.json()
            .then(thisUser=>{
              setUser(thisUser)
              console.log(thisUser)
              setIsAuthenticated(true)
              console.log("working?")
              navigate("/")
            })
          } else {
            res.json()
            .then(json => setError(json.error))
          }
        })
    }



    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                        </h2>
                    </div>
                    {/* <form className="mt-8 space-y-6" action="#" method="POST"> */}
                    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="username" className="sr-only">
                                Username
                                </label>
                                <input
                                onChange={(e) => setUsername(e.target.value)}
                                id="username"
                                name="username"
                                type="username"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Username"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                Password
                                </label>
                                <input
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Password"
                                />
                            </div>
                        </div>
                        {error ?
                        error
                        :
                        null
                        }
                        <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Sign in
                        </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;