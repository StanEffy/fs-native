import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

const Filter = ({ handleFilter, handleKeyword }) => {
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
        <Pressable ons={() => handleFilter("RATING_AVERAGE-DESC")}>
          <Text>Highest rate</Text>
        </Pressable>
        <Pressable onPress={() => handleFilter("RATING_AVERAGE-ASC")}>
          <Text>Lowest rate</Text>
        </Pressable>
      </View>
      <View>
        <TextInput
          placeholder={"Filter repo owner name"}
          placeholderTextColor={"primary"}
          style={{
            backgroundColor: "#ffffff",
            padding: 5,
          }}
          onChangeText={(e) => handleKeyword(e)}
        />
      </View>
    </View>
  );
};

export default Filter;
