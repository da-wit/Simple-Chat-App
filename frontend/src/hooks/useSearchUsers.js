import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import toast from "react-hot-toast";

const useSearchUsers = (searchQuery) => {
  const [loading, setLoading] = useState(false);
  const { setUsers } = useUserContext();

  useEffect(() => {
    const getFilterdUsers = async () => {
      //   if (!searchQuery) {
      //     return;
      //   }
      setLoading(true);
      try {
        const res = await fetch(`/api/users/search?name=${searchQuery}`, {
          method: "GET",
        });
        const data = await res.json();
        if (res.ok) {
          if (data.length === 0) {
            setUsers([]);
          } else {
            setUsers(data);
          }
        } else {
          toast.error(data.error || "Failed to fetch users");
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getFilterdUsers();
  }, [searchQuery, setUsers]);

  return { loading };
};

export default useSearchUsers;
