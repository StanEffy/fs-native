import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../theme";
import { format, parseISO } from "date-fns";

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
    </View>
  );
};

export default ReviewItem;
