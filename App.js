import { TailwindProvider } from "tailwindcss-react-native";
import { NativeBaseProvider } from "native-base";
import OderScreen from "./app/screens/OderScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <TailwindProvider>
        <OderScreen />
      </TailwindProvider>
    </NativeBaseProvider>
  );
}
