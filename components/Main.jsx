import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import RepositoryList from "./RepositoriesList/RepositoryList";
import AppBar from "./AppBar/AppBar";
import SignIn from "./SignIn/SignIn";
import useRepositories from "../hooks/useRepos";
import RepositoryItem from "./RepositoriesList/RepositoryItem";
import Review from "./ReviewForm/ReviewForm";
import SignUp from "./SignUp/SignUp";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bbbbbb",
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const [filter, setFilter] = useState("CREATED_AT-ASC");
  const [orderBy, orderDirection] = filter.split("-");
  const { repositories } = useRepositories({ orderBy, orderDirection });

  const handleFilter = (f) => setFilter(f);

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            <RepositoryList
              handleFilter={handleFilter}
              repositories={repositories}
            />
          }
          exact
        />
        <Route path="/sign_in" element={<SignIn />} exact />
        <Route path="/sign_up" element={<SignUp />} exact />
        <Route path="/review" element={<Review />} exact />
        <Route path="/:id" element={<RepositoryItem isSingle={true} />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
