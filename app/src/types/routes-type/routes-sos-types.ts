import {createStackNavigator, StackScreenProps} from "@react-navigation/stack";

export enum EnumSosRoutes {
    sos = "SOS",
}

type SosStackParamList = {
    SOS: undefined;
};

export const SosStack = createStackNavigator<SosStackParamList>();

export type NavigationSosProps<T extends keyof SosStackParamList> = StackScreenProps<SosStackParamList, T>;

