import React from "react";
import { Pressable, Text, View } from "react-native";

const Filter = ({ handleFilter }) => {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
        }}
      >
        Filters
      </Text>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "grey",
        }}
      >
        <Pressable onPress={() => handleFilter("CREATED_AT-DESC")}>
          <Text>Latest repos</Text>
        </Pressable>
        <Pressable onPress={() => handleFilter("RATING_AVERAGE-DESC")}>
          <Text>Highest rate</Text>
        </Pressable>
        <Pressable onPress={() => handleFilter("RATING_AVERAGE-ASC")}>
          <Text>Lowest rate</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Filter;
