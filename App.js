import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="HomeScreen"
          onPress={() => this.props.navigation.navigate("Player")}
        />
      </View>
    );
  }
}

class PlayerScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>PlayerScreen Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Player: PlayerScreen
});

const MainNavigator = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
