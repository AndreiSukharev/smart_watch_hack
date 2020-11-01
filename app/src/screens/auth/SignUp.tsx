import React, {Component} from 'react';
import {NavigationAuthProps, EnumAuthRoutes} from "../../types/routes-type/routes-auth-types";
import {Button, TextInput} from "react-native-paper";
import DismissKeyboardWrapper from "../../components/DismissKeyboardWrapper";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "../styles";
import {ScrollView} from "react-native-gesture-handler";
import {IUser} from "../../types/user-types";

type Props = NavigationAuthProps<EnumAuthRoutes.signUp>;
type State = {
    phone: string,
    name: string,
    inn: string,
    company: string,
    address: string,
}

// const SignUp: React.FC<NavigationAuthProps<EnumAuthRoutes.signUp>> = ({navigation}) => {
class SignUp extends Component<Props, State> {
    state: State = {
        phone: '',
        name: '',
        inn: '',
        company: '',
        address: '',
    }

    signUp = async () => {
        this.props.navigation.navigate(EnumAuthRoutes.login)
    };

    render() {
        return (
            <ScrollView>
                <DismissKeyboardWrapper>
                    <SafeAreaView style={styles.container}>
                        <TextInput
                            label="ФИО"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({name: value})}
                            placeholder="Олег Петров Петрович"
                        />
                        <TextInput
                            label="Телефон"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({phone: value})}
                            placeholder="+790099999"
                        />
                        <TextInput
                            label="ИНН"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({inn: value})}
                            placeholder="3812321333"
                        />
                        <TextInput
                            label="Строительная организация"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({company: value})}
                            placeholder="СтройИнновации"
                        />
                        <TextInput
                            label="Адрес объекта строительства"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({address: value})}
                            placeholder="Колончевский вокзал"
                        />
                        <Button mode="contained" onPress={this.signUp}>Зарегистрироваться</Button>
                    </SafeAreaView>
                </DismissKeyboardWrapper>
            </ScrollView>
        );
    }
}

export default SignUp;

