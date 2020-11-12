import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const selectUserId = (state) => {
  return state;
};
export const useAuthStatus = (authStatus) => {
  const [isAuth, setIsAuth] = useState(authStatus);
  const userId = useSelector(selectUserId);
  const userData = localStorage.getItem("auth");
  const idLoggedIn = userData === null ? false : true;

  useEffect(() => {
    idLoggedIn ? setIsAuth(true) : setIsAuth(false);
  }, [userId]);

  return isAuth;
};
