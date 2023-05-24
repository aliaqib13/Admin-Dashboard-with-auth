import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
  const isBrowser = typeof window !== "undefined";

  const [token, setToken] = useState(
    isBrowser ? localStorage.getItem("token") ?? null : null
  );

  const router = useRouter();
  useEffect(() => {
    if (!token) {
      router.push("/auth/login");
    }
  }, [router, token]);

  return token ? children : null;
};

export default PrivateRoute;
