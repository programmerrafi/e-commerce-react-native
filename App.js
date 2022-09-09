import { TailwindProvider } from "tailwindcss-react-native";
import { NativeBaseProvider } from "native-base";
import CartScreen from "./app/screens/CartScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <TailwindProvider>
        <CartScreen />
      </TailwindProvider>
    </NativeBaseProvider>
  );
}
