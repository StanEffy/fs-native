import {View, StyleSheet, Text} from 'react-native';
import Constants from 'expo-constants';
import theme from "./theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.primary,
        width: "100%",
        paddingBottom: Constants.statusBarHeight
    },
    text: {
        color: theme.colors.textPrimary,
        textTransform: "uppercase"
    }
    // ...
});

const AppBar = () => {
    return <View style={styles.container}>
        <AppBarTab style={styles.text} label={"Repositories"}/>
        <AppBarTab style={styles.text} label={"Another"}/>
    </View>;
};

export default AppBar;