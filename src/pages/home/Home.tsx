import {Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <Button
        title="Detail"
        onPress={() => {
          navigation.navigate('Detail');
        }}
      />
    </View>
  );
}
