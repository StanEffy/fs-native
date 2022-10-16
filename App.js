import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/AppBar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AppBar />
      <RepositoryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c2c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
