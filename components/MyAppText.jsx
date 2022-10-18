import {Platform, StyleSheet, Text} from "react-native";
const styles = StyleSheet.create({
    text:{
        fontFamily: Platform.select({
            ios: "Arial",
            android: "Raleway-Regular",
            default: "System"
        }),
        color: Platform.select({
            ios: "red",
            android: "blue"
        })
    }

})

const MyAppText = ({children, style}) => {
    const styleProp = [style, styles.text]
    return (
        <Text style={styleProp}>
            {children}
        </Text>
    );
};

export default MyAppText;