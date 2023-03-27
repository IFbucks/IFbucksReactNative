import { View } from "react-native-web";
import { Component } from "react";
import { Text } from "react-native-web";


function Card (props) {
    return (
        <View style={StyleSheet.card}>
           <Image style={{resizeMode: 'stretch', height: '200'}} source={{uri:props.capa}}/> 
           <Text>{props.nomeProduto}</Text>
           <Text>R${props.precoProduto}</Text>
        </View>

        
    )
}

export default Card