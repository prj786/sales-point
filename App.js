import 'react-native-gesture-handler';
import React from "react";
import {DefaultTheme, PaperProvider, withTheme} from "react-native-paper";
import BottomNavigator from "./components/BottomNavigator";
import {NavigationContainer} from "@react-navigation/native";
import Toast from "react-native-toast-message";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
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