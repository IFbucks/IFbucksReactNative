import { StyleSheet, View, Text } from "react-native";

export default function Footer() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
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
  