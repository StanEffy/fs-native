import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import Main from "./components/Main";
import { useFonts } from 'expo-font';
import createApolloClient from "./utils/apolloClient";
import {ApolloProvider} from "@apollo/client";
import AuthStorage from "./utils/authStorage";
import AuthStorageContext from "./contexts/AuthStorageContext";


export default function App() {
    const [fontsLoaded] = useFonts({
        'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const authStorage = new AuthStorage();
    const apolloClient = createApolloClient(authStorage);

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <NativeRouter>
            <ApolloProvider client={apolloClient}>
                <AuthStorageContext.Provider value={authStorage}>
                    <Main />
                </AuthStorageContext.Provider>
            </ApolloProvider>
        </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c2c2',
  },
});
