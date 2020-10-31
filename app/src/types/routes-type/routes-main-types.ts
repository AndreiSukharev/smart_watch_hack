import {createMaterialBottomTabNavigator, MaterialBottomTabScreenProps} from "@react-navigation/material-bottom-tabs";

export enum EnumMainRoutes {
    main = "Главное",
    sos = "SOS",
    support = "Поддержка",
}

type MainStackParamList = {
    Main: undefined;
    SOS: undefined;
    Support: undefined;
};

export const MainStack = createMaterialBottomTabNavigator<MainStackParamList>();

export type NavigationMainProps<T extends keyof MainStackParamList> = MaterialBottomTabScreenProps<MainStackParamList, T>;

