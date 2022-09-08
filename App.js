import { TailwindProvider } from "tailwindcss-react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/LoginScreen";
import { NativeBaseProvider } from "native-base";
// import { Provider } from "react-redux";
// import { store } from "./app/Redux/store";

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <TailwindProvider>
        <LoginScreen />
      </TailwindProvider>
    </NativeBaseProvider>
    // <NavigationContainer>
    //   <Provider store={store}>
    //     <TailwindProvider>
    //       <Stack.Navigator>
    //         <Stack.Screen name="Home" component={HomeScreen} />
    //       </Stack.Navigator>
    //     </TailwindProvider>
    //   </Provider>
    // </NavigationContainer>
  );
}
