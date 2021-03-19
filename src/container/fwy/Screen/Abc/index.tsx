import { StackScreenProps } from "@react-navigation/stack";
import React, { FC } from "react";

import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList, RouteEnum } from "../types";

type AbcProps = StackScreenProps<RootStackParamList>;

const Abc: FC<AbcProps> = (props) => {
  const { navigation } = props;

  const handlePress = () => {
    console.log(123);
  };

  const handleNavigator = () => {
    navigation.navigate(RouteEnum.Bcd, { userId: "123" });
  };

  return (
    <SafeAreaView>
      <View style={styled.container}>
        <Text>abc</Text>
        <Button title="123" onPress={handlePress} />
        <Button title="页面跳转" onPress={handleNavigator} />
      </View>
    </SafeAreaView>
  );
};

Abc.displayName = "Abc";

export default Abc;

const styled = StyleSheet.create({
  container: {},
});
