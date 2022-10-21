import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import theme from "../theme";
const styles = StyleSheet.create({
    textCaption: {
        fontWeight: theme.fontWeights.bold
    },
    badge: {
        display: "flex",
        alignItems: "center"
    }
})
export const getNumber = (num) => {
    const thousands = (num / 1000).toFixed(1)
    return num > 1000 ? thousands + "k" : num
}

const StatsBlock = ({label, value, testId}) => {

    return (
        <View style={styles.badge}>
            <Text style={styles.textCaption} testID={testId}>{getNumber(value)}</Text>
            <Text>{label}</Text>
        </View>
    );
};

export default StatsBlock;