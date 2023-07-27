import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllProducts from "../../screens/products/AllProducts/AllProducts";
import Electronics from "../../screens/products/Electronics/Electronics";
import Jewelery from "../../screens/products/Jewelery/Jewelery";
import WomenClothing from "../../screens/products/WomenClothing/WomenClothing";
import theme from "../../theme/theme";

const Tab = createMaterialTopTabNavigator();
const MaterialTopTabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarGap: 1,
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.secondary,
      tabBarLabelStyle: { ...theme.typography.body },
      tabBarScrollEnabled: true,
      tabBarStyle: { backgroundColor: theme.colors.background},
    })}>
      <Tab.Screen name="AllProducts" component={AllProducts}  options={{tabBarLabel:'Products'}} />
      <Tab.Screen name="Electronics" component={Electronics} />
      <Tab.Screen name="Jewelery" component={Jewelery} />
      <Tab.Screen name="WomenClothing" component={WomenClothing} options={{tabBarLabel:'Women Clothing'}} />
    </Tab.Navigator>
  );
};
export default MaterialTopTabs;
