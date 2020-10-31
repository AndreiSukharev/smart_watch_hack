import React, {Component} from 'react';
import {EnumProfileRoutes, NavigationProfileProps} from "../../../types/routes-type/routes-profile-types";
import {SafeAreaView} from "react-native-safe-area-context";
import { StyleSheet } from 'react-native'
import {styles} from "../../styles";
import {Title, Button, Snackbar, Card, Paragraph} from "react-native-paper";
import {EnumMainRoutes, NavigationMainProps} from "../../../types/routes-type/routes-main-types";

const MSG = 'Вы планируете совершить о происшествии. \n' +
    'В случае подтверждения с вами свяжется оператор поддержки';

type Props = NavigationProfileProps<EnumProfileRoutes.profile> & NavigationMainProps<EnumMainRoutes.sos>

type State = {
    buttonText: string,
    visibleSnackBar: boolean,
    isSend: boolean,
}

export default class Sos extends Component<Props, State> {

    state: State = {
        buttonText: 's',
        visibleSnackBar: false,
        isSend: false,
    }

    sendSos = () => {
        this.setState({isSend: false, visibleSnackBar: true});
        setTimeout(() => this.props.navigation.navigate(EnumMainRoutes.main), 1500)
    }

    render() {
        return (
            <SafeAreaView style={styles.containerVerticalCenter}>
                <Card style={localStyles.card}>
                    <Card.Cover style={localStyles.tinyLogo} source={{  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAADc3NzCwsL7+/tsbGz09PTu7u7f39/x8fHNzc17e3ufn58vLy9PT09+fn7X19chISHm5uaxsbHQ0NCoqKhdXV3BwcGHh4cmJiaqqqpoaGiTk5NBQUE0NDQcHBwODg47OzuPj49TU1NGRkaGhoYWFhZra2u4uLh3IXLSAAAIbElEQVR4nO2d6ULbOhCFMYSSAGUJZackKVB4/ye8gFuazJGsmdFIlnL1/Wwcd0TkY2k27ew0Go1Go9FoNBqNRqM0JvPp7nQ+GduMVOy9LLqexc3h2MbYMzvtNnn5NrZJpkzo+D7HOLZVhhw6xvfO8sfYhlnx4B7gO8djm2aDa4b+5dfYxlkwNMCtGOLl4AC77m1sA2OZBgbYdQdjmxjJz+AIn8c2MY634AArn6cTxgC7ruZ16rCO/uV0bDP17LIG2HW7YxuqBmXm5Pj6+AT+9efYhmq5gKH0C1Fcpl6MbKkSlJn5n0/m8EmdYnNEh/FvnX1MPzoa0U41IDO3ax/e0g9rFBuQmXXPBTyKFYrNHR3D/cbH9/Tju5HsVIMyM9v4fAaf1yY2AzLTU7vYnFH7b+ESEJuzEezU80jNR6cTiM3jCHaqCchMT81i8w1kZOa4CsWmHifxPjXd7TUEsdnPbKcahsz0VCs237mG/6AXfs9qpxrwH/onH0znKsQGZca/WsFraxAb+F0uBy4W/N7FADIz/CKHpUH5YsOWmR74gxQvNuJpJ5rUBSCXjtrERvGL1CU28ApfMb7E2IeUg2oZxl7kFYBy3x70BxSDdjvE22yVgHpLy9owFwC4JTgy07OiXy0zK+ycmslfgIHYnCe0U02Ue7AGsTmgNopcvOhALi9F44qaKIsJQqzxKpGdaqJDLYOBnBIAmZkKbwCpRYWJDaQfyvMrIG+jKLGJk5messUGZEaT5wT5UwWJzR61TZer9kxvs2dsp57f1DSpzPSA2CyM7VRjIDM9IDYPpnaqsZCZnlLFxkRmesoUm2tqVUxKbJFis6RG6WSmB8RmaWRlBL+oTTfeSydv+6v3Cx73B6bxDb3d6Mn8mITnvXR9A+l3o8L95t5L8wDJor7fZ7J5pVdCQGxOElnOBGTmyXflinvhE73ldRrTmYDM+OYUFpb4fmyY979TGc+BrwuwsPPHFQXalRz4cy99V7pKZ7zrFfbESA/IjPeRcVUget0U/Ic7NSB7fktgf9UNLVeKERuw2T+bXCP0u5oEL9mkSJYfollaitjwZWZHPMIyxEa0DZCO0MgvEoVAZnbkI0SxyV/DBwYPbsddIxwM16PjwNb8MC/UgGGXCqQwhEaIzp/MDQqkO1UIEHbB8KLpzloOxFEC3gZXJWLAYhCbrGU14liYa10aegEYerjEyL1+KBya7+Qrq5F7bjGhhGGvmadZDDxUjFCfY4ThL0UHJbVowrWqEcJbNNPKRhVyV40wNjlAiS64gANcMr41jtjoUl/QT8PKQByjhm+wvNcPpH8zc8JGKBhe0f+SlxUCey2mpzciWU4JyAwzjRB2Q9zAWW6xCZX38g3ljjC32Kgz7CD3lJ2wnldsYBPEziWAJH7+EmxBv5lSbEAR2Wn1sGPmBwZz1vBFZCtjVzp+Ule+guGY8haMPfGrf/KV1TDLe53Azy9R/VwFw1FlZtiNR7JjFxbEaYmq3sG2ZpI8EhCbJN0J4iqw0GEqqm7KUTAc+bijO1G0X88hNpGVkOhsk8Va0otN7JOAIUFhNCl5wXCsmuECWli9lbpgOHqSxPcUSlswHP+g47Yrvw1DvNKby8U6eoS4LHoV38KLxeqe3mIpv4V+ZxMkou7uCxosUxT7pqvhM9ll07+SxqOUqobPprUafZ9pHPRqL1EAG28XdSeqctS1nr5hjDyW1J2oW3WtqDEWNXwgMzpHEHVF6DxmSo/7IFbOPLokUUY77cXGzCELJ3jobmNfVmPmVKcj1FYZWIuNXSdV6jBVF20ZFwyDv1kdSae5murnR5NF4McwZkBTRvUKYSk2lnEf6vTW7+4sxcYydkdHGOEss+tOYJpZRid8jDtQmlXnxTQ70HKEVjV8thme1KEc5dIVZrd6MC4JoA9PXKIh2KbJdDfOtKYb9LgUNYuCYSjNia0DvI21aAMoSJKLDSQxxVY8bKxFbmMTKkBsxDV8CapW5quvmxkkisYWDKepPDp7eFp2i9c7kz4CYKFskhVTPeZHVtJCMZeZFPCrHx0UUVgVQlRaRiiv7N+J3syYP05W1FMtaoLnRCsXpXU1GED5W9BvFSkzPbrXdiUy06NZeiXtEHP2sH91f2PZVUcx4RJ2+Xn7CoHYtdOTFwyn69Q0WV8JfjdrcSXdxibstvWY5r5Sj6eNA8QF9UyaxeBl7qR0Xe8w+9Is5V7U8S+dzECc1W6eSsQmXatbV7W6maDyC4YTyozrAHmzckm+2CRszIgFJZZLCW7BcMpOvnhCbmeZeccMc6bsxoyFXQNzSQ6vYDhpR20sCrI9xoITB0zbO9R1xrplDRqnFUrazvauQ9ZND1sJx+Mh/m/cwxdPWTcuCgnW8EEqvHHTd/wRjasIQ4d+pkn6W4dG18yLXobFJsdJL5t/ZPuTuYbTYLMcoDH9t64/T3HwwZDY5Dpxaa9PwTxJVHA+cNpUxlOzZtN0vkn/iWEpCxmy4isYru30Oj++kZR9dIYIEJvPbRSobFXnYxOgrObjrQfbx5IP5wsBYvOxiaeuqqIPWAxCa9AWjiV3rTLTA2IzhYy6wg86DULHc0EXbMUfVhuEiM0p9c6UdlKWHLKNOiFCU/ARoGw23evnJMRYt5D2bPpml1s/wo7M0vqFhm6iFlRpyj/aPATZ7D5v/dviCN6Qz+Vmz3CY09jEnaOtytXlXq1cYnxk15H+tlV8OLZdQZPt4WP3hLlh28RneMkVn90WepcpOou3hz+ue+ylti18uZ6x9eZ2sBZeWo1tSxLWC0In4NffAlabmRDY57d2oITGlbVUMw7H/RQbUtfLiXv/cLgtU/XK77afXVS/wFnuX4R82gfz3WqZzu3zDxqNRqPRaDQajUbj/8F/d8Buutr2qv4AAAAASUVORK5CYII=' }} />
                    <Card.Content>
                        <Title style={{ textAlign: 'center'}}>Внимание</Title>
                        <Paragraph>{MSG}</Paragraph>
                    </Card.Content>
                    <Card.Actions style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <Button onPress={this.sendSos}>Подтвердить</Button>
                        <Button>Отменить</Button>
                    </Card.Actions>
                </Card>
                <Snackbar
                    visible={this.state.visibleSnackBar}
                    duration={1500}
                    onDismiss={() => this.setState({visibleSnackBar: false})}>
                    Заявка принята
                </Snackbar>
            </SafeAreaView>
        );
    }
};

const localStyles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        textAlign: 'right',
        // backgroundColor: "red"
    },
    tinyLogo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
});
