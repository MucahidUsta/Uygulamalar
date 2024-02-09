import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const UserRegistration = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegistration = () => {
    // Handle user registration here
    navigation.navigate('Categories');
  };

  return (
    <View>
      <Text>Create User</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Button title="Register" onPress={handleRegistration} />
    </View>
  );
};

export default UserRegistration;