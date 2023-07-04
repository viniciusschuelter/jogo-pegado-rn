import React from 'react';

import { Text, View } from '../components/Themed';
import {Pressable, StyleSheet} from 'react-native';
import { TeamInterface } from '../interfaces/team.interface';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../constants/Colors";
import {Link} from "expo-router";

const TeamCard = (props: { team: TeamInterface }) => {

    const { team } = props;

    return (
        <View style={styles.container}>

            <div>
                <div>
                    <label style={styles.label}>Nome da Pelada: </label>
                    <Text style={styles.title}>{ team.name }</Text>
                </div>

                <div>
                    <label style={styles.label}>Qtd. Jogadores: </label>
                    <Text style={styles.title}>{ team.players?.length }</Text>
                </div>
            </div>
            <Link href="/modal" asChild>
                <Pressable>
                    {({ pressed }) => (
                        <FontAwesome
                            name="pencil"
                            size={20}
                            color={Colors.dark.text}
                            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                        />
                    )}
                </Pressable>
            </Link>
                {/*<Pressable>*/}
                {/*    {({ pressed }) => (*/}
                {/*        <FontAwesome*/}
                {/*            name="trash"*/}
                {/*            size={25}*/}
                {/*            color={Colors.dark.text}*/}
                {/*            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}*/}
                {/*        />*/}
                {/*    )}*/}
                {/*</Pressable>*/}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
        marginRight: '16px',
        marginLeft: '16px',
        padding: '8px',
        border: '1px solid #fff',
        borderRadius: 8
    },
    label: {
        fontSize: 14,
        color: '#dfdfdf',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default TeamCard;
