import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/AppBar";
import { NativeRouter } from 'react-router-native';
import Main from "./components/Main";

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <NativeRouter>
         <Main />
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
