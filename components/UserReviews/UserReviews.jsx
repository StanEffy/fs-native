import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ReviewItem from "../RepositoriesList/ReviewItem";
import { useQuery } from "@apollo/client";
import { GET_LOGIN } from "../../graphql/queries";

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
    console.log(data);
    if (data) {
      data.me !== null ? (authorizedUser = data.me) : (authorizedUser = null);
    }
  }

  const reviews = authorizedUser
    ? authorizedUser.reviews.edges.map((edge) => edge.node)
    : [];

  if (!authorizedUser) return <Text>Loading</Text>;

  return (
    <>
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item} />}
      />
    </>
  );
};

export default UserReviews;
