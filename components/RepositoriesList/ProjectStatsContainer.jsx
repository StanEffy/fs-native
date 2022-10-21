import {StyleSheet, View} from "react-native";
import StatsBlock from "./StatsBlock";
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 23
    },
    bottomContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    }
})


const ProjectStatsContainer = ({forksCount, stargazersCount, ratingAverage, reviewCount}) => {

    return (
        <View style={styles.container && styles.bottomContainer}>
            <StatsBlock label={"Forks"} value={forksCount} testId={"forksCount"}/>
            <StatsBlock label={"Stars"} value={stargazersCount} testId={"stargazersCount"}/>
            <StatsBlock label={"Average rating"} value={ratingAverage} testId={"ratingAverage"}/>
            <StatsBlock label={"Reviews"} value={reviewCount} testId={"reviewCount"}/>
        </View>
    );
};

export default ProjectStatsContainer;