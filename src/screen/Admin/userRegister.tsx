import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Colors } from '../../constants/Colors';
import axios from "axios/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from 'expo-image-picker';

const userRegistration = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [classroom, setClassroom] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [password, setPassword] = useState('');
    const onPressRegister = async () => {
        try {
            const response = await axios.post(`http://192.168.31.88:8000/api/register`, {
                email: email,
                password: password,
                name: name,
                surname: surname,
                birthday: birthday,
                classroom: classroom,
                phone: phone,
                image: image
            });
            console.log('response', response.data);
            const auth = response.data.authorisation;
            await AsyncStorage.setItem('jwtToken', auth.token);
            // navigation.navigate('BottomTabNav');
        } catch (error: any) {
            console.log('error',error.response.data);
            alert("An error has occurred");
        }
    };

    const openImagePicker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    return (
        <View style={styles.container}>
            <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Surname"
        style={styles.input}
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        placeholder="Date of birthday"
        style={styles.input}
        value={birthday}
        onChangeText={setBirthday}
      />
      <TextInput
        placeholder="Classroom"
        style={styles.input}
        value={classroom}
        onChangeText={setClassroom}
      />
      <TextInput
        placeholder="Phone number"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
      />
     <TextInput
                placeholder="Password"
                style={styles.input}
                value={password}
                secureTextEntry={true}
                onChangeText={setPassword}
     />
      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
            <TouchableOpacity onPress={openImagePicker}>
                <Text style={styles.choosePhotoText}>Choose photo from galery</Text>
            </TouchableOpacity>
            {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
            <Button title="Register" onPress={onPressRegister} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.white,
    },
    input: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    choosePhotoText: {
        color: Colors.main,
        fontSize: 16,
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 10,
        resizeMode: 'cover',
    },
});







export default userRegistration;


