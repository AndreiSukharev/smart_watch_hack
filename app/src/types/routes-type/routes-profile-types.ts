import {createStackNavigator, StackScreenProps} from "@react-navigation/stack";

export enum EnumProfileRoutes {
    profile = "Profile",
}

type ProfileStackParamList = {
    Profile: undefined;
};

export const ProfileStack = createStackNavigator<ProfileStackParamList>();

export type NavigationProfileProps<T extends keyof ProfileStackParamList> = StackScreenProps<ProfileStackParamList, T>;

