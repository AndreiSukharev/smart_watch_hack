import * as React from "react";
import {EnumSupportRoutes, SupportStack} from "../types/routes-type/routes-support-types";
import Support from "../screens/main/support/Support";
import {navigationColours} from "../styles";

const RoutesSupport: React.FC<any> = ({}) => {
    return (
            <SupportStack.Navigator
                initialRouteName={EnumSupportRoutes.support}
                screenOptions={navigationColours}
            >
                <SupportStack.Screen name={EnumSupportRoutes.support} component={Support}/>
            </SupportStack.Navigator>
    )
};

export default RoutesSupport;
