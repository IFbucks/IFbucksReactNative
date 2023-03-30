import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";

const PhotoCard = ({ desc, imageProduct }) => {
  const [add, setAdd] = useState(0);

  const handleaddPress = () => {
    setAdd(add + 1);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageProduct }} style={styles.image}
      resizeMode="contain" />
      <Text style={styles.desc}>{desc}</Text>
      <View style={styles.addContainer}>
        <TouchableOpacity style={styles.adicionar}>
          <Text style={styles.add}>
            {" "}
            <Button
              onPress={() => setAdd(add + 1)}
              title={"+ " + add.toString() + " adicionar"}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: "100%",
    height: 350,
  },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  addContainer: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 20,
  },
  desc: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
  adicionar: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#c4c4c4",
  },
});

export default PhotoCard;
