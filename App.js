import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  FontAwesome5,
  Foundation,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

import Icons from "react-native-vector-icons/Ionicons";
import ProductDetail from "./screens/productDetail";
import DetailsScreen from "./screens/details";
import Home from "./screens/Tabs/Home";
import Favorite from "./screens/Tabs/favorite";
import HomeScreen from "./screens/home";
import Profile from "./screens/Tabs/profile";
import Order from "./screens/Tabs/order";
import Register from "./screens/register";
import CartPage from "./screens/cartPage";
import { Provider } from "react-redux";
import store from "./cart/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DrawerScreenWrapper from "./components/DrawerScreenWraper";
import Offer from "./screens/offer";
import Privay from "./screens/privay";
import Security from "./screens/security";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import CustomDrawer from "./components/CustomDrawer";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ height: "100%", width: "100%" }}>
        <NavigationContainer>
          <Drawer.Navigator
          drawerContent= {props => <CustomDrawer {...props} /> }
            screenOptions={{
              headerShown: false,
              drawerType: "slide",
              overlayColor: "transparent",
              drawerHideStatusBarOnOpen: true,
              drawerStyle: {
                backgroundColor: "#FA4A0C",
                paddingTop: 20,
                width: "65%",
              },
              sceneContainerStyle: {
                backgroundColor: "#FA4A0C",
              },
            }}
          >
            <Drawer.Screen
              name="HomePage"
              component={AppStack}
              options={{
                drawerIcon: ({ focused, color, size }) => (
                  <FontAwesome5 name="user-circle" size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="Order"
              component={Order}
              options={{
                drawerIcon: ({ focused, color, size }) => (
                  <MaterialCommunityIcons
                    name="cart-arrow-down"
                    size={24}
                    color="black"
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Offer and Promo"
              component={Offer}
              options={{
                drawerIcon: ({ focused, color, size }) => (
                  <AntDesign name="tago" size={24} color="black" />
                ),
              }}
            />
            <Drawer.Screen
              name="Privacy and Policy"
              component={Privay}
              options={{
                drawerIcon: ({ focused, color, size }) => (
                  <Foundation name="clipboard-notes" size={24} color="black" />
                ),
              }}
            />
            <Drawer.Screen
              name="Security"
              component={Security}
              options={{
                drawerIcon: ({ focused, color, size }) => (
                  <FontAwesome name="shield" size={24} color="black" />
                ),
                order: 2,
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

function AppStack() {
  return (
    <DrawerScreenWrapper>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={MyTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Offer"
          component={Offer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Privacy and policy"
          component={Privay}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Security"
          component={Security}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </DrawerScreenWrapper>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FA4A0C",
        tabBarLabelStyle: {
          display: "none",
        },
        headerTitle: "Home Screen",
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "",
          headerShown: false,
          headerTitle: "Home Sreen",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "",
          headerShown: false,
          headerTitle: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarLabel: "",
          headerShown: false,
          headerTitle: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icons name="ios-timer-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          headerShown: false,
          headerTitle: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
