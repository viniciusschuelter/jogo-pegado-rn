import { StatusBar } from 'expo-status-bar';
import {ImageBackground, Platform, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Team from "../components/Team";

export default function ModalScreen() {
  return (
      <View style={styles.container}>
        <ImageBackground resizeMode="cover" source={{uri: './assets/images/bg.png'}} style={styles.image}>
          <View style={styles.content}>
            <Text style={styles.title}>Modal</Text>
            <View style={styles.separator} />

            <Team />

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
    width: '100vw',
    height: 'calc(100vh - 64px)',
    backgroundColor: '#00000070',
  },
});
