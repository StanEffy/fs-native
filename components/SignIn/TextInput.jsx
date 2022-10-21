import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  onError: {
    borderColor: "red",
    borderWidth: 1,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, error && styles.onError];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
