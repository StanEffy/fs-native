import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";

import { useNavigate } from "react-router-native";
import Filter from "../Filter/Filter";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({
  repositories,
  handleFilter,
  handleKeyword,
  onEndReach,
}) => {
  const navigate = useNavigate();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories?.edges?.map((edge) => edge.node)
    : [];

  return (
    <>
      <Filter handleFilter={handleFilter} handleKeyword={handleKeyword} />
      <FlatList
        data={repositoryNodes}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
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
