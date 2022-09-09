import { TailwindProvider } from "tailwindcss-react-native";
import { NativeBaseProvider } from "native-base";
import PaymentScreen from "./app/screens/PaymentScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <TailwindProvider>
        <PaymentScreen />
      </TailwindProvider>
    </NativeBaseProvider>
  );
}
