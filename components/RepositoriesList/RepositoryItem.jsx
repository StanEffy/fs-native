import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";
import DescriptionPart from "./DescriptionPart";
import ProjectStatsContainer from "./ProjectStatsContainer";

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

const RepositoryItem = ({ item }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = item;

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
    </View>
  );
};

export default RepositoryItem;
