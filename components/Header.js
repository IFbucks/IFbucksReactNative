import { Text, View, StyleSheet } from "react-native";
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>IFbucks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#84e082",
    padding: 15,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 25,
  },
});
