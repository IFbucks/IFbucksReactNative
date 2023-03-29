import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuPress = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleMenuPress} >
      <AntDesign name="menuunfold" size={24} color="black"/>
      </TouchableOpacity>
      {menuOpen && (
        <View>
          <TouchableOpacity>
            <Text>Bebidas quentes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Bebidas geladas</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Comidas</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};



export default Navbar;
