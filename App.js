import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/FontAwesome";
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

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ height: "100%", width: "100%" }}>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              headerShown: false,
              drawerType: "slide",
              overlayColor: "transparent",
              drawerHideStatusBarOnOpen: true,
              drawerStyle: {
                backgroundColor: "#009688",
                width: "50%",
              },
              sceneContainerStyle: {
                backgroundColor: "#009688",
              },
            }}
          >
            <Drawer.Screen name="Home" component={AppStack} />
            {/* Add more screens for the drawer as needed */}
          </Drawer.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={CartPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#FA4A0C", // Set the active tab icon color here
        tabBarLabel: "",
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
