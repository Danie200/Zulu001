import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { StackNavigation} from "./pages/stackNavigation"


export default function App() {
  return (
    
      <NavigationContainer>
             <StackNavigation />
        </NavigationContainer>
    
  );
}



