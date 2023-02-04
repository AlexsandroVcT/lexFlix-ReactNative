import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./pages/welcome";
import Home from "./pages/home";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              title: "",
              headerTransparent: true,
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Filmes",
              headerBackVisible: false,
              headerStyle: { backgroundColor: "#E50914" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
