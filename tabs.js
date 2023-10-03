import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "./screens/Tabs/about";
import Settings from "./screens/Tabs/settings";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="about" component={About} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
export default MyTabs;
