import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useSearchUsers from "../../../hooks/useSearchUsers";
import { useFetchUsers } from "../../../hooks/useFetchUsers";
export const Searchinput= () => {
  const [query,setQuery] = useState("")
  const {loading}=useSearchUsers(query)

  // if(!query){
  //   useFetchUsers()
  // }

  return (
    <form className="flex items-center gap-2 p-2">
      <input 
  type="search" 
  id="search" 
  placeholder="Search"
  value={query}
  onChange={(e)=>setQuery(e.target.value)}
  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
/>
{/* <button type="submit" className="w-14 h-10 rounded-full flex justify-center items-center bg-blue-400">
<IoSearchSharp className="text-black text-2xl"/>
</button> */}

    </form>
  )
}
