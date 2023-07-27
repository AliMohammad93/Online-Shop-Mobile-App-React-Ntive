import "react-native-gesture-handler";
import RootNavigator from "./src/navigation";
import { SearchContextProvider } from "./src/context/SearchContext";
const App = () => {
  return (
    <SearchContextProvider>
        <RootNavigator />
    </SearchContextProvider>
  );
};
export default App;
