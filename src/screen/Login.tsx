import {View, Text, StyleSheet, TextInput, Button} from "react-native"
import {LinearGradient} from "expo-linear-gradient";
import React from "react";
import {Formik} from "formik";
import {Colors} from "../constants/Colors";
import LogoAnimate from "../assets/LogoAnimate";

export const Login = () => {
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
                    <LogoAnimate/>
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
                                        placeholder='Enter your login'
                                        placeholderTextColor= {Colors.white}
                                        style={styles.input}
                                    />
                                </View>
                                <Text style={styles.titleInput}>
                                    Password:
                                </Text>
                                <View style={styles.container}>
                                    <TextInput
                                        placeholder='Enter your password'
                                        placeholderTextColor= {Colors.white}
                                        style={styles.input}
                                    />
                            </View>
                                <Button
                                    title="Learn More"
                                    color={Colors.main}
                                />
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
