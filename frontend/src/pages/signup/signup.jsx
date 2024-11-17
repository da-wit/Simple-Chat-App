import { Link } from "react-router-dom";
import CheckBox from "../../components/checkbox.component.jsx";
import CustomeInput from "../../components/input.component.jsx";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";
import { ClipLoader } from "react-spinners"; 

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });

  const onFullNameChange = (e) => {
    setInputs({ ...inputs, fullName: e.target.value });
  };
  const onUserNameChange = (e) => {
    setInputs({ ...inputs, username: e.target.value });
  };
  const onPasswordChange = (e) => {
    setInputs({ ...inputs, password: e.target.value });
  };
  const onConfirmPasswordChange = (e) => {
    setInputs({ ...inputs, confirmpassword: e.target.value });
  };

  const onGenderChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const [touched, setTouched] = useState({
    fullname: false,
    username: false,
    password: false,
    confirmpassword: false,
  });

  const handleInputBlur = (name) => {
    setTouched({ ...touched, [name]: true });
  };

  const {loading,signUp} = useSignup();

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);
    await signUp(inputs)
  };
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6  shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-lg">
        <h1 className=" text-3xl font-semibold text-center text-gray-300 mb-6">
          Signup
          <span className=" text-blue-500 ">ChatApp</span>
        </h1>
        {/* {loading && (
          <div className="w-full bg-gray-200 h-2 rounded-md mb-4 overflow-hidden">
            <div
              className="bg-blue-500 h-full animate-pulse"
              style={{ width: "100%" }}
            ></div>
          </div>
        )} */}
        <form onSubmit={onSubmit}>
          <CustomeInput
            lableName="Full Name"
            name="fullname"
            placeHolder="jhon eco"
            type="text"
            value={inputs.fullName}
            onchange={onFullNameChange}
            hasError={inputs.fullName.length >0 && touched.fullname  && inputs.fullName.length < 3}
            onblur={handleInputBlur}
          />
          <CustomeInput
            lableName="Username"
            name="username"
            placeHolder="Enter Username"
            type="text"
            value={inputs.userName}
            onchange={onUserNameChange}
            hasError={(touched.username && inputs.username.length !== 0) && inputs.username.length < 3}
            onblur={handleInputBlur}
          />
          <CustomeInput
            lableName="Password"
            name="password"
            placeHolder="Enter Password"
            type="text"
            value={inputs.password}
            onchange={onPasswordChange}
            hasError={(touched.password && inputs.password.length !== 0) && inputs.password.length < 6}
            onblur={handleInputBlur}
          />
          <CustomeInput
            lableName="Confirm Password"
            name="confirmpassword"
            placeHolder="Enter Confirm Password"
            type="password"
            value={inputs.confirmPassword}
            onchange={onConfirmPasswordChange}
            hasError={(touched.confirmpassword && inputs.confirmpassword.length !== 0) && inputs.password !== inputs.confirmpassword}
            onblur={handleInputBlur}
          />
          <div className="flex">
            <CheckBox
              label="Male"
              onchange={onGenderChange}
              selected={inputs.gender}
            />
            <CheckBox
              label="Female"
              onchange={onGenderChange}
              selected={inputs.gender}
            />
          </div>
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-500 m-2 inline-block"
          >
            Aready have an account?
          </Link>
          <div className="border border-none bg-gray-950 rounded-md m-2 flex justify-center items-center cursor-pointer hover:bg-green-500 hover:text-black">
            <button className="text-2xl m-1 w-full"disabled={loading} // Disable while loading
            >
              {loading ? (
                <ClipLoader color="#ffffff" size={20} /> // Show loader while submitting
              ) : (
                "Signup"
              )}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
