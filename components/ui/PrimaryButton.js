import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton(props) {
  const buttonText = props?.buttonText ? props.buttonText : "Button";
  const androidRippleEffect = props?.androidRippleEffect
    ? props.androidRippleEffect
    : { color: "#640233" };
  const buttonOuterContainer = props?.buttonOuterContainer
    ? props.buttonOuterContainer
    : styles.buttonOuterContainer;
  const buttonPressed = props?.buttonPressed
    ? props.buttonPressed
    : styles.pressed;
  const buttonInnerContainer = props?.buttonInnerContainer
    ? props.buttonInnerContainer
    : styles.buttonInnerContainer;
  const buttonTextContainer = props?.buttonTextContainer
    ? props.buttonTextContainer
    : styles.buttonTextContainer;
  return (
    <View style={buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [buttonPressed, buttonInnerContainer] : buttonInnerContainer
        }
        onPress={props.onPress}
        android_ripple={androidRippleEffect}
      >
        <Text style={buttonTextContainer}>{buttonText}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonTextContainer: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
