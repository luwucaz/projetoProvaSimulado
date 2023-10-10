import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  frame: {
    marginRight: "20px",

    display: "inline-flex",
    paddingTop: 24,
    paddingRight: 66,
    paddingBottom: 36,
    paddingLeft: 64,
    flexDirection: "column",
    alignItems: "center",
    gap: 37,

    borderRadius: "16px",
    background: "#E6E0E9",
    boxShadow:
      "0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)",

    width: "345px",
    height: "520px",
  },

  img: {
    width: 182,
    height: 182,
  },

  titulo: {
    color: "#000",
    textAlign: "center",
    fontSize: 27.023,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  },

  texto: {
    color: "#000",
    textAlign: "center",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },

  atributos: {
    color: "#000",
    textAlign: "center",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  },
});

export default styles;
