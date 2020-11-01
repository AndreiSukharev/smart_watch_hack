import {createStackNavigator, StackScreenProps} from "@react-navigation/stack";

export enum EnumAuthRoutes {
    login = "Аутентификация",
    signUp = "Регистрация",
    forgottenPassword = "ForgottenPassword"
}

type AuthStackParamList = {
    Login: undefined;
    SignUp: undefined;
    ForgottenPassword: undefined;
};

export const AuthStack = createStackNavigator<AuthStackParamList>();

export type NavigationAuthProps<T extends keyof AuthStackParamList> = StackScreenProps<AuthStackParamList, T>;

