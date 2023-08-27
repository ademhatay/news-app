import { Favorite, Home, Search, Settings, Details } from "../Screens";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from '@expo/vector-icons/Ionicons';
import { Dimensions } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 15,
          marginHorizontal: Dimensions.get('window').width / 10,
          borderRadius: 15,
          height: 60,
        }
      }}>
      <Tab.Screen
        name="MyStack"
        component={MyStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return focused ? (<Ionicons name="ios-home" size={size + 10} color="#191D88" />)
              : (<Ionicons name="ios-home-outline" size={size} color={color} />)
          },
        }} />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return focused ? (<Ionicons name="ios-search" size={size + 10} color="#191D88" />)
              : (<Ionicons name="ios-search-outline" size={size} color="black" />)
          }
        }} />

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ focused, size }) => {
            return focused ? (<Ionicons name="ios-heart" size={size + 10} color="#FF2E63" />)
              : (<Ionicons name="ios-heart-outline" size={size} color="black" />)
          }
        }} />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused, size }) => {
            return focused ? (<Ionicons name="ios-settings" size={size + 10} color="#191D88" />)
              : (<Ionicons name="ios-settings-outline" size={size} color="black" />)
          }
        }} />
    </Tab.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}


const AppRouter = () => {
  return <MyTabs />
}

export default AppRouter
