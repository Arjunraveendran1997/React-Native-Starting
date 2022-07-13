import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'


import LoginPage from './Src/LoginPage';
import RegisterPage from './Src/RegisterPage';
import Home from './Src/Drawer/Home';
import Profile from './Src/Drawer/Profile';
import Videos from './Src/Tab/Videos';
import Chapter from './Src/Tab/Chapter';
import Resources from './Src/Tab/Resources';
import Bank from './Src/Tab/Bank';
import Searchtab from './Src/Searchtab';





const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()
const Tab = createMaterialTopTabNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={LoginPage}
        options={{
          headerShown: false
        }} />

      <Stack.Screen
        name="Register"
        component={RegisterPage} />

      <Stack.Screen
        name="Drawer"
        component={MyDrawer} />

      <Stack.Screen
        name="Tab"
        component={MyTab}
        options={{ header: (props) => <Searchtab {...props} /> }}

      />


    </Stack.Navigator>
  )
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home} />

      <Drawer.Screen
        name="Profile"
        component={Profile} />
    </Drawer.Navigator>
  )
}

function MyTab() {
  return (
    <Tab.Navigator
      // tabBar={props => <Searchtab {...props} />}
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' }
      }}
    // style={{ marginTop: 50 }}
    >

      <Tab.Screen
        name="Videos"
        component={Videos}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black'
        }} />

      <Tab.Screen
        name="Chapter"
        component={Chapter}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black'
        }} />

      <Tab.Screen
        name="Resources"
        component={Resources}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black'
        }} />

      <Tab.Screen
        name="Bank"
        component={Bank}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black'
        }} />

    </Tab.Navigator>
  )
}


export default function App() {

  return (
    <NavigationContainer>

      <MyStack />
    </NavigationContainer>
  )
}