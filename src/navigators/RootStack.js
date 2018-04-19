import { SwitchNavigator } from "react-navigation";
import SplashScreen from "../screens/SplashScreen";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const RootStack = SwitchNavigator(
  {
    Splash: SplashScreen,
    Auth: AuthStack,
    Main: MainStack
  },
  { initialRouteName: "Splash" }
);

export default RootStack;
