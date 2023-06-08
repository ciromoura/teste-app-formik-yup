import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/Login';
import { Home } from '../screens/Home';
import { AuthContext } from '../contexts/auth';

const Stack = createStackNavigator();

export function Routes() {

  const {user} = useContext(AuthContext);

  if(user.status !== 'Logado'){
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    )
  }else{
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    )
  }

}
