import { Text, StyleSheet, View } from "react-native";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  tab: {
    padding: 10,
  },
  text: {
    textTransform: "uppercase",
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ text, to, onPress = () => {} }) => {
  return (
    <Link onPress={() => onPress()} to={to}>
      <View style={styles.tab}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Link>
  );
};

export default AppBarTab;
