import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const Product = ({ route, navigation }) => {
 const { product } = route.params;

 const handleAddToList = () => {
    // Handle adding product to list here
    navigation.navigate('ShoppingList', { product });
 };

 return (
    <View>
      <Image source={{ uri: product.image }} />
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
      <Button title="Add to List" onPress={handleAddToList} />
    </View>
 );
};

export default Product;