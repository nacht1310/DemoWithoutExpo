import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details'
import Add from './src/screens/Add'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" 
        component={Home} 
        options ={{
          title: 'Home',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#0288d1',
          },
          headerTitleStyle: {
            color: "#FFF",
            fontWeight: "bold",
          }
          }}/>
          <Stack.Screen name="Details" 
        component={Details} 
        options ={{
          title: 'Details',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#0288d1',
          },
          headerTitleStyle: {
            color: '#FFF',
            fontWeight: "bold",
          }
          }}/>
          <Stack.Screen name="Add" 
        component={Add} 
        options ={{
          title: 'Add',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#0288d1',
          },
          headerTitleStyle: {
            color: '#FFF',
            fontWeight: "bold",
          }
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;