import { View, Text, StyleSheet, Button, Linking } from "react-native";
import theme from "../theme";
import DescriptionPart from "./DescriptionPart";
import ProjectStatsContainer from "./ProjectStatsContainer";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_REPO } from "../../graphql/queries";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 23,
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  descriptionContainer: {
    paddingLeft: 10,
  },
  textCaption: {
    fontWeight: theme.fontWeights.bold,
  },
  languageContainer: {
    padding: 7,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
  },
  languageStyle: {
    color: "#fff",
    flexShrink: 1,
  },
  badge: {
    display: "flex",
    alignItems: "center",
  },
});

const RepositoryItem = ({ item, isSingle = false }) => {
  const { id } = useParams();
  const [singleItem, setSingleItem] = useState(null);

  const { loading } = useQuery(GET_REPO, {
    variables: { repositoryId: id },
    onCompleted: (data) => setSingleItem(data.repository),
  });

  if (loading) return <Text>Loading...</Text>;

  console.log("single item is " + singleItem);

  const handleLinkPressed = (url) => {
    Linking.openURL(url);
  };
  if (!item && !singleItem) return <Text>No such item</Text>;
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
    url,
  } = item ? item : singleItem;

  return (
    <View style={styles.card} testID="repositoryItem">
      <DescriptionPart
        ownerAvatarUrl={ownerAvatarUrl}
        description={description}
        fullName={fullName}
        language={language}
      />
      <ProjectStatsContainer
        forksCount={forksCount}
        stargazersCount={stargazersCount}
        ratingAverage={ratingAverage}
        reviewCount={reviewCount}
      />
      {isSingle ? (
        <Button
          title={"Open in GitHub"}
          onPress={() => handleLinkPressed(url)}
        />
      ) : null}
    </View>
  );
};

export default RepositoryItem;
