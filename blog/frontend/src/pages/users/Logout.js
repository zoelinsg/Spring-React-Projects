import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    alert("你已成功登出！");
    navigate("/login");
  }, [navigate]);

  return null;
};

export default Logout;
