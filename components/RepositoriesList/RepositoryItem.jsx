import {
  View,
  Text,
  StyleSheet,
  Button,
  Linking,
  FlatList,
} from "react-native";
import theme from "../theme";
import DescriptionPart from "./DescriptionPart";
import ProjectStatsContainer from "./ProjectStatsContainer";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_REPO, GET_REPO_REVIEWS } from "../../graphql/queries";
import { useState } from "react";
import ReviewItem from "./ReviewItem";

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
  reviewRating: {
    borderRadius: "50%",
    borderColor: theme.colors.primary,
    borderWidth: 2,
    width: 50,
    height: 50,
  },
  styles: {
    marginHorizontal: 10,
  },
});

const RepositoryInfo = ({ item }) => {
  if (!item) return <Text>No such item</Text>;
  return (
    <View>
      <Text>{item.description}</Text>
    </View>
  );
};

const RepositoryItem = ({ item, isSingle = false }) => {
  const { id } = useParams();
  const [singleItem, setSingleItem] = useState(null);
  const [reviews, setReviews] = useState(null);
  const { loading } = useQuery(GET_REPO, {
    variables: { repositoryId: id },
    onCompleted: (data) => setSingleItem(data.repository),
  });

  const dataReviews = useQuery(GET_REPO_REVIEWS, {
    variables: { repositoryId: id },
    onCompleted: (data) =>
      setReviews(data.repository.reviews.edges.map((e) => e.node)),
  });
  if (loading) return <Text>Loading...</Text>;

  console.log(reviews);

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
        <>
          <View style={styles.magrin}>
            <Button
              title={"Open in GitHub"}
              onPress={() => handleLinkPressed(url)}
            />
          </View>

          <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryInfo repository={item} />}
          />
        </>
      ) : null}
    </View>
  );
};

export default RepositoryItem;
