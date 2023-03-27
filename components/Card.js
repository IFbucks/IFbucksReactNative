import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PhotoCard = ({ imageProduct }) => {
  const [add, setAdd] = useState(0);

  const handleaddPress = () => {
    setAdd(add + 1);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageProduct }} style={styles.image} />
      <View style={styles.addContainer}>
        <TouchableOpacity onPress={handleaddPress}>
          <Text style={styles.add}> <button> + {add} adicionar</button></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    width: '100%',
    height: 150,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  add: {
    fontSize: 20,
    color: '#333',
    marginLeft: 10,
  },
  button: {
   borderColor: 'black'
  }
});

export default PhotoCard;