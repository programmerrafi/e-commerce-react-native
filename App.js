import { TailwindProvider } from "tailwindcss-react-native";
import { NativeBaseProvider } from "native-base";
import PlaceOrderScreen from "./app/screens/PlaceOrderScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <TailwindProvider>
        <PlaceOrderScreen />
      </TailwindProvider>
    </NativeBaseProvider>
  );
}
