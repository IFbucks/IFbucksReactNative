import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuPress = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleMenuPress} >
      <AntDesign name="menuunfold" size={30} color="black"/>
      </TouchableOpacity>
      {menuOpen && (
        <View >
          <TouchableOpacity >
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

const styles =  StyleSheet.create({
textos: {
  fontSize: 20,
}

});
/*colcocar topicos de bebidas e comida no h1, arrumar footer, arrumar menu <tamanho>, arrumar coresy*/

export default Navbar;
