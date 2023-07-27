import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllProducts from "../../screens/products/AllProducts/AllProducts";
import Electronics from "../../screens/products/Electronics/Electronics";
import Jewelery from "../../screens/products/Jewelery/Jewelery";

const Tab = createMaterialTopTabNavigator();
const MaterialTopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AllProducts" component={AllProducts} />
      <Tab.Screen name="Electronics" component={Electronics} />
      <Tab.Screen name="Jewelery" component={Jewelery} />
    </Tab.Navigator>
  );
};
export default MaterialTopTabs;
