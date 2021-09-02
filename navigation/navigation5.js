import React from 'react';
import {Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';
import Colors from '../constant/color';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MealsNavigator = ({navigation, route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={({route}) => ({
          headerLeft: () => (
            <Ionicons
              style={{padding: 10}}
              name="menu"
              size={25}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primaryColor : '',
          },
          headerTintColor:
            Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        })}
      />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({route}) => ({
          headerTitle: route.params.categoryTitle,
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primaryColor : '',
          },
          headerTintColor:
            Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({route}) => ({
          headerTitle: route.params.mealTitle,
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primaryColor : '',
          },
          headerTintColor:
            Platform.OS === 'android' ? 'white' : Colors.primaryColor,
          headerRight: () => (
            <Ionicons
              style={{padding: 10}}
              name={route.params.isFav ? 'ios-star' : 'ios-star-outline'}
              size={25}
              color="white"
              onPress={() => route.params.favToggle()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
const favNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerLeft: () => (
            <Ionicons
              style={{padding: 10}}
              name="menu"
              size={25}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primaryColor : '',
          },
          headerTintColor:
            Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({route}) => ({
          headerTitle: route.params.mealTitle,
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primaryColor : '',
          },
          headerTintColor:
            Platform.OS === 'android' ? 'white' : Colors.primaryColor,
          headerRight: () => (
            <Ionicons
              style={{padding: 10}}
              name={route.params.isFav ? 'ios-star' : 'ios-star-outline'}
              size={25}
              color="white"
              onPress={() => route.params.favToggle()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          //let color;
          let size = 25;

          if (route.name === 'Meals') {
            iconName = 'ios-restaurant';
          } else if (route.name === 'Favorites') {
            iconName = 'ios-star';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'grey',
        labelStyle: {fontFamily: 'Langar-Regular'},
        style: {
          backgroundColor: Colors.primaryColor,
        },
      }}>
      <Tab.Screen name="Meals" component={MealsNavigator} />
      <Tab.Screen name="Favorites" component={favNavigator} />
    </Tab.Navigator>
  );
};
const FilterNavigator = ({navigation, route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Filters"
        component={FilterScreen}
        options={{
          headerLeft: () => (
            <Ionicons
              style={{padding: 10}}
              name="menu"
              size={25}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerRight: () => (
            <Ionicons
              style={{padding: 10}}
              name="ios-save"
              size={25}
              color="white"
              onPress={() => route.state.routes[0].params.save()}
            />
          ),
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primaryColor : '',
          },
          headerTintColor:
            Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        }}
      />
    </Stack.Navigator>
  );
};
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MealsScreen"
        drawerContentOptions={{
          activeTintColor: Colors.accentColor,
          labelStyle: {fontFamily: 'Langar-Regular'},
        }}>
        <Drawer.Screen
          name="MealsFav"
          component={MealsFavTabNavigator}
          options={{title: 'Meals'}}
        />
        <Drawer.Screen name="Filters" component={FilterNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
