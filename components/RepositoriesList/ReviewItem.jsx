import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import theme from "../theme";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-native";
import useDeleteReview from "../../hooks/useDeleteReview";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 10,
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
    marginRight: 10,
  },
  ratingText: {
    fontWeight: "bold",
    color: theme.colors.primary,
    fontSize: 20,
  },
  name: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: theme.colors.primary,
    flexGrow: 1,
    marginRight: 10,
  },
  buttonRed: {
    backgroundColor: theme.colors.danger,
    flexGrow: 1,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    paddingVertical: 5,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    marginVertical: 20,
    justifyContent: "space-between",
  },
  description: {
    flex: 1,
    flexWrap: "wrap",
  },
});

const ReviewItem = ({ review, isSingle = false, refetch }) => {
  const navigate = useNavigate();

  const [deleteReview] = useDeleteReview();

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            await deleteReview(review.id);
            refetch();
          },
        },
      ]
    );

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.reviewRating}>
          <View>
            <Text style={styles.ratingText}>{review.rating}</Text>
          </View>
        </View>
        <View style={{ display: "flex", width: 250 }}>
          <Text style={styles.name}>{review.user.username}</Text>
          <Text>{format(parseISO(review.createdAt), "Pp")}</Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={styles.description}>{review.text}</Text>
          </View>
        </View>
      </View>
      {isSingle ? null : (
        <View style={styles.buttonsContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigate(`/${review.id}`)}
          >
            <Text style={styles.buttonText}>View repo</Text>
          </Pressable>
          <Pressable
            style={styles.buttonRed}
            onPress={() => createTwoButtonAlert()}
          >
            <Text style={styles.buttonText}>Delete review</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
