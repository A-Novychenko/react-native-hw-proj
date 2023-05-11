import {StyleSheet, moduleName} from "react-native";

import {useEffect, useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {DefaultPostsScreen} from "../nestedScreen/defaultPostsScreen";
import {MapScreen} from "../nestedScreen/MapScreen";
import {CommentsScreen} from "../nestedScreen/CommentsScreen";

const NestedScreen = createStackNavigator();

export const PostsScreen = ({route}) => (
  <NestedScreen.Navigator>
    <NestedScreen.Screen name="DefaultPosts" component={DefaultPostsScreen} />
    <NestedScreen.Screen name="Map" component={MapScreen} />
    <NestedScreen.Screen name="Comments" component={CommentsScreen} />
  </NestedScreen.Navigator>
);

const styles = StyleSheet.create({});
