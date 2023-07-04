import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import styles from "./styles";
import Box from "./components/Box";

export default function App() {
  const COLORS = [
    { colorName: "Base03", hexCode: "#002b36" },
    { colorName: "Base02", hexCode: "#073642" },
    { colorName: "Base01", hexCode: "#586e75" },
    { colorName: "Base00", hexCode: "#657b83" },
    { colorName: "Base0", hexCode: "#839496" },
    { colorName: "Base1", hexCode: "#93a1a1" },
    { colorName: "Base2", hexCode: "#eee8d5" },
    { colorName: "Base3", hexCode: "#fdf6e3" },
    { colorName: "Yellow", hexCode: "#b58900" },
    { colorName: "Orange", hexCode: "#cb4b16" },
    { colorName: "Red", hexCode: "#dc322f" },
    { colorName: "Magenta", hexCode: "#d33682" },
    { colorName: "Cyan", hexCode: "#2aa198" },
    { colorName: "Green", hexCode: "#859900" },
    { colorName: "Orange", hexCode: "#cc4b16" },
    { colorName: "Red", hexCode: "#dc522f" },
    { colorName: "Magenta", hexCode: "#d37682" },
    { colorName: "Cyan", hexCode: "#2ca198" },
    { colorName: "Green", hexCode: "#859400" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={1}
        data={COLORS}
        renderItem={(props) => (
          <Box
            colorName={props.item.colorName}
            hexCode={props.item.hexCode}
          ></Box>
        )}
        keyExtractor={(props) => props.hexCode}
        ListHeaderComponent={
          <Text style={styles.header}>Welcome to our website</Text>
        }
        ListEmptyComponent={<Text>Loading data .....</Text>}
      ></FlatList>
    </SafeAreaView>
  );
}
