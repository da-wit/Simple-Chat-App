import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function useSignup() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signUp = async ({
    fullName,
    username,
    password,
    confirmpassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmpassword,
      gender,
    });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmpassword,
          gender,
        }),
      });

      const data = await res.json();
      //   console.log(data);
      //   console.log("data");
      if (res.ok) {
        localStorage.setItem("user-info", JSON.stringify(data));
        setAuthUser(data);
        toast.success("Signup successful!");
      } else {
        toast.error(data.error || "Signup failed");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signUp };
}
export default useSignup;

const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmpassword,
  gender,
}) => {
  console.log(fullName);
  console.log(username);
  console.log(password);
  console.log(confirmpassword);
  console.log(gender);
  if (!fullName || !username || !password || !confirmpassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (fullName.length < 3) {
    toast.error("Fullname need to have at least 3 characters");
    return false;
  }
  if (username.length < 3) {
    toast.error("username need to have at least 3 characters");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password need to have at least 6 characters");
    return false;
  }
  if (password !== confirmpassword) {
    toast.error("Password doesn't match");
    return false;
  }
  return true;
};
