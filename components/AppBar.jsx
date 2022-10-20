import {View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import theme from "./theme";
import AppBarTab from "./AppBarTab";
import {useContext, useEffect} from "react";
import AuthStorageContext from "../contexts/AuthStorageContext";
import {useApolloClient, useQuery} from "@apollo/client";
import {GET_LOGIN} from "../graphql/queries";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.primary,
        paddingBottom: Constants.statusBarHeight,
        display: "flex",
        flexDirection: "row"
    },
});

const AppBar = () => {
    const {data, loading} = useQuery(GET_LOGIN, {
        fetchPolicy: "cache-and-network"
    })

    const auth = useContext(AuthStorageContext)
    const apollo = useApolloClient()

    if (loading) return null;

    const handleLogout = async () => {
        await auth.removeAccessToken()
        apollo.resetStore()
    }

    const isSignedIn = data ? data["me"] : false;

    return <View style={styles.container}>
        <ScrollView horizontal>
            <AppBarTab to={"/"} style={styles.text} text={"Repositories"}/>
            {
                isSignedIn ? <AppBarTab onPress={handleLogout} to={"/"} style={styles.text} text={"Sign out"}/> : <AppBarTab to={"/sign_in"} style={styles.text} text={"Sign in"}/>
            }

        </ScrollView>

    </View>;
};

export default AppBar;