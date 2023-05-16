import {StyleSheet} from "react-native";

import {createStackNavigator} from "@react-navigation/stack";
import {DefaultPostsScreen} from "../nestedScreen/DefaultPostsScreen";
import {MapScreen} from "../nestedScreen/MapScreen";
import {CommentsScreen} from "../nestedScreen/CommentsScreen";

const NestedScreen = createStackNavigator();

export const PostsScreen = ({route}) => (
  <NestedScreen.Navigator>
    <NestedScreen.Screen
      name="DefaultPosts"
      component={DefaultPostsScreen}
      options={{
        title: "Публикации",
      }}
    />
    <NestedScreen.Screen
      name="Map"
      component={MapScreen}
      options={{
        title: "Карта",
      }}
    />
    <NestedScreen.Screen
      name="Comments"
      component={CommentsScreen}
      options={{
        title: "Комментарии",
      }}
    />
  </NestedScreen.Navigator>
);

const styles = StyleSheet.create({});
