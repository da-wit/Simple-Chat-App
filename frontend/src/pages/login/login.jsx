function LogIn(){
    return <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
       <h1 className=" text-3xl font-semibold text-center text-gray-300 mb-6">
        Login
       <span className=" text-blue-500 ">
        ChatApp
        </span>
       </h1>
       <form>
       <div className="flex flex-col justify-center m-2">
       <label htmlFor="username" className="text-lg mb-2 block">Username</label>
       <input type="text" placeholder="username" className="rounded-md w-full px-4 py-2  focus:outline-none focus:ring-1 focus:ring-blue-400"/>
       </div>
       <div className="flex flex-col justify-center m-2">
       <label htmlFor="password" className="text-lg mb-2 block">Password</label>
       <input type="password" placeholder="password" className="rounded-md w-full px-4 py-2  focus:outline-none focus:ring-1 focus:ring-blue-400"/>
       </div>
       <a href="#" className="text-sm hover:underline hover:text-blue-500 m-2 inline-block">{"Don't"} have an account</a>
       <div className="w-full border border-none bg-gray-950 text-center rounded-md m-2">
        <button className="text-2xl m-1">Login</button>
       </div>
             </form>
        </div>

    </div>
}

export default LogIn;