import React, { Component } from "react";
import { View, Text } from "react-native";

export default class SplashScreen extends Component {
  render() {
    return (
      <View>
        <Text>
          This is SplashScreen and it takes care of checking if user is logged
          in
        </Text>
      </View>
    );
  }
}
