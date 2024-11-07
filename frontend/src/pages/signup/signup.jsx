import CustomeInput from "../../components/input.component.jsx"

const Signup = () => {
  return (
     <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
        <div className="w-full p-6  shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-lg">
       <h1 className=" text-3xl font-semibold text-center text-gray-300 mb-6">
        Signup
       <span className=" text-blue-500 ">
        ChatApp
        </span>
       </h1>
       <form>
      <CustomeInput lableName="Full Name" name="fullname"  placeHolder="jhon eco"  type="text"/>
      <CustomeInput lableName="Username" name="username"  placeHolder="Enter Username"  type="text"/>
      <CustomeInput lableName="Password" name="password"  placeHolder="Enter Password"  type="text"/>
      <CustomeInput lableName="Confirm Password" name="confirmpassword"  placeHolder="Enter Confirm Password"  type="password"/>
       <a href="#" className="text-sm hover:underline hover:text-blue-500 m-2 inline-block">Aready have an account</a>
       <div className="w-full border border-none bg-gray-950 text-center rounded-md m-2">
        <button className="text-2xl m-1">Signup</button>
       </div>
             </form>
        </div>

    </div>
  )
}

export default Signup
