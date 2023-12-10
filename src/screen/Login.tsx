import {View, Text, StyleSheet, TextInput, Button} from "react-native"
import {LinearGradient} from "expo-linear-gradient";
import React, {useState} from "react";
import {Formik} from "formik";
import {Colors} from "../constants/Colors";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Plant from "../assets/Plant";
import {useNavigation} from "@react-navigation/native";

export interface UserData {
    birthday: string;
    classroom: string;
    created_at: string;
    email: string;
    id: number;
    image: string;
    name: string;
    phone: string;
    surname: string;
    updated_at: string;
}

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errortext, setErrortext] = useState('');
    const navigation = useNavigation();
    const [userData, setUserData] = useState<UserData | null>(null);

    const onPressLogin = async () => {
        setErrortext('');
        if (!email) {
            alert('Please fill Email');
            return;
        }
        if (!password) {
            alert('Please fill Password');
            return;
        }
        try {
            const response = await axios.post(`http://192.168.31.88:8000/api/login`, {
                email: email,
                password: password
            });
            const userData = response.data.user as UserData;
            setUserData(userData);
            const auth = response.data.authorisation;
            await AsyncStorage.setItem('jwtToken', auth.token);
            await AsyncStorage.setItem('userData', response.data.user);

            // navigation.navigate('BottomTabNav');
        } catch (error: any) {
            console.log('error',error.response.data);
            alert("An error has occurred");
        }
    };

    return (
        <LinearGradient colors={[Colors.main, Colors.black]} style={{
            flex: 1
        }}>
                <View style={{
                    flex:1,position: 'absolute',
                    top: 0, left: 0,
                    right: 0, bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                    <Plant/>
                    <Formik
                        initialValues={{ email: '' }}
                        onSubmit={values => console.log(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View  style={{
                                width: "80%",
                                height: "20%",
                                marginTop: 50,
                                alignItems: "center",
                                justifyContent: "center"
                            }}>

                                <View style={{ justifyContent: "flex-start",
                                flexDirection:"column"}}>
                                    <Text style={styles.titleInput}>
                                        Login:
                                    </Text>
                                </View>
                                <View style={styles.container}>
                                    <TextInput
                                        placeholder='  Enter your email'
                                        placeholderTextColor= {Colors.white}
                                        style={styles.input}
                                        value={email}
                                        onChangeText={(email) => setEmail(email)}
                                    />
                                </View>
                                <Text style={styles.titleInput}>
                                    Password:
                                </Text>
                                <View style={styles.container}>
                                    <TextInput
                                        placeholder='  Enter your password'
                                        placeholderTextColor= {Colors.white}
                                        style={styles.input}
                                        secureTextEntry={true}
                                        value={password}
                                        onChangeText={(password) => setPassword(password)}
                                    />
                            </View>
                                <View style={{marginTop: 23}}>
                                <Button
                                    onPress = {onPressLogin}
                                    title="Login"
                                    color={Colors.main}
                                />
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 48,
        borderColor: Colors.white,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    titleInput: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 12,
        color: Colors.white,
        marginBottom: 10
    },
    input: {
        color: Colors.white,
        width: "100%"
    }
});
