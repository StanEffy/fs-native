import {View, StyleSheet, Text, ScrollView} from 'react-native';
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

    // ...
});

const AppBar = () => {
    return <View style={styles.container}>
        <ScrollView horizontal>
            <AppBarTab to={"/"} style={styles.text} text={"Repositories"}/>
            <AppBarTab to={"/sign_in"} style={styles.text} text={"Sign in"}/>
            <AppBarTab to={"/"} style={styles.text} text={"Repositories"}/>
            <AppBarTab to={"/sign_in"} style={styles.text} text={"Sign in"}/>
            <AppBarTab to={"/"} style={styles.text} text={"Repositories"}/>
            <AppBarTab to={"/sign_in"} style={styles.text} text={"Sign in"}/>
            <AppBarTab to={"/"} style={styles.text} text={"Repositories"}/>
            <AppBarTab to={"/sign_in"} style={styles.text} text={"Sign in"}/>
        </ScrollView>

    </View>;
};

export default AppBar;