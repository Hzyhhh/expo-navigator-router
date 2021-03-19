import React, { FC } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList, RouteEnum, RouteMapping } from "./Screen/types";

const Stack = createStackNavigator<RootStackParamList>();

const App: FC = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={RouteEnum.Abc}>
        {Object.entries(RouteMapping).map(([key, value]) => (
          <Stack.Screen key={key} name={RouteEnum[key]} component={value} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
