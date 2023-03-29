import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Footer() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer <AntDesign name="copyright" size={15} color="black" /></Text>
        <AntDesign name="barcode" size={24} color="black" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    footer: {
      backgroundColor: "#f1f1f1",
      padding: 10,
      width: "100%",
      alignContent: "center",
      alignItems: "center",
      /*position: 'absolute',
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
      fontSize: 20,
      marginTop: 20,
    },
  });
  