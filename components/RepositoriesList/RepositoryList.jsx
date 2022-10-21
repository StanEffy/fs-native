import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";

import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({ repositories }) => {
  const navigate = useNavigate();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories?.edges
        ?.map((edge) => edge.node)
        .sort((a, b) => b.forksCount - a.forksCount)
    : [];

  return (
    <>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Pressable key={item.id} onPress={() => navigate(`/${item.id}`)}>
            <RepositoryItem item={item} />
          </Pressable>
        )}
      />
    </>
  );
};

export default RepositoryList;
