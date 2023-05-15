import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {authStateCahngeUser} from "../redux/auth/authOperations";
import {useRouterAuth} from "../router";
import {Home} from "../screens/mainScreen/Home";

const Main = () => {
  const {stateChange} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateCahngeUser());
  }, []);

  return (
    <NavigationContainer>
      {!stateChange ? useRouterAuth() : <Home />}
    </NavigationContainer>
  );
};

export default Main;
