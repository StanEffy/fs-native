import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter } from 'react-router-native';
import Main from "./components/Main";
import { useFonts } from 'expo-font';
import createApolloClient from "./utils/apolloClient";
import {ApolloProvider} from "@apollo/client";

export default function App() {
    const [fontsLoaded] = useFonts({
        'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }

    const apolloClient = createApolloClient()

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <NativeRouter>
            <ApolloProvider client={apolloClient}>
                <Main />
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
