import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuPress = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleMenuPress}>
        <Text>≡</Text>
      </TouchableOpacity>
      {menuOpen && (
        <View>
          <TouchableOpacity>
            <Text>Opção 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Opção 2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Opção 3</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

/*const styles = StyleSheet.create({
    
  });*/
  

export default Navbar;
