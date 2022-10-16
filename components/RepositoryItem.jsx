import { View, Text} from 'react-native';

const RepositoryItem = ({item}) => {
    const {fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl} = item

    return (
        <View>
            <Text>{fullName}</Text>
            <Text>{description}</Text>
            <Text>{language}</Text>
            <Text>Forks: {forksCount}</Text>
            <Text>Stargazers: {stargazersCount}</Text>
            <Text>Average rating: {ratingAverage}</Text>
            <Text>Review count: {reviewCount}</Text>

        </View>
    );
};

export default RepositoryItem;
