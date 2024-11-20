import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import toast from "react-hot-toast";

export const useFetchUsers = () => {
  const { setUsers } = useUserContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users", {
          method: "GET",
        });
        const data = await res.json();
        if (res.ok) {
          toast.success("User fetched successfully");
        } else {
          toast.error("Error occured while fetching users");
        }
        setUsers(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  return { loading };
};
