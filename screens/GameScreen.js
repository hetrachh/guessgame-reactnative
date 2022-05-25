import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { generateRandomNumber } from "../util/util";
import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/card";
import GuessLogItem from "../components/game/GuessLogItem";

let minBoundry = 1;
let maxBoundry = 99;

function GameScreen({ number, onGameOver }) {
  const initialNumber = generateRandomNumber(1, 100, number);
  const [numberGuess, setNumberGuess] = useState(initialNumber);
  const [guseeRound, setGuessRound] = useState([initialNumber]);
  useEffect(() => {
    if (number === numberGuess) {
      onGameOver(guseeRound.length);
    }
  }, [numberGuess, number, onGameOver]);
  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);
  function guessNextNumber(direction) {
    if (
      (direction === "lower" && numberGuess < number) ||
      (direction == "higher" && numberGuess > number)
    ) {
      Alert.alert("Don't lie!", "you know that this is wrong...", [
        { text: "sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundry = numberGuess;
    } else {
      minBoundry = numberGuess + 1;
    }
    const newRandomNumber = generateRandomNumber(
      minBoundry,
      maxBoundry,
      numberGuess
    );
    setNumberGuess(newRandomNumber);
    setGuessRound((prevoius) => [newRandomNumber, ...prevoius]);
  }
  const guessRoundListLength = guseeRound.length;
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{numberGuess}</NumberContainer>
      <View>
        <Card>
          <InstructionText style={styles.instructiontext}>
            Higher or Lower?
          </InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                buttonText={
                  <Ionicons name="md-remove" size={24} color="white" />
                }
                onPress={guessNextNumber.bind(this, "lower")}
              />
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton
                buttonText={<Ionicons name="md-add" size={24} color="white" />}
                onPress={guessNextNumber.bind(this, "higher")}
              />
            </View>
          </View>
        </Card>
      </View>
      <View style={styles.listViewContainer}>
        <FlatList
          data={guseeRound}
          keyExtractor={(item) => item}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundListLength - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructiontext: {
    marginBottom: 12,
  },
  listViewContainer: {
    flex: 1,
    padding: 16,
  },
});
