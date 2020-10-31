import * as React from "react";
import {EnumProfileRoutes, ProfileStack} from "../types/routes-type/routes-profile-types";
import Profile from "../screens/main/profile/Profile";
import {navigationColours} from "../styles";

const RoutesProfile: React.FC<any> = ({}) => {
    return (
            <ProfileStack.Navigator
                initialRouteName={EnumProfileRoutes.profile}
                screenOptions={navigationColours}
            >
                <ProfileStack.Screen name={EnumProfileRoutes.profile} component={Profile}/>
            </ProfileStack.Navigator>
    )
};

export default RoutesProfile;
