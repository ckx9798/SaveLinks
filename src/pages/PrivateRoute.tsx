import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = Cookies.get("accessToken");

  useEffect(() => {
    if (!token) {
      toast.error("로그인이 필요합니다");
    }
  }, [token]);

  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
