import { StatusBar } from 'expo-status-bar';
import {Dimensions, ImageBackground, Platform, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import Team from "../components/Team";
import {initialTeam} from "../constants/Team";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ModalScreen() {
  return (
      <View style={styles.container}>
        <ImageBackground resizeMode="cover" source={require('images/bg.png')} style={styles.image}>
          <View style={styles.content}>
            <View style={styles.separator} />
            <Team team={initialTeam} />

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
    marginTop: 20,
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
