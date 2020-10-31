import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {NavigationAuthProps, EnumAuthRoutes} from "../../types/routes-type/routes-auth-types";
import {connect} from "react-redux";
import {RootStateType} from "../../stores/redux";
import {loginUser} from "../../stores/redux/system/action";
import {ISystemState} from "../../stores/redux/system/types";
import {styles} from "../styles";
import {SafeAreaView} from "react-native-safe-area-context";
import DismissKeyboardWrapper from "../../components/DismissKeyboardWrapper";
import {ScrollView} from "react-native-gesture-handler";
import {Image} from "react-native";

type NavigationType = NavigationAuthProps<EnumAuthRoutes.login>;
type Props = NavigationType & LinkStateProps & LinkDispatchProps;

//export default class Friends extends Component {
const Login: React.FC<Props> = ({navigation, isLogged, loginReducer}) => {
    const [phone, setPhone] = useState<string>("");
    const [code, setCode] = useState<string>("");

    // const authorise = async () => {
    //     const userData : IUserLogin = {
    //         login: userLogin,
    //         password: code,
    //     }
    //     loginUser(userData)
    // }
    const sendUserInput = async () => {
        try {
            // await authorise()
            const user = {_id: "0"};
            loginReducer({loggedUserId: user._id, isLogged: true});
        } catch (e) {
            alert("error login");
        }
    };

    return (
        <ScrollView>

            <DismissKeyboardWrapper>
                <SafeAreaView style={styles.container}>
                    <Image style={{ alignSelf: 'center'}} source={require('../../../assets/department.png')}/>
                    <TextInput
                        label="Телефон"
                        style={styles.input}
                        mode="outlined"
                        value={phone}
                        onChangeText={(value) => setPhone(value)}
                        placeholder="+790099999"
                    />
                    <TextInput
                        label="Код"
                        style={styles.input}
                        mode="outlined"
                        value={code}
                        onChangeText={(value) => setCode(value)}
                        placeholder="0000"
                        textContentType="password"
                        secureTextEntry={true}
                    />

                    <Button mode="contained" onPress={sendUserInput}>Войти</Button>

                    <Button onPress={() => navigation.navigate(EnumAuthRoutes.signUp)}>или создать аккаунт</Button>
                    {/*<Button onPress={() => navigation.navigate(EnumAuthRoutes.forgottenPassword)}>Забыли пароль?</Button>*/}
                </SafeAreaView>
            </DismissKeyboardWrapper>
        </ScrollView>

    )
}

interface LinkStateProps {
    isLogged: boolean,
}

const mapStateToProps = (state: RootStateType, ownProps: NavigationType) => ({
    navigation: ownProps.navigation,
    isLogged: state.system!.isLogged,
});

interface LinkDispatchProps {
    loginReducer: (user: ISystemState) => void,
}

const mapDispatchToProps = (dispatch: any) => ({
    loginReducer: (user: ISystemState) => dispatch(loginUser(user)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
