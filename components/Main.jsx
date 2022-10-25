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
import { useDebounce } from "use-debounce";

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
  const [keyword, setKeyword] = useState("");
  const [searchKeyword] = useDebounce(keyword, 500);
  const { repositories } = useRepositories({
    orderBy,
    orderDirection,
    searchKeyword,
  });

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
              handleKeyword={setKeyword}
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
