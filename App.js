import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-web";
import Header from "./components/Header";
import PhotoCard from "./components/Card";

export default function App() {
  return (
    <View>
      <View>
        <Header />
      </View>
      <PhotoCard imageProduct="https://storage.googleapis.com/thecoffee-ws/images/quente-vanilla-latte_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680550106&Signature=hReqhnEI0QVrnfIZNMXGF8gOWWkqeprK5eReg%2FjuzCeuTQAGz%2BHNgHwtiotEHD2eHGuwEWARUlR3yfyJhmyHP1OwVq0kQncjA3fJb%2FjmBqXY7x3G3n5Fn2jNSImoy5ZRAOZI8KwMIWx9szhF3EysTCPCkikfF2Pnzu6m88PZAw1EofXhnuFoAmmHbrCfUYSzNvZWJbloGLsb3pL%2Fynhi1AEE3SwzbmbI%2FG0MEw%2BIXfs09J8AaUl3Ggs5YxaeqrXzBiAp9uQ7NVMaYdWvkqzPt70zxVjps0OYlyOC65FJ2yyfYr%2B6YOVQw6r75gR9n%2FDemk8yXVN9gqg9c4YZuYOvQw%3D%3D" />
      <PhotoCard imageProduct="https://storage.googleapis.com/thecoffee-ws/images/saltedcaramel_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680550107&Signature=XJiviCzj3Ojb%2FCmRZFZssoAnUNhyYIZbrqDlTHKyHOe4e5VsCoFGDWMtMaoB88azLAi0kFhL%2FoqgWSvdODOlA979rP0168OpqNT%2Bs1qkwwYk8jXbgJBMHbjyeUusqWQDuyKhwxF5TQQ2pAVEzaTX%2BjuBIaSVTCQ0G45UpIQ8VfZGAn4CZDB2LfsPZN4ZmXaQVJbw4%2Fgm4B4%2BwnnbofyIhX42FhITvFbUhvr7J5JoFgyKbW0pGWAeOfbOKeAeBNrcYcud%2F%2F5FR9rzcz1%2FpCBRkpFm7z8x5K7ln5kPJoF7F%2Fxzo2G7JfZtQCV9mOxefgJhiFreqgVUJ%2B8sGJb5jaj1OQ%3D%3D" />
      <PhotoCard imageProduct="https://storage.googleapis.com/thecoffee-ws/images/matchaicedmint_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680550107&Signature=fPYBGRNR6qr%2FmeDb6MUXGLspO%2B2zCcYCO4o%2FHak1X3O0BUG3rxOGDMf0A0K5%2F%2BsdHzL4VmmEBMUbZ3VIpANP5B9ejBA2%2FbCki8EVLqvV5pjBNJexfECYOo0suKplEReXaxuR1Q%2BUGhXrA2TE0EY2Btya3RMLxCM0MI2iirR4iNbT5hHSPc6q3pZj4ilEf0eNCI56kzI09rQtb%2BOwFR%2B55gFHXBZth8MTMy0iyP30uWweosGHju8pJROfZjY6EL6j1tpbFvJ2Ye%2BxQhtDySHLFjaAyUlGjGKJoOXbLZEDTM%2BvlqPtpEx1eMORjGGsk6ZnM4radmoO78xkq7Utpv8%2Bpg%3D%3D" />
      <PhotoCard imageProduct="https://storage.googleapis.com/thecoffee-ws/images/289597159_824298858946865_289547150334147358_n_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680550106&Signature=Mdi24ukH7mmb8sheveTBwYiHNnGBilxV1bh7b%2Fq1s3acLrPqfG90GppZJyL%2FvMkuxZiLv4MeMGxuztOXVHX8Qn6NRR9lWm5BQNlX%2FDhyS5gEN3FhHY7zBIy2xyp45sRc0088omQUuOgjwitkdV%2FJqIbfQg5aNDzDGcO35C5IgsXKsqQKC4HCj%2BkxXNdJw1eFVCPif4uy7zj38%2BOkPE6zOTy%2BDeFfjXYXTIcgn9Ez7PYo7AN3skL2aWAcTVmMPNWgtto5vSwo3PI60FtoCSrq6vEmjuyRjA%2FUlA6rxlB7bJkEwtWmOSjlffKtG0fmx%2BcCIDVm3FaT1FkDGHLZmIpuyA%3D%3D" />
      <PhotoCard imageProduct="https://storage.googleapis.com/thecoffee-ws/images/gelado-chai-iced-latte_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680550106&Signature=hCbmFa4WGqBjYMcFw9ZXqtPkd6KNeuTXRLTGfD8UIRBLngbustY3hdCty9j9HtlVD3zS%2Fz%2BDxkkZ1eMzBT35a%2BpnsEOnGHHCNm1Iw0QiMKvTSwEanGKdlufIOyK6tycR3DDtyrnrClrYzWH85xwc84GwF74joAIgWA3ZINWtZx8aOKycpq8IUVsQdVjOdNSEsh%2B7X%2B%2BmkCwHn%2B9zuFXKGyfeXsXWj6qhB3beegbCcyG8suscBKFWoFWx9VX7fdmf7hzYher7%2FCndmYX3sPk4Jckt7G5kVl9oGxM2kkVvGXWRJcOsG50hhNhD1c7%2B2A1goHlPtbxBdYDYu%2BJ5c4bvcQ%3D%3D" />
      <PhotoCard imageProduct="https://storage.googleapis.com/thecoffee-ws/images/quente-vanilla-latte_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680550106&Signature=hReqhnEI0QVrnfIZNMXGF8gOWWkqeprK5eReg%2FjuzCeuTQAGz%2BHNgHwtiotEHD2eHGuwEWARUlR3yfyJhmyHP1OwVq0kQncjA3fJb%2FjmBqXY7x3G3n5Fn2jNSImoy5ZRAOZI8KwMIWx9szhF3EysTCPCkikfF2Pnzu6m88PZAw1EofXhnuFoAmmHbrCfUYSzNvZWJbloGLsb3pL%2Fynhi1AEE3SwzbmbI%2FG0MEw%2BIXfs09J8AaUl3Ggs5YxaeqrXzBiAp9uQ7NVMaYdWvkqzPt70zxVjps0OYlyOC65FJ2yyfYr%2B6YOVQw6r75gR9n%2FDemk8yXVN9gqg9c4YZuYOvQw%3D%3D" />
      <PhotoCard imageProduct="https://storage.googleapis.com/thecoffee-ws/images/quente-vanilla-latte_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680550106&Signature=hReqhnEI0QVrnfIZNMXGF8gOWWkqeprK5eReg%2FjuzCeuTQAGz%2BHNgHwtiotEHD2eHGuwEWARUlR3yfyJhmyHP1OwVq0kQncjA3fJb%2FjmBqXY7x3G3n5Fn2jNSImoy5ZRAOZI8KwMIWx9szhF3EysTCPCkikfF2Pnzu6m88PZAw1EofXhnuFoAmmHbrCfUYSzNvZWJbloGLsb3pL%2Fynhi1AEE3SwzbmbI%2FG0MEw%2BIXfs09J8AaUl3Ggs5YxaeqrXzBiAp9uQ7NVMaYdWvkqzPt70zxVjps0OYlyOC65FJ2yyfYr%2B6YOVQw6r75gR9n%2FDemk8yXVN9gqg9c4YZuYOvQw%3D%3D" />
      <PhotoCard imageProduct="https://storage.googleapis.com/thecoffee-ws/images/quente-vanilla-latte_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680550106&Signature=hReqhnEI0QVrnfIZNMXGF8gOWWkqeprK5eReg%2FjuzCeuTQAGz%2BHNgHwtiotEHD2eHGuwEWARUlR3yfyJhmyHP1OwVq0kQncjA3fJb%2FjmBqXY7x3G3n5Fn2jNSImoy5ZRAOZI8KwMIWx9szhF3EysTCPCkikfF2Pnzu6m88PZAw1EofXhnuFoAmmHbrCfUYSzNvZWJbloGLsb3pL%2Fynhi1AEE3SwzbmbI%2FG0MEw%2BIXfs09J8AaUl3Ggs5YxaeqrXzBiAp9uQ7NVMaYdWvkqzPt70zxVjps0OYlyOC65FJ2yyfYr%2B6YOVQw6r75gR9n%2FDemk8yXVN9gqg9c4YZuYOvQw%3D%3D" />
      <PhotoCard imageProduct="https://storage.googleapis.com/thecoffee-ws/images/quente-vanilla-latte_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680550106&Signature=hReqhnEI0QVrnfIZNMXGF8gOWWkqeprK5eReg%2FjuzCeuTQAGz%2BHNgHwtiotEHD2eHGuwEWARUlR3yfyJhmyHP1OwVq0kQncjA3fJb%2FjmBqXY7x3G3n5Fn2jNSImoy5ZRAOZI8KwMIWx9szhF3EysTCPCkikfF2Pnzu6m88PZAw1EofXhnuFoAmmHbrCfUYSzNvZWJbloGLsb3pL%2Fynhi1AEE3SwzbmbI%2FG0MEw%2BIXfs09J8AaUl3Ggs5YxaeqrXzBiAp9uQ7NVMaYdWvkqzPt70zxVjps0OYlyOC65FJ2yyfYr%2B6YOVQw6r75gR9n%2FDemk8yXVN9gqg9c4YZuYOvQw%3D%3D" />
      <PhotoCard imageProduct="https://storage.googleapis.com/thecoffee-ws/images/quente-vanilla-latte_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1680550106&Signature=hReqhnEI0QVrnfIZNMXGF8gOWWkqeprK5eReg%2FjuzCeuTQAGz%2BHNgHwtiotEHD2eHGuwEWARUlR3yfyJhmyHP1OwVq0kQncjA3fJb%2FjmBqXY7x3G3n5Fn2jNSImoy5ZRAOZI8KwMIWx9szhF3EysTCPCkikfF2Pnzu6m88PZAw1EofXhnuFoAmmHbrCfUYSzNvZWJbloGLsb3pL%2Fynhi1AEE3SwzbmbI%2FG0MEw%2BIXfs09J8AaUl3Ggs5YxaeqrXzBiAp9uQ7NVMaYdWvkqzPt70zxVjps0OYlyOC65FJ2yyfYr%2B6YOVQw6r75gR9n%2FDemk8yXVN9gqg9c4YZuYOvQw%3D%3D" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ffff",
    /*alignItems: "center",
    justifyContent: "center",*/
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    fontFamily: "Roboto",
  },
});
