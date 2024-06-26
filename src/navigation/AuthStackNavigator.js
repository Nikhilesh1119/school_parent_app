import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@src/screens/Login/Container';
import { ROUTE } from './constant';
import UpdatePassword from '../screens/Updatepassword';
 

const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    
      <Stack.Navigator initialRouteName={ROUTE.LOGIN}>
        <Stack.Screen
          name={ROUTE.LOGIN}
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name={ROUTE.UPDATE_PASSWORD}
          options={{ headerShown: false }}
          component={UpdatePassword} // Add this screen
        />
        
      </Stack.Navigator>
   
  );
}
