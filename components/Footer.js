import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        {" "}
        <MaterialCommunityIcons
          name="cellphone-sound"
          size={24}
          color="black"
        />
        Contact us !
      </Text>
      <Text style={styles.footerText}>
        <AntDesign name="copyright" size={13} color="black" />
        Thanks for the preference =D{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#f1f1f1",
    padding: 5,
    alignItems: "center",
  },
  footerText: {
    color: "black",
    fontSize: 18,
    padding: 8,
  },
});

/*<AntDesign name="barcode" size={24} color="black" />
 */
