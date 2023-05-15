import {StyleSheet} from "react-native";
import {useRouterScreens} from "../../router";

export const Home = () => {
  return useRouterScreens();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
