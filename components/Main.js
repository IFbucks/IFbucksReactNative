import { View } from "react-native-web";
import Card from "./Card"

export default function Main (props){
    return (
        <View>
            <Card
            nomeProduto='cafe xx'
            precoProduto={'10,0'}
            capa={{uri:'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1059133544.jpg'}}
            />
        </View>
    )
}

