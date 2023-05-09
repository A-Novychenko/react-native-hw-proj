import {Button} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {RegistrationScreen} from "./screens/auth/RegistrationScreen";
import {LoginScreen} from "./screens/auth/LoginScreen";

import {ProfileScreen} from "./screens/mainScreen/ProfileScreen";
import {PostsScreen} from "./screens/mainScreen/PostsScreen";
import {CreatePostsScreen} from "./screens/mainScreen/CreatePostsScreen";

const MainStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export const useRouterAuth = () => {
  return (
    <MainStack.Navigator initialRouteName="LoginScreen">
      <MainStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />
      <MainStack.Screen
        options={{headerShown: false}}
        name="Registration"
        component={RegistrationScreen}
      />
    </MainStack.Navigator>
  );
};

export const useRouterScreens = () => {
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        headerTintColor: "#212121",
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 20,
          fontSize: 17,
          lineHeight: 22,
          textAlign: "center",
          letterSpacing: -0.408,
          color: "#212121",
        },
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публикации",
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Logout"
              color="#212121"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Создать публикацию",
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Профиль",
        }}
      />
    </Tabs.Navigator>
  );
};
