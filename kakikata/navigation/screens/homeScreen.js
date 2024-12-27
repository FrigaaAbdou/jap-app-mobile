import * as React from "react";
import { View, Image, Text, StyleSheet } from "react-native"; // Import Text

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/icon.png")} // For local images
        style={styles.image}
      />
      <Text style={styles.bigTitel}>Welcome to</Text>
      <Text style={styles.smallTitel}>Kakikata Senpai!</Text>
      <View style={styles.textView}>
        <Text style={styles.viewText}>
          Kakikata Senpai is a Japanese learning app designed to help you master
          Hiragana and Katakana interactively. Track your progress, practice
          regularly, and improve your Japanese skills in a fun and effective
          way.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Aligns items at the top of the screen
    alignItems: "center",
  },
  image: {
    width: 125, // Adjust width
    height: 125, // Adjust height
    resizeMode: "contain",
    marginTop: 90, // Space from the top
  },
  bigTitel: {
    fontSize: 50, // Add font size
    fontWeight: "bold", // Make it bold
    marginTop: 30,
    fontFamily: "SF Pro",
    color: "#4CAF4F", // Space between the image and the text
  },
  smallTitel: {
    fontSize: 36, // Add font size
    fontWeight: "bold", // Make it bold
    marginTop: 15,
    fontFamily: "SF Pro",
    color: "#4CAF4F", // Space between the image and the text
  },
  textView: {
    width: 339, // Adjust width
    height: 275,
    marginTop: 40,
    backgroundColor: "#F0F9F3",
    borderColor: "#DCDBDB",
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15, // Add padding for the text
  },
  viewText: {
    color: "#5F5F5F", // Text color
    textAlign: "center", // Align text to the center
    fontFamily: "SF Pro", // Font family
    fontSize: 20, // Font size
    fontWeight: "500", // React Native does not support 510, closest is 500
    lineHeight: 30, // Line height
    letterSpacing: 1, // Letter spacing
  },
});
