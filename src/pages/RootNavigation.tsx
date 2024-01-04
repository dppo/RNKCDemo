import {useWindowDimensions, View} from 'react-native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionSpecs,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Detail from './detail/Detail.tsx';
import Tab1 from './tab/Tab1.tsx';
import Tab2 from './tab/Tab2.tsx';
import Tab3 from './tab/Tab3.tsx';
import Home from './home/Home.tsx';

const RootStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

export default function RootNavigation() {
  return (
    <RootStack.Navigator
      screenOptions={{
        animationEnabled: true,
        headerShown: false,
      }}
      // TODO important！！！
      initialRouteName={'Tab'}>
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{animationEnabled: false}}
      />
      <RootStack.Screen
        name="Tab"
        component={TabScreen}
        options={{animationEnabled: false}}
      />
      <RootStack.Group
        screenOptions={{
          gestureDirection: 'vertical',
          gestureEnabled: false,
          presentation: 'transparentModal',
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
          },
        }}>
        <RootStack.Group>
          <RootStack.Screen name="Detail" component={Detail} />
        </RootStack.Group>
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

function TabScreen() {
  const {width} = useWindowDimensions();
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: width < 480 ? 'below-icon' : 'beside-icon',
          headerShown: false,
        }}
        sceneContainerStyle={{flex: 1}}>
        <Tab.Screen name="Tab1" component={Tab1} />
        <Tab.Screen name="Tab2" component={Tab2} />
        <Tab.Screen name="Tab3" component={Tab3} />
      </Tab.Navigator>
    </View>
  );
}
