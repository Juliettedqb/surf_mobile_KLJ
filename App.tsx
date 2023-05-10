import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import List, { Spot } from "./components/List";

export default function App() {
  const Tab = createBottomTabNavigator();

  const array: Spot[] = [
    {
      title: "Malibu",
      image:
        "https://tahesport.com/media/catalog/product/cache/d96fc7b71f34502139701fbc9e1b3b74/m/i/mini-malibu-right.jpg",
      type: "person",
    },
    {
      title: "Hossegor",
      image:
        "https://oceanadventure.surf/wp-content/uploads/2019/11/cedric-oa.jpg",
      type: "wave",
    },
  ];

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Liste" component={() => <List items={array} />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
