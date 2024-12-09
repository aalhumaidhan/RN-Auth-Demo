import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import ROUTES from "../index";
import Notes from "../../screens/Home/Notes";
import colors from "../../data/styling/colors";
import NoteDetails from "../../screens/Home/NoteDetails";
import UserContext from "../../context/UserContext";
import { deleteToken } from "../../api/storage";
const Stack = createNativeStackNavigator();

const HomeNav = () => {
  const [authenticated, setAuthenticated] = useContext(UserContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => {
          return (
            <TouchableOpacity
              onPress={async () => {
                await deleteToken();
                setAuthenticated(false);
              }}
            >
              <MaterialCommunityIcons name="logout" size={24} color="red" />
            </TouchableOpacity>
          );
        },
      }}
    >
      <Stack.Screen
        name={ROUTES.HOME.NOTES}
        component={Notes}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitle: "All Notes",
          headerTitleStyle: {
            color: colors.white,
            fontWeight: "bold",
            fontSize: 20,
          },
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name={ROUTES.HOME.NOTE_DETAILS}
        component={NoteDetails}
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitle: "Note Details",
          headerTitleStyle: {
            color: colors.white,
            fontWeight: "bold",
            fontSize: 20,
          },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNav;

const styles = StyleSheet.create({});
