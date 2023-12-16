import React, {useEffect, useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Colors } from "../../constants/Colors";
import {UserData} from "../Login";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
    const [userData, setUserData] = useState<UserData | null>(null);


    useEffect(() => {
        const fetchUserData = async () => {
            const userDataStorage = await AsyncStorage.getItem('userData');
            console.log('uu',userDataStorage);
            if (userDataStorage !== null) {
                const userData = JSON.parse(userDataStorage) as UserData;
                setUserData(userData);
                console.log('userData', userData);
            }
        };

        fetchUserData();

    }, []);
    const handleEditProfile = () => {

    };

    const handleEditImage = () => {

    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Profile</Text>

            <TouchableOpacity onPress={handleEditImage}>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D' }}
                style={styles.profileImage}
            />
            </TouchableOpacity>




            <View style={styles.userInfo}>
                <View style={styles.leftColumn}>
                    <TextInput editable={false} style={styles.textInput}>Vasya Pupkin</TextInput>
                    <TextInput style={styles.textInputActive}>0665598363</TextInput>
                </View>
                <View style={styles.rightColumn}>
                    <TextInput style={styles.textInputActive}>qwertyuiop@gmail.com</TextInput>
                    <TextInput editable={false} style={styles.textInput}>2006.09.10</TextInput>
                    <TextInput style={styles.textInputActive}>ul. Veteranow 22</TextInput>
                </View>

            </View>


            <TouchableOpacity onPress={handleEditProfile} style={styles.editButton}>
                <Text style={styles.editButtonText}>Save</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    leftColumn: {
        flex: 1,
        marginRight: 10,
    },
    rightColumn: {
        flex: 1,
        marginLeft: 10,
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        color: Colors.gray,
        opacity: 0.7
    },
    textInputActive: {
        height: 50,
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        color: Colors.gray,
        backgroundColor: '#f0f0f0',
        opacity: 1.2
    },
    userDetails: {
        fontSize: 16,
        color: Colors.gray
    },
    editButton: {
        backgroundColor: Colors.main,
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },
    editButtonText: {
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Profile;
