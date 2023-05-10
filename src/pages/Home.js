import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import PhotoCard from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home({navigation}) {

  function handleButtonUser(){
      navigation.navigate("User")
  }

  const alimentos = [
    {
      id: 1,
      name: "Bebidas quentes",
      icon: "coffee",
      items: [
        {
          id: 1,
          desc:"Simple Coffee",
          photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cup-o-coffee-simple.svg/292px-Cup-o-coffee-simple.svg.png"
        },
        {
          id: 2,
          desc:"Sale Matcha",
          photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cup-o-coffee-simple.svg/292px-Cup-o-coffee-simple.svg.png"
        }
      ]
    },
    {
      id: 2,
      name: "Bebidas frias",
      icon: "coffee",
      items: []
    }
  ] 
  

  return (
    <View style={styles.container}>
      <View>
        <Header handleButtonUser={handleButtonUser} />
        <Navbar />
      </View>
      <ScrollView>
        {
          alimentos.map(alimento => {
            return (
              <Text style={styles.drinksFoodTitle}>
              {" "}
              {alimento.name} <Feather name={alimento.icon} size={24} color="black" />{" "}
              </Text>                                        
            )
          })
        }
        <Text style={styles.drinksFoodTitle}>
          {" "}
          Bebidas Quentes <Feather name="coffee" size={24} color="black" />{" "}
        </Text>
        <PhotoCard
          desc="Simple Coffee"
          imageProduct="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cup-o-coffee-simple.svg/292px-Cup-o-coffee-simple.svg.png"
        />
        <PhotoCard
          desc="Sale Matcha"
          imageProduct="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cup-o-coffee-simple.svg/292px-Cup-o-coffee-simple.svg.png"
        />
        <PhotoCard
          desc="Simple Black"
          imageProduct="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cup-o-coffee-simple.svg/292px-Cup-o-coffee-simple.svg.png"
        />
        <PhotoCard
          desc="Chai Latte"
          imageProduct="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cup-o-coffee-simple.svg/292px-Cup-o-coffee-simple.svg.png"
        />
        <PhotoCard
          desc="Urban Coffee"
          imageProduct="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cup-o-coffee-simple.svg/292px-Cup-o-coffee-simple.svg.png"
        />
        <Text style={styles.drinksFoodTitle}>
          {" "}
          Bebidas Geladas <Feather name="coffee" size={24} color="black" />{" "}
        </Text>
        <PhotoCard
          desc="Chai Iced Latte"
          imageProduct="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cup-o-coffee-simple.svg/292px-Cup-o-coffee-simple.svg.png"
        />
        <PhotoCard
          desc="Salted Caramel"
          imageProduct="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cup-o-coffee-simple.svg/292px-Cup-o-coffee-simple.svg.png"
        />
        <PhotoCard
          desc="Vanilla Frappé"
          imageProduct="https://storage.googleapis.com/thecoffee-ws/images/310810334_461691379175828_6490849153147662265_n_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680731600&Signature=dWrG9subHT8OxCF%2FQm786maRZ37sQD0I%2BrPcaLbzDzC%2F6RbSio8mYVA8NAYYgffU7VIvRDNWvg0ZSEioTiHxQ0%2BJfhEgRp8vy30Q5c4ua2POHJtcqaBKnFho%2FjaiDkId9vwwzQTnp43HxAmY1Xjd5wAcEASA%2Fafs%2FjZGwsRXz7Jx7q2jW5T8hBPifmk%2FxZ%2FRj7s6SSPEtUGpIwU6OIHBuLPL0fvqfF4Hi4dHqSsL71VFOsy4tmDsDyz5vq7OLa141LDopNC0DoVMmld9U4KXCSbokoQ2eGla4gHUrBdXf2U5wnXLyx2mp0DkLkCG5sNY17OVFM5NozGjysW773FtNQ%3D%3D"
        />
        <PhotoCard
          desc="Matcha"
          imageProduct="https://storage.googleapis.com/thecoffee-ws/images/matchaicedmint_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680550107&Signature=fPYBGRNR6qr%2FmeDb6MUXGLspO%2B2zCcYCO4o%2FHak1X3O0BUG3rxOGDMf0A0K5%2F%2BsdHzL4VmmEBMUbZ3VIpANP5B9ejBA2%2FbCki8EVLqvV5pjBNJexfECYOo0suKplEReXaxuR1Q%2BUGhXrA2TE0EY2Btya3RMLxCM0MI2iirR4iNbT5hHSPc6q3pZj4ilEf0eNCI56kzI09rQtb%2BOwFR%2B55gFHXBZth8MTMy0iyP30uWweosGHju8pJROfZjY6EL6j1tpbFvJ2Ye%2BxQhtDySHLFjaAyUlGjGKJoOXbLZEDTM%2BvlqPtpEx1eMORjGGsk6ZnM4radmoO78xkq7Utpv8%2Bpg%3D%3D"
        />
        <PhotoCard
          desc="Iced Coffee"
          imageProduct="https://storage.googleapis.com/thecoffee-ws/images/289597159_824298858946865_289547150334147358_n_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680550106&Signature=Mdi24ukH7mmb8sheveTBwYiHNnGBilxV1bh7b%2Fq1s3acLrPqfG90GppZJyL%2FvMkuxZiLv4MeMGxuztOXVHX8Qn6NRR9lWm5BQNlX%2FDhyS5gEN3FhHY7zBIy2xyp45sRc0088omQUuOgjwitkdV%2FJqIbfQg5aNDzDGcO35C5IgsXKsqQKC4HCj%2BkxXNdJw1eFVCPif4uy7zj38%2BOkPE6zOTy%2BDeFfjXYXTIcgn9Ez7PYo7AN3skL2aWAcTVmMPNWgtto5vSwo3PI60FtoCSrq6vEmjuyRjA%2FUlA6rxlB7bJkEwtWmOSjlffKtG0fmx%2BcCIDVm3FaT1FkDGHLZmIpuyA%3D%3D"
        />
        <Text style={styles.drinksFoodTitle}>
          {" "}
          Comidas{" "}
          <MaterialCommunityIcons
            name="food-croissant"
            size={24}
            color="black"
          />{" "}
        </Text>
        <PhotoCard
          desc="Croissant"
          imageProduct="https://storage.googleapis.com/thecoffee-ws/images/croissant-2_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680732780&Signature=AcJ7yqBvexncsmoK92A%2BuVOzwwfvBMgvGUuGwk3kufgXdMK%2B0IF4beqFwS8ld8dJSBs5HYZAl5vq0hqc6RoVKXGBTZ5eY8zCnDqzCONGHCalaJs5sveMKbmqLLPJfAluupBY%2B09sDkfka7Ev1IBKPeYTyzdnsc1mLqlxrFKz9LA%2FeZUU8rXFtuyVKaNw69%2BOhSVybe9xh2KzKng4SL3oW5AwyCJqYBscaEI2RGX9WEeLlBMf9GqXYifz5zUDPklfOKbNee9WgDhJcBkF7bN7UtfIuFnakmCHGnF5DBC%2F%2FGSW%2B4jIAz6bH3OfDe1xAo9V%2BQK1yd3Z3ib%2FGaGwHfhLNg%3D%3D"
        />
        <PhotoCard
          desc="Brownie"
          imageProduct="https://storage.googleapis.com/thecoffee-ws/images/brownie_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680731601&Signature=NoCftftLWILqpqnvaHuLLW8citB53p2M6P8EM%2Fzc7aD7wyNTW3pvUh60BliORwnkHxXrBeO7lKQqv4l1lBMKKG1NgtTX6YNhyIX5DFlBcGblLqKfRjtTa2lcqOZsF88t7SzvcYBdtcqIiJ9%2BO6Zhkw%2Fx8u2Xn550VEuXvwzEwwpDIJqEFk%2BR6KoD0PAFfen9%2Brvs9j2wyrNfKlj3b3sSkx90OxZOqMHBcHZKlyvHowXeL1XdT%2Bxb5NlrXNmAIP9vIl8hPQPI1e5FKCFJi2MMhPrXgRwAEEA0GX%2Fd2Du0jggCmlSpgRBJL66Ik0S8Sc6UA3oq2txDjBSR2jFRv%2By8fw%3D%3D"
        />
        <PhotoCard
          desc="Bolo"
          imageProduct="https://storage.googleapis.com/thecoffee-ws/images/bolos-2_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680731601&Signature=oVBReTNWw2Hut0ov%2BaxSZJoXXdHpM6ema3NyTtKyr9%2BTgFODEQuZV9R%2BqR85P4jQUP1QiM15%2FdIJ1VQ03ON7QbcI03Bm%2BFe6Mben9mBEg3pTB%2BCCNeH%2FdlXzxBaU%2FoGsG8RecjoSaPwomDF9w5b7pL34yZIcpiozSiE8C3DGUbGnGcFK8alXrHEayEoD4buuv7UWyM6YmZJAZA1RIqtDEXDKttaExSfzD5b4RQeesypdM2%2FgZvorne9NJiIMcgkQUxzPDtyCMAiBCBNxPd%2FPd9rCzyxVgxKGpZSCdGWKNl%2BK4DdcCqfJoN19k8SsRfnIqd%2Fgw2VTSXZaPI5xKj8s%2BQ%3D%3D"
        />
        <Text style={styles.drinksFoodTitle}>
          {" "}
          Combos <MaterialCommunityIcons
            name="candy"
            size={30}
            color="black"
          />{" "}
        </Text>

        <PhotoCard
          desc="Black Coffee + Brownie"
          imageProduct="https://storage.googleapis.com/thecoffee-ws/images/combo-iceblack%2Bbrownie_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680731601&Signature=meKeimCRLwoz9A727gnO0CCM6EFSlyBpLnIdZVn0mGpSr9glfY66DlBFnERQEjG%2Bqargu8ouTDZvJHugp%2FU3yb%2Fgy1Ant%2B0EzP%2BhwinXyggLYcjH1%2FZ%2ByJ%2B6XCS%2BDMTPJu3vbteviN6zB3lERX5oFpcxfQf1cKa8OsH38vrMEdtlHcyxrCvTdWzP%2F%2FkmIGeQDzjG6IMY%2FVBqxUYD%2BJxc39ztwHEbfAM3Uz776pENmUwurXgLfbBPGCntV%2FX%2ByD56ScC1wnkKByWqYvpmeaifQeZIJvi0EFRQ8Uiw%2FQyVcBJOy0dPt0cdaTXvK7h47Zi%2FBhymhsXEk7QBlagedJv4aQ%3D%3D"
        />
        <PhotoCard
          desc="Matcha + Cookie"
          imageProduct="https://storage.googleapis.com/thecoffee-ws/images/combo-matchalatte%2Bcookiemacad_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680731602&Signature=aUfGodncynbNfqw2UVPADGAQR0TzdmpLGbX4DvGSbTUWArq8WhmDp9TAPWlFvzEBBsXgMbBAJxO%2FD9t6X5GIf8dbXO14fqKss6mJF7XUGoYnh%2FjI6bv8qGx3zWzoriFgxxK6AnJ1jFCVqqsROaEPSt27TESYZn1ejpsIbgpSGg%2BvXwGHlnqsKbznMW3yLbQFIj%2F4jU3epkG6WPai1Q1ozQLikmevCNaYC63bKszL9ij3n3j%2BJ5YfIvEFuY6dkjuC%2FoaFRMoENUhc3vzGjk%2FQSxQGPRF2Pk9B6mUdvHBqIoBatlFUKwYfvQZmCR6HTlwZ34jV1knLxoRCsjlvasWM3Q%3D%3D"
        />
        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    flexDirection: "column",
    justifyContent: "space-between",
    flexWrap: "nowrap",
  },

  drinksFoodTitle: {
    fontSize: 30,
    padding: 10,
  },
});
