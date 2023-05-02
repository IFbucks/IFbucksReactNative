import { Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {" "}
        IFbucks <MaterialCommunityIcons
          name="coffee"
          size={24}
          color="black"
        />{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f1f1f1",
    padding: 20,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 25,
    marginTop: 30,
  },
});
