import React, { Component } from "react";
import { View, Text } from "react-native";

export default class SplashScreen extends Component {

  constructor(props){
    super(props)
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () =>{

    

    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
  }

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
