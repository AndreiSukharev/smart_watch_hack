import React, {Component} from 'react';
import {styles} from "../../styles";
import {Image, View} from "react-native";
import {TextInput, Switch, Text, Button, Snackbar, Menu} from "react-native-paper";
import DismissKeyboardWrapper from "../../../components/DismissKeyboardWrapper";
import {ScrollView} from "react-native-gesture-handler";
import {EnumMainRoutes} from "../../../types/routes-type/routes-main-types";

type State = {
    subject: string,
    email: string,
    isAnon: boolean,
    text: string,
    visibleSnackBar: boolean,
    showMenu: boolean,
}

export default class Support extends Component<{}, State> {

    state: State = {
        subject: '',
        email: '',
        isAnon: false,
        text: '',
        visibleSnackBar: false,
        showMenu: false,
    }

    sendUserInput = () => {
        this.setState({visibleSnackBar: true});
        setTimeout(() => this.props.navigation.navigate(EnumMainRoutes.main), 1500)
    }

    render() {
        return (
            <DismissKeyboardWrapper>

                <View style={styles.container}>
                    <ScrollView>
                        {/*<Menu*/}
                        {/*    visible={this.state.showMenu}*/}
                        {/*    onDismiss={() => this.setState({showMenu: false})}*/}
                        {/*    anchor={<Button onPress={() => this.setState({showMenu: true})}>Show menu</Button>}>*/}
                        {/*    <Menu.Item onPress={() => {}} title="Item 1" />*/}
                        {/*    <Menu.Item onPress={() => {}} title="Item 2" />*/}
                        {/*    <Menu.Item onPress={() => {}} title="Item 3" />*/}
                        {/*</Menu>*/}
                        <Image style={{alignSelf: 'center'}} source={require('../../../../assets/department.png')}/>
                        <TextInput
                            label="Тема обращения"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({subject: value})}
                            placeholder="Нарушение строительства"
                        />
                        <TextInput
                            label="Email для связи"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({email: value})}
                            placeholder="hack@sample.com"
                        />
                        <Switch value={this.state.isAnon} onValueChange={(value) => this.setState({isAnon: value})}/>
                        <Text>Анонимное обращение</Text>
                        <TextInput
                            label="Текст обращение"
                            style={styles.input}
                            mode="outlined"
                            onChangeText={value => this.setState({text: value})}
                            placeholder=""
                            multiline
                            numberOfLines={10}
                        />
                        <Button mode="contained" onPress={this.sendUserInput}>Отправить</Button>
                    </ScrollView>
                    <Snackbar
                        visible={this.state.visibleSnackBar}
                        duration={3000}
                        onDismiss={() => this.setState({visibleSnackBar: false})}>
                        Запрос отправлен!
                    </Snackbar>
                </View>
            </DismissKeyboardWrapper>

        );
    }
}


