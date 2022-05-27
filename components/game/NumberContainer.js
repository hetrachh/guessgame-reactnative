import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../util/colors";

const dimensionsWindow = Dimensions.get("window");
console.log(dimensionsWindow);

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: dimensionsWindow.width < 380 ? 12 : 24,
    margin: dimensionsWindow.width < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.accent500,
    fontSize: dimensionsWindow.width < 300 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});
