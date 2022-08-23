import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'


import CarDetailsScreen from './screens/CarDetailsScreen'
import MainScreen from './screens/MainScreen'
import ChatScreen from './screens/ChatScreen'
import FavoriteScreen from './screens/FavoriteScreen'
import PlusScreen from './screens/PlusScreen'
import ProfileScreen from './screens/ProfileScreen'
import { GlobalStyles } from './constants/styles';
import CarAppProvider from './state/ContextApi';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const NestedScreen = () => {
  return <Tab.Navigator screenOptions={{
    headerStyle: { backgroundColor: GlobalStyles.color.white },
    headerTintColor: GlobalStyles.color.gray150,
    tabBarIconStyle: { backgroundColor: GlobalStyles.color.white },
    tabBarActiveTintColor:GlobalStyles.color.green100,
 }}>
   <Tab.Screen name="MainScreen" component={MainScreen} options={{
      title: 'Main',
     headerShown:false,
      tabBarShowLabel: false,
      tabBarIcon: ({ size, color }) => <Ionicons name="search-outline" size={size} color={color} /> 
     }}/>
   <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
      title: 'Favorites',
      tabBarShowLabel: false,
      tabBarIcon: ({ size, color }) => <MaterialIcons name="favorite-border" size={size} color={color} />,
    }} />
   <Tab.Screen name="Plus" component={PlusScreen} options={{
      title: 'Plus',
     tabBarShowLabel: false,
    tabBarIcon: () => <Ionicons name="add-circle-outline" size={40} color={GlobalStyles.color.green100} style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: -20 }} />,
  }}  />
   <Tab.Screen name="Chat" component={ChatScreen} options={{
      title: 'Chat',
      tabBarShowLabel: false,
      headerShown:false,
      tabBarIcon:({size, color}) => <Ionicons name="chatbox-ellipses-outline" size={size} color={color} />
  }}  />
   <Tab.Screen name="Profile" component={ProfileScreen} options={{
      title: 'Profile',
      tabBarShowLabel: false,
       headerShown:false,
      tabBarIcon:({size, color}) => <AntDesign name="user" size={size} color={color} />
  }} />
  </Tab.Navigator>
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <CarAppProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="NestedScreen" component={NestedScreen} options={{
              headerShown:false
            }} />
            <Stack.Screen name="Details" component={CarDetailsScreen}  />
          </Stack.Navigator>
        </NavigationContainer>
      </CarAppProvider>
    </>
  );
}


