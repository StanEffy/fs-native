import {Text, StyleSheet} from "react-native";
import theme from "./theme";
import {Link} from "react-router-native";

const styles = StyleSheet.create({
    tab: {
        fontSize: 20
    }
})

const AppBarTab = ({text, to}) => {
    return (
        <Link to={to} style={styles.tab}>
            <Text>
                {text}
            </Text>
        </Link>
    );
};

export default AppBarTab;