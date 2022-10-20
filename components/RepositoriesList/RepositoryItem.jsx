import {View, Text, Image, StyleSheet} from 'react-native';
import theme from "../theme";
import MyAppText from "../MyAppText/MyAppText";

const styles = StyleSheet.create({
    card: {
      marginBottom: 10,
      backgroundColor: "#fff",
        paddingVertical: 20
    },
    image: {
        width: 50,
        height: 50
    },
    container: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 23
    },
    bottomContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    descriptionContainer: {
        paddingLeft: 10
    },
    textCaption: {
        fontWeight: theme.fontWeights.bold
    },
    languageContainer: {
        padding: 7,
        borderRadius: 10,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-start"
    },
    languageStyle: {
        color: "#fff",
        flexShrink: 1
    },
    badge: {
        display: "flex",
        alignItems: "center"
    }
})

const RepositoryItem = ({item}) => {
    const {fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl} = item
    const getNumber = (num) => {
        const thousands = (num / 1000).toFixed(1)
        return thousands + "k"
    }
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <View style={styles.image}>
                    <Image style={styles.image} source={{
                        uri: ownerAvatarUrl
                    }} />
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.textCaption}>{fullName}</Text>
                    <MyAppText>{description}</MyAppText>
                    <View style={styles.languageContainer}>
                        <Text style={styles.languageStyle}>{language}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.container && styles.bottomContainer}>
                <View style={styles.badge}>
                    <Text style={styles.textCaption}>{getNumber(forksCount)}</Text>
                    <Text>Forks</Text>
                </View>
                <View style={styles.badge}>
                    <Text style={styles.textCaption}>{getNumber(stargazersCount)}</Text>
                    <Text>Stars </Text>
                </View>
                <View style={styles.badge}>
                    <Text style={styles.textCaption}>{ratingAverage}</Text>
                    <Text>Average rating</Text>
                </View>
                <View style={styles.badge}>
                    <Text style={styles.textCaption}>{reviewCount}</Text>
                    <Text>Review</Text>
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;
