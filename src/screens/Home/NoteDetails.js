import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../data/styling/colors";
import { getNote } from "../../api/notes";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";

const NoteDetails = ({ route }) => {
  const { id } = route.params;
  const { data, isLoading } = useQuery({
    queryKey: ["getnote", id],
    queryFn: () => getNote(id),
  });

  if (isLoading) return <Loading />;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        padding: 20,
      }}
    >
      <View
        style={{
          backgroundColor: colors.secondary,
          padding: 20,
          borderRadius: 15,
          minHeight: 200,
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
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          {data?.title}
        </Text>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 20,
          }}
        >
          {data?.topics?.map((topic) => (
            <View
              style={{
                backgroundColor: colors.tertiary,
                padding: 12,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: colors.white }}>{topic}</Text>
            </View>
          ))}
        </View>

        <Text
          style={{
            color: colors.white,
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          {data?.body}
        </Text>
      </View>
    </View>
  );
};

export default NoteDetails;

const styles = StyleSheet.create({});
