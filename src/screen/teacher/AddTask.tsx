import {View, Text, StyleSheet, TextInput, Button} from "react-native"
import {LinearGradient} from "expo-linear-gradient";
import React, {useEffect, useState} from "react";
import {Formik} from "formik";
import axios from "axios";
import {Colors} from "../../constants/Colors";
import { Dropdown } from 'react-native-element-dropdown';


export interface UserData {
    birthday: string;
    classroom: string;
    created_at: string;
    email: string;
    id: number;
    image: string;
    name: string;
    phone: string;
    role:string;
    surname: string;
    updated_at: string;
}

export const AddTask = () => {
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [users, setUsers] = useState<UserData[]>([]);
    const [selectedUser, setSelectedUser] = useState<any>(null);

    useEffect(() => {
        getUsers();
    }, []);
    const onPressAdd = async () => {
        try {
            const response = await axios.post(`http://192.168.31.88:8000/api/createTask`, {
                name: name,
                description: description,
                user_id: selectedUser
            });
            console.log(response.data);
            // navigation.navigate('BottomTabNav');
        } catch (error: any) {
            console.log('error',error.response.data);
            alert("An error has occurred");
        }
    };
    const getUsers = async () => {
        try {
            const response = await axios.get('http://192.168.31.88:8000/api/all-users');
            const fetchedUsers = response.data.users;
            console.log(response.data);
            setUsers(fetchedUsers);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    console.log('users', users);
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
                <Formik
                    initialValues={{ name: '' }}
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
                                    Name:
                                </Text>
                            </View>
                            <View style={styles.container}>
                                <TextInput
                                    placeholder='  Enter task name'
                                    placeholderTextColor= {Colors.white}
                                    style={styles.input}
                                    value={name}
                                    onChangeText={(name) => setName(name)}
                                />
                            </View>
                            <Text style={styles.titleInput}>
                                Description:
                            </Text>
                            <View style={styles.container}>
                                <TextInput
                                    placeholder='  Enter your description'
                                    placeholderTextColor= {Colors.white}
                                    style={styles.input}
                                    value={description}
                                    onChangeText={(description) => setDescription(description)}
                                />
                            </View>
                            <Text style={styles.titleInput}>Select a user:</Text>
                            <Dropdown
                                labelField="label"
                                valueField="value"
                                value={selectedUser}
                                onChange={item => {
                                   setSelectedUser(item.value)
                                }}
                                maxHeight={300}
                                style={[styles.dropdown]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={users.map((user) => ({ label: user.name, value: user.id }))}
                                placeholder={'Select User'}
                            />
                            {selectedUser ? (<Text style={styles.titleInput}>Selected User: {selectedUser}</Text>) : <></>}
                            <View style={{marginTop: 23}}>
                                <Button
                                    onPress = {onPressAdd}
                                    title="Add"
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
    },
    dropdown: {
        width:300,
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    text:{
      color: Colors.white
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: Colors.white,
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
