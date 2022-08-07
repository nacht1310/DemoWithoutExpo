import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
// SCREEN
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Add from './src/screens/Add';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>

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
      
    </Provider>
  );
}
export default App;