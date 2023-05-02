import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuPress = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleMenuPress}>
        <EvilIcons
          name="navicon"
          size={40}
          color="black"
          style={styles.menuIco}
        />
      </TouchableOpacity>
      {menuOpen && (
        <View>
          <TouchableOpacity>
            <Text style={styles.textos}>Bebidas quentes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textos}>Bebidas geladas</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textos}>Comidas</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textos: {
    fontSize: 20,
    padding: 5,
  },
  menuIco: {
    padding: 10,
  },
});

export default Navbar;
