import {FlatList, View, StyleSheet} from 'react-native';
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = ({repositories}) => {

    // Get the nodes from the edges array
    const repositoryNodes = repositories
        ? repositories?.edges?.map(edge => edge.node).sort((a, b) => b.forksCount - a.forksCount)
        : [];

    return (
        <>
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item}) => (
                    <RepositoryItem key={item.id} item={item}/>
                )}
            />
        </>
    );
};

export default RepositoryList;
