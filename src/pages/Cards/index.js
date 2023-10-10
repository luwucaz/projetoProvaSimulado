import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style";

const Cards = (props) => {
  return (
    <View style={styles.frame}>
      <Image
        style={styles.img}
        source={require(`../../../assets/${props.imagem}.png`)}
      />
      <Text style={styles.titulo}>{props.titulo}</Text>
      <Text style={styles.texto}>{props.texto}</Text>
      <Text style={styles.atributos}>
        Ataque: {props.atributo_ataque} {"\n"} Defesa: {props.atributo_defesa}{" "}
        {"\n"} Mana: {props.atributo_mana}
      </Text>
    </View>
  );
};
export default Cards;
