import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@src/screens/Login/Container/index';
import UpdatePassword from '@src/screens/Login/Components/UpdatePassword/index';
import {ROUTE} from '@src/navigation/constant';
import ParentUpdate from '@src/screens/Parentupdate';
import ParentPassword from '../screens/ParentPassword';
const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTE.LOGIN}>
      <Stack.Screen
        name={ROUTE.LOGIN}
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Stack.Screen
        name={ROUTE.UPDATE_PASSWORD}
        options={{headerShown: false}}
        component={UpdatePassword}
      />
      <Stack.Screen
        name={ROUTE.PARENT_EDIT}
        options={{headerShown: false}}
        component={ParentUpdate}
      />
       <Stack.Screen
        name={ROUTE.PARENT_PRIVACY}
        options={{headerShown: false}}
        component={ParentPassword}
      />
    </Stack.Navigator>
  );
}
