import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "row",
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
    paddingHorizontal: 10,
  },
  ratingText: {
    fontWeight: "bold",
    color: theme.colors.primary,
    fontSize: 20,
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.reviewRating}>
        <View>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
      </View>
      <View>
        <Text>{review.user.username}</Text>
        <Text>{review.createdAt}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
