import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {useRouter} from "../router";
import {authStateCahngeUser} from "../redux/auth/authOperations";

const Main = () => {
  const {stateChange} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const routing = useRouter(stateChange);

  useEffect(() => {
    dispatch(authStateCahngeUser());
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
