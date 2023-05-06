import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../components/Header";

export default function User() {
  return (
    
    <View style={styles.container}>
      
      <Image
        source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }}
        style={styles.profilePicture}
      />
      <Text style={styles.name}>Seu Nome</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}> <Icon name="heart" size={30} color="#333" style={styles.icon} />  Meus Favoritos</Text>
        
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}> <Icon name="shopping-cart" size={30} color="#333" style={styles.icon} />  Meu Carrinho</Text>
        
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}> <Icon name="vcard" size={30} color="#333" style={styles.icon} />  Editar Meu Perfil</Text>
        
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}> <Icon name="bullhorn" size={30} color="#333" style={styles.icon} />  Feedback</Text>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20, 
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
