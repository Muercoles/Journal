import * as React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import {Colors} from "../../constants/Colors";
import {Formik} from "formik";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {UserData} from "../Login";
import {useEffect, useState} from "react";

export interface Task {
     id: number;
     name: string;
     description: string;
     user_id: number;
}

const Schedule = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [tasks, setUserTasks] = useState<Task[]>([]);

    useEffect(() => {
        fetchUserData();
    }, []);
    const fetchUserData = async () => {
        const userDataStorage = await AsyncStorage.getItem('userData');
        if (userDataStorage !== null) {
            const userData = JSON.parse(userDataStorage) as UserData;
            await setUserData(userData);
            getUsersTask(userData.id);
        }
    };
    const getUsersTask = async (id: number) => {
        try {
            const response = await axios.get('http://192.168.31.88:8000/api/getUserTask/' + id);
            setUserTasks(response.data.tasks);
        } catch (error: any) {
            console.log('error',error.response.data)
        }
    };

    return (
        <LinearGradient colors={[Colors.main, Colors.black]} style={{
            flex: 1
        }}>
            <View style={{
                flex: 1, position: 'absolute',
                top: 0, left: 0,
                right: 0, bottom: 0,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Formik
                    initialValues={{name: ''}}
                    onSubmit={values => console.log(values)}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <View style={{
                            width: "80%",
                            height: "20%",
                            marginTop: 50,
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            {tasks.map(task => (
                                <View key={task.id} style={styles.taskBlock}>
                                    <Text style={styles.taskTitle}>{task.name}</Text>
                                    <Text>{task.description}</Text>
                                </View>
                            ))}
                        </View>
                    )}
                </Formik>
            </View>
        </LinearGradient>
    );
};

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
    },
    taskBlock: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        width: "50%"
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default Schedule;
