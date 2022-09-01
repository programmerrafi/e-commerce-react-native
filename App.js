import { TailwindProvider } from "tailwindcss-react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/HomeScreen";
import { NativeBaseProvider } from "native-base";
// import { Provider } from "react-redux";
// import { store } from "./app/Redux/store";

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <TailwindProvider>
        <HomeScreen />
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
