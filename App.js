import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import Toast from "react-native-toast-message";
import BottomNavigator from "./components/BottomNavigator";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <BottomNavigator />
        <Toast />
      </NavigationContainer>
    </PaperProvider>
  );
}
