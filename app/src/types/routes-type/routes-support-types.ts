import {createStackNavigator, StackScreenProps} from "@react-navigation/stack";

export enum EnumSupportRoutes {
    support = "Поддержка",
}

type SupportStackParamList = {
    Support: undefined;
};

export const SupportStack = createStackNavigator<SupportStackParamList>();

export type NavigationSupportProps<T extends keyof SupportStackParamList> = StackScreenProps<SupportStackParamList, T>;

