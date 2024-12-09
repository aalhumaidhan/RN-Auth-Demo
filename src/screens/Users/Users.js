import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import UserItem from "../../components/UserItem";
import colors from "../../data/styling/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api/auth";
import Loading from "../../components/Loading";
const Users = () => {
  const { data, isLoading } = useQuery({
    queryFn: getAllUsers,
  });

  console.log(data ? data[0] : "");
  if (isLoading) return <Loading />;
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.primary }}>
      {data?.map((user) => (
        <UserItem key={user._id} {...user} />
      ))}
    </ScrollView>
  );
};

export default Users;

const styles = StyleSheet.create({});
