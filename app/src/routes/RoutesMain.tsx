import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {EnumMainRoutes} from "../types/routes-type/routes-main-types";
import {StyleSheet} from "react-native";
import {MainStack} from "../types/routes-type/routes-main-types";
import RoutesProfile from "./RoutesProfile";
import RoutesCreditIndex from "./RoutesCreditIndex";
import RoutesSos from "./RoutesSos";
import {styleColors} from "../styles";

const RoutesMain: React.FC<any> = () => {
    return (
        <MainStack.Navigator
            initialRouteName={EnumMainRoutes.main}
            activeColor="white"
            barStyle={styles.tabs}
        >
            <MainStack.Screen
                name={EnumMainRoutes.main}
                component={RoutesProfile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="star" color={color} size={26} />
                    ),
                }}
            />
            <MainStack.Screen
                name={EnumMainRoutes.sos}
                component={RoutesSos}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="lifebuoy" color={color} size={26} />
                    ),
                }}
            />
            <MainStack.Screen
                name={EnumMainRoutes.support}
                component={RoutesCreditIndex}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="headphones" color={color} size={26} />
                    ),
                }}
            />
        </MainStack.Navigator>
    );
}

const styles = StyleSheet.create({
    tabs: {
        backgroundColor: styleColors.primary,
    }
});

export default RoutesMain;
