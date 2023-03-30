import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
      </Text>
      <Text style={styles.footerText}>
        {" "}
        <MaterialCommunityIcons
          name="cellphone-sound"
          size={24}
          color="black"
        />
        Contact us  !
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#f1f1f1",
    padding: 5,
    /*width: "100%",
    alignContent: "center",
    alignItems: "center",
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',*/
  },
  footerText: {
    color: "black",
    fontSize: 18,
    padding: 8,
  },
});

/*<AntDesign name="barcode" size={24} color="black" />
        <AntDesign name="copyright" size={13} color="black" />*/