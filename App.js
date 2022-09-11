import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import OderScreen from "./app/screens/OderScreen";
import { Provider } from "react-redux";
import { store } from "./app/Redux/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./app/navigations/BottomNav";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Provider store={store}>
          <TailwindProvider>
            <Stack.Navigator
              initialRouteName="Bottom"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="OderScreen" component={OderScreen} />
              <Stack.Screen name="Bottom" component={BottomNav} />
            </Stack.Navigator>
          </TailwindProvider>
        </Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
