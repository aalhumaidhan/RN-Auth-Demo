import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../data/styling/colors";
import Note from "../../components/Note";
import { useQuery } from "@tanstack/react-query";
import { getAllNotes } from "../../api/notes";
import Loading from "../../components/Loading";
const Notes = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getallnotes"],
    queryFn: getAllNotes,
  });

  if (isLoading) return <Loading />;

  const notes = data?.map((note) => <Note key={note._id} {...note} />);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        // padding: 20,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        {notes}
      </ScrollView>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});
