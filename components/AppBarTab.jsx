import {Text, StyleSheet} from "react-native";
import theme from "./theme";

const styles = StyleSheet.create({
    tab: {
        padding: 10,
        textTransform: "uppercase",
        fontWeight: theme.fontWeights.bold
    }
})

const AppBarTab = ({label}) => {
    return (
        <Text style={styles.tab}>
            {label}
        </Text>
    );
};

export default AppBarTab;