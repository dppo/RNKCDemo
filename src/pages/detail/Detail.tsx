import {TextInput, View} from 'react-native';
import {useKeyboardHandler} from 'react-native-keyboard-controller';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const useAnimatedKeyboardProgress = () => {
  const progress = useSharedValue(0);

  useKeyboardHandler(
    {
      onMove: e => {
        'worklet';
        progress.value = e.progress;
      },
    },
    [],
  );

  return progress;
};

export default function Detail() {
  const progress = useAnimatedKeyboardProgress();
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: 150 + (1 - progress.value) * 100,
      marginVertical: 20 + (1 - progress.value) * 20,
    };
  }, [progress]);
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <Animated.View
        style={[
          {width: 200, alignSelf: 'center', backgroundColor: 'green'},
          animatedStyle,
        ]}
      />
      <TextInput style={{backgroundColor: 'red'}} placeholder="placeholder" />
    </View>
  );
}
