import { ImageBackground, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import { useQuery } from 'react-query';
import TeamCard from '../../components/TeamCard';
import { TeamInterface } from '../../interfaces/team.interface';
import { getTeams } from '../../queries/team.query';
import TeamEmpty from "../../components/TeamEmpty";

export default function TabOneScreen() {
  const { data, error, isLoading } = useQuery('teams', getTeams);

  console.log(data);

  return (
      <View style={styles.container}>
        <ImageBackground resizeMode="cover" source={{uri: './assets/images/bg.png'}} style={styles.image}>
          <View style={styles.content}>
            <Text style={styles.title}>Tab One</Text>
            <View style={styles.separator} />

            <div className="row">
              { data?.length ? data.map( (team: TeamInterface) => <TeamCard key={team.name} team={team} />) : <TeamEmpty /> }
            </div>
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
    height: '100vh',
    backgroundColor: '#00000070',
  },
});
