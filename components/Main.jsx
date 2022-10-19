import { StyleSheet, View} from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignIn from "./SignIn";
import useUsers from "../hooks/useUsers";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#bbbbbb",
        flexGrow: 1,
        flexShrink: 1
    },
});

const Main = () => {
   const {users} = useUsers()
    console.log(users)


    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/" element={<RepositoryList />} exact />
                <Route path="/sign_in" element={<SignIn />} exact />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </View>
    );
};

export default Main;