import React, { Suspense, lazy as l, ComponentType } from "react";
import { Text } from "react-native";

export default (
  factory: () => Promise<{ default: any }>,
  fallback?: ComponentType
): ComponentType<any> => {
  const Comp = l(factory);

  return ((props) => (
    <Suspense fallback={fallback ? fallback : <Text>Loading...</Text>}>
      <Comp {...props} />
    </Suspense>
  )) as typeof Comp;
};
