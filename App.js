import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" 
        component={Home} 
        options ={{
          title: 'Home',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#80d8ff',
          },
          headerTitleStyle: {
            color: Colors.white,
            fontWeight: "bold",
          }
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;