import { TailwindProvider } from "tailwindcss-react-native";
import { NativeBaseProvider } from "native-base";
import NotVerifyScreen from "./app/screens/NotVerifyScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <TailwindProvider>
        <NotVerifyScreen />
      </TailwindProvider>
    </NativeBaseProvider>
  );
}
