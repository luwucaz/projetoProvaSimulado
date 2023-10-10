import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cards from "./src/pages/Cards";

export default function App() {
  return (
    <View style={styles.container}>
      <Cards
        imagem="machado"
        titulo="Machado"
        texto="Um machado muito eficaz para ajudar a cortar qualquer tipo de madeira que estiver à sua frente!"
        atributo_ataque="1250"
        atributo_defesa="541"
        atributo_mana="740"
      ></Cards>
      <Cards
        imagem="enxada"
        titulo="Enxada"
        texto="Esta arma única transcende os limites do mundo cúbico em que é encontrada, revelando-se como uma verdadeira maravilha da engenharia de jogos!"
        atributo_ataque="2000"
        atributo_defesa="123"
        atributo_mana="154"
      ></Cards>
      <Cards
        imagem="espada"
        titulo="Espada"
        texto="Oh mai god! Is that a sword??!! Uma espada de ferro que possui um ataque fenomenal capaz de cortar na velocidade da luz!"
        atributo_ataque="8.0929569e+41"
        atributo_defesa="0"
        atributo_mana="124"
      ></Cards>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "inline",
    backgroundColor: "#fff",
    margin: "auto",
  },
});
