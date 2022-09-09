import { TailwindProvider } from "tailwindcss-react-native";
import { NativeBaseProvider } from "native-base";
import ProfileScreen from "./app/screens/ProfileScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <TailwindProvider>
        <ProfileScreen />
      </TailwindProvider>
    </NativeBaseProvider>
  );
}
