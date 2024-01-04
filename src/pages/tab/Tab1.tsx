import {Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Tab1() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <Button
        title="Detail"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
}
