import {View, Text, Pressable, TextInput, Button} from "react-native"
import {LinearGradient} from "expo-linear-gradient";
import React from "react";
import {Formik} from "formik";
import {Colors} from "../constants/Colors";
import LogoAnimate from "../assets/LogoAnimate";

export const Login = () => {
    return (
        <LinearGradient colors={[Colors.black, Colors.main]} style={{
            flex: 1
        }}>
                <View style={{flex:1,position: 'absolute',
                    top: 0, left: 0,
                    right: 0, bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: Colors.white,
                        marginBottom: 10
                    }}>
                        Hi Welcome Back ! 👋
                    </Text>
                    <LogoAnimate></LogoAnimate>
                    <Formik
                        initialValues={{ email: '' }}
                        onSubmit={values => console.log(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View style={{
                                width: "100%",
                                height: 48,
                                borderColor: "black",
                                borderWidth: 1,
                                borderRadius: 8,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingLeft: 22
                            }}>
                                <TextInput
                                    placeholder='Enter your password'
                                    placeholderTextColor="black"
                                    style={{
                                        width: "100%"
                                    }}
                                />

                            </View>
                        )}
                    </Formik>
                </View>
        </LinearGradient>
    )
}
