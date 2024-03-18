import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Homepage";

const Stack = createNativeStackNavigator();

export function StackNavigation () {
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} >
        <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}