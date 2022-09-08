import { TailwindProvider } from "tailwindcss-react-native";
import { NativeBaseProvider } from "native-base";
import SingleProductScreen from "./app/screens/SingleProductScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <TailwindProvider>
        <SingleProductScreen />
      </TailwindProvider>
    </NativeBaseProvider>
  );
}
