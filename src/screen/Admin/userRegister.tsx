import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import ImagePicker, { ImagePickerResponse, MediaType } from 'react-native-image-picker';
import { Colors } from '../../constants/Colors';



const userRegistration = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [classroom, setClassroom] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo' as MediaType,
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        ImagePicker.launchImageLibrary(options, (response: ImagePickerResponse) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('Image picker error: ', response.errorMessage);
            } else {
                let imageUri = response.assets?.[0]?.uri;
                setImage(imageUri || '');
            }
        });
    };

    const handleSubmit = () => {
        const formData = { name, surname, birthday, classroom, phone, email, image };
        console.log(formData);
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
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
            <TouchableOpacity onPress={openImagePicker}>
                <Text style={styles.choosePhotoText}>Choose photo from galery</Text>
            </TouchableOpacity>
            {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
            <Button title="Register" onPress={handleSubmit} />
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


