import React from "react";
import Fwy from "./src/container/fwy";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Fwy />
    </SafeAreaProvider>
  );
}
