import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Image, Dimensions, Platform } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// screens
import {
  AddComponent,
  DiscoverComponent,
  StarsComponent,
  CartComponent,
  ProfileComponent
} from '../screens';


//Add stack screens
const AddStack = createNativeStackNavigator();
const AddStackScreens = ({ navigation }) => {
  return (
    <AddStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "float"
      }}
      animation="slide">
      <AddStack.Screen
        name="AddComponent"
        component={AddComponent}
        options={{
          headerShown: false,
        }}
      />
    </AddStack.Navigator>
  );
};

//Discover stack screens
const DiscoverStack = createNativeStackNavigator();
const DiscoverStackScreens = ({ navigation }) => {
  return (
    <DiscoverStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "float"
      }}
      animation="slide">
      <DiscoverStack.Screen
        name="DiscoverComponent"
        component={DiscoverComponent}
        options={{
          headerShown: false,
        }}
      />
    </DiscoverStack.Navigator>
  );
};

//Stars stack screens
const StarsStack = createNativeStackNavigator();
const StarsStackScreens = ({ navigation }) => {
  return (
    <StarsStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "float"
      }}
      animation="slide">
      <StarsStack.Screen
        name="StarsComponent"
        component={StarsComponent}
        options={{
          headerShown: false,
        }}
      />
    </StarsStack.Navigator>
  );
};

//Profile stack screens
const CartStack = createNativeStackNavigator();
const CartStackScreens = ({ navigation }) => {
  return (
    <CartStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "float"
      }}
      animation="slide">
      <CartStack.Screen
        name="CartComponent"
        component={CartComponent}
        options={{
          headerShown: false,
        }}
      />
    </CartStack.Navigator>
  );
};

//Profile stack screens
const ProfileStack = createNativeStackNavigator();
const ProfileStackScreens = ({ navigation }) => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "float"
      }}
      animation="slide">
      <ProfileStack.Screen
        name="ProfileComponent"
        component={ProfileComponent}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
};


// bottom tab navigator
const Tab = createMaterialTopTabNavigator();
const TabNavigation = () => {
  const Window = Dimensions.get('window');
  const IsIos = Platform.OS === 'ios';

  return (
    <Tab.Navigator
      tabBarPosition={"bottom"}
      screenOptions={{
        tabBarLabelStyle: { fontSize: 8 },
        tabBarItemStyle: { width: Window.width / 5 },
        // tabBarStyle: { backgroundColor: '#4FE399' },
        swipeEnabled: true,
        tabBarActiveTintColor: '#4FE399',
        tabBarInactiveTintColor: '#FFFFFF',
        // backgroundColor: '#1A355F',
        tabBarStyle: {
          backgroundColor: '#000000',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 2,
          zIndex: 999,
          marginTop: -20,
          height: IsIos ? 90 : 60,
          borderTopColor: "#fff4",
        },
        tabBarShowLabel: true,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/logo/discovery.png')}
                style={{ width: 20, height: 20, marginBottom: 5 }}
              />
            </View>
          ),
        }}
        name="Discover"
        component={DiscoverStackScreens}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/logo/serach.png')}
                style={{ width: 20, height: 20, marginBottom: 5 }}
              />
            </View>
          ),
        }}
        name="Stars"
        component={StarsStackScreens}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/logo/share.png')}
                style={{ width: 20, height: 20, marginBottom: 5 }}
              />
            </View>
          ),
        }}
        name="Add"
        component={AddStackScreens}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/logo/cart.png')}
                style={{ width: 20, height: 20, marginBottom: 5 }}
              />
            </View>
          ),
        }}
        name="Cart"
        component={CartStackScreens}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/logo/profile.png')}
                style={{ width: 20, height: 20, marginBottom: 5 }}
              />
            </View>
          ),
        }}
        name="Profile"
        component={ProfileStackScreens}
      />
      

    </Tab.Navigator>
  );
};


// Sack Navigation
const Stack = createNativeStackNavigator();
const AppStackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "float"
      }}
      animation="slide">
      <>
        <Stack.Screen
          name="App"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="AddPatientStep1"
          component={AddPatientStep1}
          options={{
            headerShown: false,
          }}
        /> */}
      </>
    </Stack.Navigator>
  );
};

export default AppStackScreens;
