import { IoIosLogOut } from "react-icons/io";
import { useLogout } from "../../../hooks/useLogout";
export const Logout = () => {
  const {logout} = useLogout()
  const handleLogout = async(e) => {
    e.preventDefault();
    await logout()
  }
  return (
    <button onClick={handleLogout} className="mt-auto mb-2 flex justify-center items-center">
      <IoIosLogOut className=" hover:text-red-500 hover:text-4xl  text-lg " />
    </button>
  )
}
