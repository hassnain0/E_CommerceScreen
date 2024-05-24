import React from 'react';
import Home from './Screens/Home';
import Shop from './Screens/Shop';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTransparent:true,headerTitle:''}}
        />
        <Stack.Screen
          name="Shop"
          component={Shop}
          options={{ statusBarColor: 'transparent', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
