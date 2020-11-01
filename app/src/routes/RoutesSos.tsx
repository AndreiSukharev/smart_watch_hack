import * as React from "react";
import {EnumSosRoutes, SosStack} from "../types/routes-type/routes-sos-types";
import Sos from "../screens/main/sos/Sos";
import {navigationColours} from "../styles";

const RoutesSos: React.FC<any> = ({}) => {
    return (
            <SosStack.Navigator
                initialRouteName={EnumSosRoutes.sos}
                screenOptions={navigationColours}
            >
                <SosStack.Screen name={EnumSosRoutes.sos} component={Sos}/>
            </SosStack.Navigator>
    )
};

export default RoutesSos;
