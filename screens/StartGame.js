import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../util/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/card";
import InstructionText from "../components/ui/InstructionText";

function StartGame({ onStartGame }) {
  const [number, setNumber] = useState("");
  function getNumber(number) {
    setNumber(number);
  }
  function onResetPress() {
    setNumber("");
  }
  function onConfirmPress() {
    const numbers = parseInt(number);
    if (isNaN(numbers) || numbers <= 0 || numbers > 99) {
      Alert.alert("Invalid number!", "Number shoud beetween 1 to 99", [
        { text: "Okay", style: "destructive", onPress: onResetPress },
      ]);
      return false;
    }

    onStartGame(numbers);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card style={styles.inputContainer}>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={getNumber}
          value={number}
        />
        <View style={styles.buttonsContainer}>
          <View style={{ flex: 1 }}>
            <PrimaryButton
              buttonText="Reset"
              onPress={onResetPress}
              androidRippleEffect={styles.androidRippelEffect}
              buttonOuterContainer={styles.buttonOuterContainer}
              buttonInnerContainer={styles.buttonInnerContainer}
              buttonTextContainer={styles.buttonTextContainer}
            />
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton buttonText="Confirm" onPress={onConfirmPress} />
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 10,
    marginTop: 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  textInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  androidRippelEffect: {
    color: Colors.primary600,
  },
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonTextContainer: {
    color: "white",
    textAlign: "center",
  },
});
