import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import List from "./components/List";

export default function App() {
  const Tab = createBottomTabNavigator();

  const spotNames = ["Malibu", "Hossegor", "Saint Barth"];

  const spotImages = [
    "https://tahesport.com/media/catalog/product/cache/d96fc7b71f34502139701fbc9e1b3b74/m/i/mini-malibu-right.jpg",
    "https://oceanadventure.surf/wp-content/uploads/2019/11/cedric-oa.jpg",
    "https://isleblue.co/magazine/wp-content/uploads/2016/07/St-Barts-Surfing-1024x683.jpg",
  ];

  // const array = [
  //   {
  //     title: "Malibu",
  //     address: "Malibu 44000",
  //     image:
  //       "https://www.martysurfdelivery.com/img/leoblog/b/lg-b-aqutaine.jpeg",
  //     description: "Regardez comme c'est beau !",
  //   },
  //   {
  //     title: "Hossegor",
  //     address: "Hossegor 44000",
  //     image:
  //       "https://www.martysurfdelivery.com/img/leoblog/b/lg-b-aqutaine.jpeg",
  //     description: "Regardez comme c'est beau !",
  //   },
  // ];

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Liste"
          component={() => <List title={spotNames} image={spotImages} />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
