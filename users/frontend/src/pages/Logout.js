import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("userId");
    alert("你已成功登出！");
    navigate("/login");
  }, [navigate]);

  return null; // 不需要顯示畫面，登出後直接跳轉
};

export default Logout;
