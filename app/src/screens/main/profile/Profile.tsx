import React, {Component} from 'react';
import {EnumProfileRoutes, NavigationProfileProps} from "../../../types/routes-type/routes-profile-types";
import {Image, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import { StyleSheet } from 'react-native'

import AccelerometerComponent from "../../../components/Accelerometer";
import {styles} from "../../styles";
import {Title, Button, Snackbar, Text} from "react-native-paper";
import Logout from "../../../components/Logout";

const NOT_STARTED_SHIFT = 'не начата';
const START_SHIFT = 'Начать смену';
const FINISH_SHIFT = 'Закончить смену';

type Props = NavigationProfileProps<EnumProfileRoutes.profile>

type State = {
    address: string,
    company: string,
    name: string,
    position: string,
    scheduler: string,
    amountWorked: string,
    shift: string,
    isShiftStarted: boolean,
    buttonText: string,
    visibleSnackBar: boolean,
    geoText: string,
}

export default class Profile extends Component<Props, State> {

    state: State = {
        address: 'Отель Мореон',
        company: 'ООО "Приват"',
        name: 'Иванов И.И.',
        position: 'Маляр',
        scheduler: 'ПН-ПТ, 10-18',
        amountWorked: 'Окт, 2 ч',
        shift: NOT_STARTED_SHIFT,
        isShiftStarted: false,
        buttonText: START_SHIFT,
        visibleSnackBar: false,
        geoText: '',
    }

    manageShift = () => {
        let shift: string;
        let buttonText: string;
        let visibleSnackBar = false;
        let geoText : string = '';
        if (this.state.shift === NOT_STARTED_SHIFT) {
            const date = new Date();
            shift = `${date.getHours()}.${date.getMinutes()}`;
            buttonText = FINISH_SHIFT;
            visibleSnackBar = true;
            geoText = 'Геопозиция передается';
        } else {
            shift = NOT_STARTED_SHIFT;
            buttonText = START_SHIFT;
        }
        this.setState({shift, buttonText, visibleSnackBar, geoText});
    }

    render() {
        return (
            <SafeAreaView style={styles.containerHorizonCenter}>
                <Image source={require('../../../../assets/department.png')}/>
                <Title>{this.state.address}</Title>
                <Title>{this.state.company}</Title>
                <Title>{this.state.name}, {this.state.position}</Title>
                <Title>Смена {this.state.scheduler}</Title>
                <Title>Всего отработано: {this.state.amountWorked}</Title>
                <View style={localStyles.shift}>
                    <Title style={{textAlign: 'center'}}>Текущая смена: {this.state.shift}</Title>
                    <Title style={{textAlign: 'center'}}>{this.state.geoText}</Title>
                    <Button mode="outlined" onPress={this.manageShift}>
                        {this.state.buttonText}
                    </Button>
                    <Logout/>
                </View>
                <Snackbar
                    visible={this.state.visibleSnackBar}
                    duration={3000}
                    onDismiss={() => this.setState({visibleSnackBar: false})}>
                    Координаты передаются
                </Snackbar>
                <AccelerometerComponent/>
            </SafeAreaView>
        );
    }
};

const localStyles = StyleSheet.create({
    shift: {
        width: '100%',
        marginTop: '30%',
        // backgroundColor: "red"
    },
});
