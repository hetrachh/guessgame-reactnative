import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import StartGame from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import AppLoading from "expo-app-loading";

import Colors from "./util/colors";

export default function App() {
  const [number, setNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [round, setRound] = useState(0);

  const [loadFonts] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loadFonts) {
    return <AppLoading />;
  }

  function startGame(pickedNumber) {
    setNumber(pickedNumber);
    setGameOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
    setRound(numberOfRounds);
  }

  function startNewGameHandler() {
    setNumber(null);
    setGameOver(true);
    setRound(0);
    screen = <StartGame />;
  }

  let screen = <StartGame onStartGame={startGame} />;

  if (number) {
    screen = <GameScreen number={number} onGameOver={gameOverHandler} />;
  }

  if (gameOver && number) {
    screen = (
      <GameOver
        number={number}
        rounds={round}
        onNewStart={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backGroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.15,
  },
});
