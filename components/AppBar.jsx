import {View, StyleSheet, Text} from 'react-native';
import Constants from 'expo-constants';
import theme from "./theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.primary,
        paddingBottom: Constants.statusBarHeight,
        display: "flex",
        flexDirection: "row"
    },
    tab: {
        padding: 10,
        textTransform: "uppercase",
        fontWeight: theme.fontWeights.bold
    }
    // ...
});

const AppBar = () => {
    return <View style={styles.container}>
        <AppBarTab to={"/"} style={styles.text} text={"Repositories"}/>
        <AppBarTab to={"/sign_in"} style={styles.text} text={"Sign in"}/>
    </View>;
};

export default AppBar;