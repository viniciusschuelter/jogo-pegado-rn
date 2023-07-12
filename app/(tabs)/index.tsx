import { ImageBackground, StyleSheet, Dimensions } from 'react-native';

import { Text, View } from '../../components/Themed';
import { useQuery } from 'react-query';
import TeamCard from '../../components/TeamCard';
import { TeamInterface } from '../../interfaces/team.interface';
import { getTeams } from '../../queries/team.query';
import TeamEmpty from "../../components/TeamEmpty";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function TabOneScreen() {
  const { data, error, isLoading } = useQuery('teams', getTeams);

  console.log(data);

  return (
      <View style={styles.container}>
        <ImageBackground resizeMode="cover" source={require('images/bg.png')}  style={styles.image}>
          <View style={styles.content}>
            <Text style={styles.title}>Tab One</Text>
            <View style={styles.separator} />

            <View>
              { data?.length ? data.map( (team: TeamInterface) => <TeamCard key={team.name} team={team} />) : <TeamEmpty /> }
            </View>
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
