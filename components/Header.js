import { Text, View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}> IFbucks <MaterialCommunityIcons name="coffee" size={24} color="black" />  </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#84e082",
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
