import type {NavigatorScreenParams} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';

declare global {
  type RootStackParamList = {
    Home: undefined;
    Tab: NavigatorScreenParams<TabParamList>;
    Detail: undefined;
  };

  type TabParamList = {
    Tab1: undefined;
    Tab2: undefined;
    Tab3: undefined;
  };

  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
