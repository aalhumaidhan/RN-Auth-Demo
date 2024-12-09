import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../data/styling/colors";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../navigation";

const Note = ({ title, topics, user, _id }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: colors.secondary,
          padding: 20,
          width: "100%",
          borderRadius: 15,
          minHeight: 180,
          elevation: 5,
          shadowColor: colors.black,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <Text
          style={{
            color: colors.white,
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 8,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: colors.white,
            fontSize: 16,
            fontWeight: "600",
            opacity: 0.8,
          }}
        >
          Created By: {user?.name}
        </Text>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          {topics?.map((topic) => (
            <View
              style={{
                backgroundColor: colors.tertiary,
                padding: 12,
                borderRadius: 10,
                marginBottom: 5,
              }}
            >
              <Text>{topic}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: colors.tertiary,
            padding: 12,
            borderRadius: 10,
            width: "100%",
            alignItems: "center",
            marginBottom: 5,
          }}
          onPress={() =>
            navigation.navigate(ROUTES.HOME.NOTE_DETAILS, { id: _id })
          }
        >
          <Text
            style={{
              color: colors.white,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            View Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Note;
