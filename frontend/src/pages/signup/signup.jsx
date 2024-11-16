import CheckBox from "../../components/checkbox.component.jsx"
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
      <div className="flex">
      <CheckBox label="Male"/>
      <CheckBox label="Female"/>
      </div>
       <a href="#" className="text-sm hover:underline hover:text-blue-500 m-2 inline-block">Aready have an account?</a>
       <div className="border border-none bg-gray-950 rounded-md m-2 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-black">
        <button className="text-2xl m-1">Signup</button>
       </div>
             </form>
        </div>

    </div>
  )
}

export default Signup
