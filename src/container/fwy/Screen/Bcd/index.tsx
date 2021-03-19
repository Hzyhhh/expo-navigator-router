import { StackScreenProps } from "@react-navigation/stack";
import React, { FC, useEffect } from "react";

import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList, RouteEnum } from "../types";

type BcdProps = StackScreenProps<RootStackParamList, RouteEnum.Bcd>;

const Bcd: FC<BcdProps> = (props) => {
  const { navigation, route } = props;
  const { userId } = route.params;

  const handleNavigator = () => {
    navigation.goBack();
  };

  useEffect(() => {
    console.log(userId);
  }, []);

  return (
    <SafeAreaView>
      <View style={styled.container}>
        <Text>Bcd</Text>
        <Button title="页面跳转" onPress={handleNavigator} />
      </View>
    </SafeAreaView>
  );
};

Bcd.displayName = "Bcd";

export default Bcd;

const styled = StyleSheet.create({
  container: {},
});
