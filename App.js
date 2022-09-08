import { TailwindProvider } from "tailwindcss-react-native";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./app/screens/HomeScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <TailwindProvider>
        <HomeScreen />
      </TailwindProvider>
    </NativeBaseProvider>
  );
}
