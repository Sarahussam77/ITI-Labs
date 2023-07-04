import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 50 : 0,
    //   backgroundColor: "magenta",
    height: "100%",
    marginHorizontal: 10,
  },

  header: {
    fontSize: 19,
    fontWeight: "bold",
    padding: 10,
  },
  itemStyle: {
    backgroundColor: "lightgrey",
    margin: 5,
    borderRadius:20,
    padding: 6,
    paddingLeft:20
  },
  btnContainer: {
    backgroundColor: "#6c71c4",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 50,
  },
  txt: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  largeBoxStyle: {
    backgroundColor: "yellow",
    width: 500,
    height: 500,
    // ,zIndex:1
  },
  miniBox: {
    backgroundColor: "green",
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 50,
    left: 50,
    //   margin:50,
    marginHorizontal: 20,
    marginVertical: 60,
  },
});
