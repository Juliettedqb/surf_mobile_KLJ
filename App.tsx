import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from './components/List';


export default function App() {

  const Tab = createBottomTabNavigator();

  const array = [
    {
      title: "Malibu",
      address: "Malibu 44000",
      image:
        "https://www.martysurfdelivery.com/img/leoblog/b/lg-b-aqutaine.jpeg",
      description: "Regardez comme c'est beau !",
    },
    {
      title: "Hossegor",
      address: "Hossegor 44000",
      image:
        "https://www.martysurfdelivery.com/img/leoblog/b/lg-b-aqutaine.jpeg",
      description: "Regardez comme c'est beau !",
    },
  ];

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Liste" component={() => <List data={array}/>} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


