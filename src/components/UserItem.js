import { Text, View, Image } from "react-native";
import React from "react";
import colors from "../data/styling/colors";

const UserProfileCard = ({ image, email, name }) => {
  return (
    <View
      style={{
        padding: 20,
        margin: 10,
        backgroundColor: colors.secondary,
        borderRadius: 15,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          marginBottom: 15,
        }}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 8,
          color: colors.white,
        }}
      >
        {name ? name : "Dawood"}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: colors.white,
          fontWeight: "600",
          opacity: 0.8,
        }}
      >
        {email ? email : "dawood@gmail.com"}
      </Text>
    </View>
  );
};

export default UserProfileCard;
