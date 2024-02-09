import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserRegistration from './Component/User';
import Categories from './Component/Categories';
import Product from './Component/product';
import ShoppingList from './Component/Shopping';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserRegistration" component={UserRegistration} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="ShoppingList" component={ShoppingList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;