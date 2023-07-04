import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 40 : 0,
    height: "100%",
    marginHorizontal: 20,
  },

  header: {
    fontSize: 19,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
});
