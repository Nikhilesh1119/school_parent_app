import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTE} from './constant';
import AuthStackNavigator from './AuthStackNavigator';
import TabStackNavigator from './TabStackNavigator';
import Splash from './splash';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTE.SPLASH}>
        <Stack.Screen
          name={ROUTE.SPLASH}
          options={{headerShown: false}}
          component={Splash}
        />
        <Stack.Screen
          name={ROUTE.AUTH}
          options={{headerShown: false}}
          component={AuthStackNavigator}
        />
        <Stack.Screen
          name={ROUTE.TAB}
          options={{headerShown: false}}
          component={TabStackNavigator} // Add this screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
