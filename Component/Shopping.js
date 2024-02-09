import React from 'react';
import { View, Text, Button } from 'react-native';

const ShoppingList = ({ route, navigation }) => {
 const { product } = route.params;

 

 return (
    <View>
  
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
 );
};

export default ShoppingList;