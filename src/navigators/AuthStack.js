import { StackNavigator } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";

export default (AuthStack = StackNavigator({
  Login: LoginScreen
}));
