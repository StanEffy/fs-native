import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import RepositoryList from "./RepositoriesList/RepositoryList";
import AppBar from "./AppBar/AppBar";
import SignIn from "./SignIn/SignIn";
import useRepositories from "../hooks/useRepos";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bbbbbb",
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const { repositories } = useRepositories();
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={<RepositoryList repositories={repositories} />}
          exact
        />
        <Route path="/sign_in" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
