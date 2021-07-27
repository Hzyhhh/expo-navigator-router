import lazy from "../../../utils/lazy";

export enum RouteEnum {
  Abc = "Abc",
  Bcd = "Bcd",
  RcExample = "RcExample",
}

export const RouteMapping = {
  [RouteEnum.Abc]: lazy(async () => import("./Abc")),
  [RouteEnum.Bcd]: lazy(async () => import("./Bcd")),
  [RouteEnum.RcExample]: lazy(async () => import("./RcExample")),
};

export type RootStackParamList = {
  Profile: { userId: string };
  // 路由Name key: routeParams
  [RouteEnum.Abc]: {};
  [RouteEnum.Bcd]: { userId: string };
  [RouteEnum.RcExample]: {};
};
