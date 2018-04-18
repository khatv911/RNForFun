import { StackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen
  }
});

export default RootStack;
