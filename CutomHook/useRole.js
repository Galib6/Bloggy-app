import { useContext, useEffect, useState } from "react";

const useRole = (email) => {
  const [role, setRole] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:3000/api/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setRole(data?.role);
          setLoading(false);
        });
    }
  }, [email]);
  return [role, isLoading];
};

export default useRole;
