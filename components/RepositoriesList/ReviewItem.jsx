import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import theme from "../theme";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
  },
  reviewRating: {
    borderRadius: 50,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  ratingText: {
    fontWeight: "bold",
    color: theme.colors.primary,
    fontSize: 20,
  },
  name: {
    fontWeight: "bold",
  },
});

const ReviewItem = ({ review }) => {
  const navigate = useNavigate();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.reviewRating}>
        <View>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.name}>{review.user.username}</Text>
        <Text>{format(parseISO(review.createdAt), "PPpp")}</Text>
        <Text>{review.text}</Text>
      </View>
      <View>
        <Pressable
          style={{ backgroundColor: "blue" }}
          onPress={() => navigate(`/${review.id}`)}
        >
          <Text>View repo</Text>
        </Pressable>
        <Pressable style={{ backgroundColor: "red" }}>
          <Text>Delete repo</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ReviewItem;
