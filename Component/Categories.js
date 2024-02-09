import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const Categories = ({ navigation }) => {
  const categories = [
    {
      name: 'Fruits',
      products: [
        {
          name: 'Apple',
          image: 'https://example.com/apple.jpg',
          price: '$1.00',
        },
        {
          name: 'Banana',
          image: 'https://example.com/banana.jpg',
          price: '$0.50',
        },
      ],
    },
    {
      name: 'Vegetables',
      products: [
        {
          name: 'Carrot',
          image: 'https://example.com/carrot.jpg',
          price: '$0.75',
        },
        {
          name: 'Potato',
          image: 'https://example.com/potato.jpg',
          price: '$0.50',
        },
      ],
    },
  ];

  const handleProductPress = product => {
    navigation.navigate('Product', { product });
  };

  return (
    <View>
      {categories.map(category => (
        <View key={category.name}>
          <Text>{category.name}</Text>
          {category.products.map(product => (
            <View key={product.name}>
              <Image source={{ uri: product.image }} />
              <Text>{product.name}</Text>
              <Text>{product.price}</Text>
              <Button
                title="Add to List"
                onPress={() => handleProductPress(product)}
              />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Categories;