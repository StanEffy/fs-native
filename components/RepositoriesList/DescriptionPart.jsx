import { Image, StyleSheet, Text, View } from "react-native";
import theme from "../theme";
import MyAppText from "../MyAppText/MyAppText";

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 23,
  },
  descriptionContainer: {
    paddingLeft: 10,
  },
  textCaption: {
    fontWeight: theme.fontWeights.bold,
  },
  languageContainer: {
    padding: 7,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
  },
  languageStyle: {
    color: "#fff",
    flexShrink: 1,
  },
});
const DescriptionPart = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={styles.image}
          source={{
            uri: ownerAvatarUrl,
          }}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.textCaption} testID={"fullName"}>
          {fullName}
        </Text>
        <MyAppText testId={"description"}>{description}</MyAppText>
        <View style={styles.languageContainer}>
          <Text style={styles.languageStyle} testID={"language"}>
            {language}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DescriptionPart;
