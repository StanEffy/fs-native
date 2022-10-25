import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ReviewItem from "../RepositoriesList/ReviewItem";
import { useQuery } from "@apollo/client";
import { GET_LOGIN } from "../../graphql/queries";
import AuthStorageContext from "../../contexts/AuthStorageContext";
import useAuthStorage from "../../hooks/useAuthStorage";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviews = () => {
  const authStorage = useAuthStorage();

  const accessToken = authStorage.getAccessToken();

  let authorizedUser = null;

  if (accessToken) {
    const { data } = useQuery(GET_LOGIN, {
      fetchPolicy: "cache-and-network",
      variables: { includeReviews: true },
    });

    if (data) {
      data.authorizedUser !== null
        ? (authorizedUser = data.authorizedUser)
        : (authorizedUser = null);
    }
  }

  const reviews = authorizedUser
    ? authorizedUser.reviews.edges.map((edge) => edge.node)
    : [];
  console.log(reviews);
  if (!authorizedUser) return <Text>Loading</Text>;

  return (
    <>
      <Text>Template text for nothing</Text>
      <FlatList
        data={[]}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item} />}
      />
    </>
  );
};

export default UserReviews;
