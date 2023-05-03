import { StyleSheet, ScrollView, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "./src/components/Header";
import PhotoCard from "./src/components/Card";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";
import Login from "./src/pages/Login";

export default function App() {

  const alimentos = [
    {
      id: 1,
      name: "Bebidas quentes",
      icon: "coffee",
      items: [
        {
          id: 1,
          desc:"Simple Coffee",
          photo: "https://storage.googleapis.com/thecoffee-ws/images/quente-vanilla-latte_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680550106&Signature=hReqhnEI0QVrnfIZNMXGF8gOWWkqeprK5eReg%2FjuzCeuTQAGz%2BHNgHwtiotEHD2eHGuwEWARUlR3yfyJhmyHP1OwVq0kQncjA3fJb%2FjmBqXY7x3G3n5Fn2jNSImoy5ZRAOZI8KwMIWx9szhF3EysTCPCkikfF2Pnzu6m88PZAw1EofXhnuFoAmmHbrCfUYSzNvZWJbloGLsb3pL%2Fynhi1AEE3SwzbmbI%2FG0MEw%2BIXfs09J8AaUl3Ggs5YxaeqrXzBiAp9uQ7NVMaYdWvkqzPt70zxVjps0OYlyOC65FJ2yyfYr%2B6YOVQw6r75gR9n%2FDemk8yXVN9gqg9c4YZuYOvQw%3D%3D"
        },
        {
          id: 2,
          desc:"Sale Matcha",
          photo: "https://storage.googleapis.com/thecoffee-ws/images/quente-matcha-latte_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680731598&Signature=l8EzazdG4z9Ipl8Obvvld6uW1cs503TRznfJfCVZirRhFAgumyw0B16cAODmViT5yOfUd4GkqPajYLaWbuDlcaglw800dXTNKW%2FOCJpMoC93vpaioYQDLaST3UGleEA1fv2iwOQB%2BqqMQzUYsDF7JlH3hVsuw4lmwc7oq0we0YMNSq4psl1ZKF0v1fSudJB3Wh1eeaYRtNsJHkPOpSngicWGWTb0ljkDPDBGnVgmUgJHjtr3t9XganSpa5Zigxt9O5UAsZYGpCTokFswmSm4depSm281uBkhjnA9UQH56K0%2F0qVhTGLDsB76xIdBvkDh4pj0AkC9nOAZkTKLL1yvdg%3D%3D"
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
        <Header />
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
          imageProduct="https://storage.googleapis.com/thecoffee-ws/images/quente-vanilla-latte_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680550106&Signature=hReqhnEI0QVrnfIZNMXGF8gOWWkqeprK5eReg%2FjuzCeuTQAGz%2BHNgHwtiotEHD2eHGuwEWARUlR3yfyJhmyHP1OwVq0kQncjA3fJb%2FjmBqXY7x3G3n5Fn2jNSImoy5ZRAOZI8KwMIWx9szhF3EysTCPCkikfF2Pnzu6m88PZAw1EofXhnuFoAmmHbrCfUYSzNvZWJbloGLsb3pL%2Fynhi1AEE3SwzbmbI%2FG0MEw%2BIXfs09J8AaUl3Ggs5YxaeqrXzBiAp9uQ7NVMaYdWvkqzPt70zxVjps0OYlyOC65FJ2yyfYr%2B6YOVQw6r75gR9n%2FDemk8yXVN9gqg9c4YZuYOvQw%3D%3D"
        />
        <PhotoCard
          desc="Sale Matcha"
          imageProduct="https://storage.googleapis.com/thecoffee-ws/images/quente-matcha-latte_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680731598&Signature=l8EzazdG4z9Ipl8Obvvld6uW1cs503TRznfJfCVZirRhFAgumyw0B16cAODmViT5yOfUd4GkqPajYLaWbuDlcaglw800dXTNKW%2FOCJpMoC93vpaioYQDLaST3UGleEA1fv2iwOQB%2BqqMQzUYsDF7JlH3hVsuw4lmwc7oq0we0YMNSq4psl1ZKF0v1fSudJB3Wh1eeaYRtNsJHkPOpSngicWGWTb0ljkDPDBGnVgmUgJHjtr3t9XganSpa5Zigxt9O5UAsZYGpCTokFswmSm4depSm281uBkhjnA9UQH56K0%2F0qVhTGLDsB76xIdBvkDh4pj0AkC9nOAZkTKLL1yvdg%3D%3D"
        />
        <PhotoCard
          desc="Simple Black"
          imageProduct="https://storage.googleapis.com/thecoffee-ws/images/purista-americano_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680731598&Signature=d98ZH9VThxHvTFtPMSO%2Bdc%2Fc3Mbg%2BwqpZc873cQrWl2Hlpb6qqTy7RdUJvO%2BvzI7oAsxYZwgInKqs%2FSTmdYrg1nC3Bj1Co%2BpUT0QyQfCqP1n%2FNcBdIRdf83vLI75sm%2FlQzatuMBfmw0Gt67Xhk19oWHVMwufdj8dY7hrS3GQ73szSQwXdAPN88apDxIvPyAYHVsJiQvX8fTdzLDhOwiL6QxaEbVq06daxLI1m6ffdZV7EERp4GQjurQW4kwQeGpkUspItPaKCWsk3VYABnzqJz%2Fhl274H9ZFeddmOuI8lvHz4nMFshbVEr%2FO9It3WtTOgqWUxVvGSerrwTP%2F%2B9z84w%3D%3D"
        />
        <PhotoCard
          desc="Chai Latte"
          imageProduct="https://storage.googleapis.com/thecoffee-ws/images/quente-chai-latte_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680732778&Signature=SLXfm4Az7Pq8HAG6UD3ZD0eJQoq1Bmd4bnyMBq38j3%2FiRU8qf7nazP%2FOU0C3MhNkI9bu2wiIqiIFwBQIkY2DXRoOpNAMOtkoL4%2BzNIYqPqB9vhsc%2FYvjEh7N0bB7Tq%2BjaleWWQ0Hqyl%2BWtk2Ry%2FM81bnXMrIFloptOsroA2ZKWhBvqsnDBN44oX1o%2BSuxwE9syGyiz8RV4%2B8QWjeI0XgyleqJiKObFiLj4AudsJdh1rbwJ%2FwJ4FyaFZjXLiBLYwvRouf7RM5w0h0YPsAHwAf7QHy7Ei4zcPYw9EJQUzkIlWUPYDW4URlGQJ6jwBx3TfDBG3%2F01Xp83CgeK94%2F8reSg%3D%3D"
        />
        <PhotoCard
          desc="Urban Coffee"
          imageProduct="https://storage.googleapis.com/thecoffee-ws/images/quente-urban-chocolat_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680736593&Signature=SvrTyEP%2FcaH9RFq6YPLK7CDG7HTs8%2Bqgjg%2F35lULTKavOy5bFXhMZcpgP32R9aTBVlDE5zpLecu4BA5%2FGlHSdBBObbklVNRji4AySK0fQe%2BLl%2FuxfTDjCGmquHr5KKeD3A2%2BJPeYrVGtZ4SIufnlKvc%2FTrxn6IqM0k2pdKBzZQmeL0c641J5TgDROR03o3C7%2Bs9ZNwaobL%2BTu8Qt%2FRDiPE8p8MjVkp7CGyzSQNbNKpCcydErS3XJoDbVsr5%2Bx0SfAjiRoUY4EOA3tXKFbTVYAMN%2FRIBtHFdi%2Fkj69XdxT1sCfr0g2EDJV%2FQ7xObgjKxFUGAGgvgUG4seBhR5EQvRuw%3D%3D"
        />
        <Text style={styles.drinksFoodTitle}>
          {" "}
          Bebidas Geladas <Feather name="coffee" size={24} color="black" />{" "}
        </Text>
        <PhotoCard
          desc="Chai Iced Latte"
          imageProduct="https://storage.googleapis.com/thecoffee-ws/images/coado-gelado-com-leite_480x480.png?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680731600&Signature=kpWJp0teADu9nJ4%2F6LEmXBJwbIKmlZ9L2BhoaE6%2F4h7xIX9IVGThQXZfbjOzCScdW6iSPMhxIS3Quo%2BR6z5mIoKOkscp3IlBI12r0S%2B8aE%2BqmkWv7N2x2YsN92USgzvggdjsSHncGGuvtdnXPkbHQJbM6bohvs0XUlIbYbQDs6w094xkAdj0MbvlaYZmlaAowXLniHcluzruywAbSwqX5ADj3PX90H7AFxS1c%2Bgq%2FHX%2Bh4lZcw4O%2BO0cjBtK8Ko1vFvmrCqWJcLmGfVMP7rFgXpOk8BsRKnldDwKoJzWIuPmY8I93LiWciPq5BPXZM69D8VAoqH7H8tz6jwcHrCoyg%3D%3D"
        />
        <PhotoCard
          desc="Salted Caramel"
          imageProduct="https://storage.googleapis.com/thecoffee-ws/images/saltedcaramel_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680550107&Signature=XJiviCzj3Ojb%2FCmRZFZssoAnUNhyYIZbrqDlTHKyHOe4e5VsCoFGDWMtMaoB88azLAi0kFhL%2FoqgWSvdODOlA979rP0168OpqNT%2Bs1qkwwYk8jXbgJBMHbjyeUusqWQDuyKhwxF5TQQ2pAVEzaTX%2BjuBIaSVTCQ0G45UpIQ8VfZGAn4CZDB2LfsPZN4ZmXaQVJbw4%2Fgm4B4%2BwnnbofyIhX42FhITvFbUhvr7J5JoFgyKbW0pGWAeOfbOKeAeBNrcYcud%2F%2F5FR9rzcz1%2FpCBRkpFm7z8x5K7ln5kPJoF7F%2Fxzo2G7JfZtQCV9mOxefgJhiFreqgVUJ%2B8sGJb5jaj1OQ%3D%3D"
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
