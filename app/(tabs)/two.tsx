import {Dimensions, ImageBackground, StyleSheet} from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TabTwoScreen() {
  return (
      <View style={styles.container}>
        <ImageBackground resizeMode="cover" source={{uri: './assets/images/bg.png'}} style={styles.image}>
          <View style={styles.content}>
            <Text style={styles.title}>Tab Two</Text>
            <View style={styles.separator} />
            <EditScreenInfo path="app/(tabs)/two.tsx" />
          </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#00000070',
  },
});
