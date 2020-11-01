import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import {Snackbar} from "react-native-paper";

export default class AccelerometerComponent extends Component {
    state = {
        accelerometerData: { x: 0, y: 0, z: 0 },
        visibleSnackBar: false,
    };

    componentWillUnmount() {
        this._unsubscribeFromAccelerometer();
    }

    componentDidMount() {
        this._subscribeToAccelerometer();
    }

    componentWillMount() {
        const { width, height } = Dimensions.get('window');
        this.screenWidth = width;
        this.screenHeight = height;
        this.boxWidth = this.screenWidth / 10.0;
    }

    _subscribeToAccelerometer = () => {
        this._accelerometerSubscription = Accelerometer.addListener(
            accelerometerData => this._setAccelerometerData(accelerometerData)
        );
        Accelerometer.setUpdateInterval(1000);
    };

    _setAccelerometerData = (accelerometerData) => {
        const {x, y, z} = this.state.accelerometerData;
        const xOk : boolean = (Math.abs(x) - Math.abs(accelerometerData.x)) < 1;
        const yOk : boolean= (Math.abs(y) - Math.abs(accelerometerData.y)) < 1;
        const zOk : boolean = (Math.abs(z) - Math.abs(accelerometerData.z)) < 1;
        if (!xOk || !yOk || !zOk) {
            console.log("clash");
            this.setState({ visibleSnackBar: true });
        }
        this.setState({ accelerometerData });
    }

    _unsubscribeFromAccelerometer = () => {
        //this._accelerometerSubscription && this._acceleroMeterSubscription.remove();
        //this._accelerometerSubscription = null;
    };


    render() {

        return (
            <View style={styles.container}>
                {/*<View style={styles.textContainer}>*/}
                {/*    <Text style={styles.paragraph}>*/}
                {/*        x = {this.state.accelerometerData.x.toFixed(2)}*/}
                {/*        {', '}*/}
                {/*        y = {this.state.accelerometerData.y.toFixed(2)}*/}
                {/*        {', '}*/}
                {/*        z = {this.state.accelerometerData.z.toFixed(2)}*/}
                {/*    </Text>*/}
                {/*</View>*/}
                <Snackbar
                    visible={this.state.visibleSnackBar}
                    duration={10000}
                    onDismiss={() => this.setState({visibleSnackBar: false})}>
                    Команда SOS отправлена
                </Snackbar>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    paragraph: {
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    textContainer: {
        position: 'absolute',
        top: 40,
    },
});
