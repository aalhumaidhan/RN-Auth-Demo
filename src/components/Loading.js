import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import colors from "../data/styling/colors";

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
      }}
    >
      <ActivityIndicator size="large" color={colors.white} />
    </View>
  );
};

export default Loading;
