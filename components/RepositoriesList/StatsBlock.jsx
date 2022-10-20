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
const StatsBlock = ({label, value}) => {

    const getNumber = (num) => {
        const thousands = (num / 1000).toFixed(1)
        return thousands + "k"
    }

    return (
        <View style={styles.badge}>
            <Text style={styles.textCaption}>{value > 1000 ? getNumber(value) : value}</Text>
            <Text>{label}</Text>
        </View>
    );
};

export default StatsBlock;