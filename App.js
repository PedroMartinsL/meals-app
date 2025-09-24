import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoritesScreen';
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            sceneContainerStyle: {backgroundColor: '#3f2f25'},
            drawerContentStyle: {backgroundColor: '#351401'},
            drawerActiveTintColor: "white",
            drawerActiveBackgroundColor: "#9c7660ff"
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      title: 'All Categories',
      drawerIcon: ({ color, size}) => 
        <Ionicons name="list" color={color} size={size} />
    }}/>
    <Drawer.Screen name="Favorites" component={FavoriteScreen} options={{
      drawerIcon: ({ color, size}) => 
        <Ionicons name="star" color={color} size={size} />
    }}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'}
        }}>
          <Stack.Screen name="Drawer" component={DrawerNavigator} 
          options={{
            headerShown: false
          }}/>
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
