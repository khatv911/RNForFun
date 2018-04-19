import { StackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";

export default (MainStack = StackNavigator({
  Home: {
    screen: HomeScreen
  }
}));
