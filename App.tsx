import { Audio } from "expo-av";
import log from "loglevel";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  public handlePress = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require("./assets/sounds/Glottal1.wav"));
      await soundObject.playAsync();
      // await soundObject.unloadAsync();
    } catch (error) {
      log.error(error);
    }
  };

  public render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to SS Soundboard! Click the buttons to listen to some delicious soundwaves.
        </Text>
        <Button title="Glottal" onPress={this.handlePress}>
          Glottal
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
