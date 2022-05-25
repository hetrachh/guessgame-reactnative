InstructionText;

import { Text, StyleSheet } from "react-native";
import Colors from "../../util/colors";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: Colors.accent500,
    fontFamily: "open-sans",
  },
});
