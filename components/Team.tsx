import React from 'react';
import {TeamInterface, TeamPlayerInterface} from '../interfaces/team.interface';
import {initialTeam, initialTeamPlayer} from '../constants/Team';
import { Formik, Form, Field, FieldArray, ErrorMessage, FormikHelpers } from 'formik';
import {Button, Dimensions, StyleSheet, View} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useQuery} from "react-query";
import {getTeams} from "../queries/team.query";
import Checkbox from 'expo-checkbox';
import Slider from "@react-native-community/slider";
import {Text, TextInput} from "./Themed";

const windowHeight = Dimensions.get('window').height;

export default function Team(props: { team: TeamInterface }) {
    const { team = initialTeam } = props;
    const { data, error, isLoading } = useQuery('teams', getTeams);

    return (
        <View>
            { team &&
                <Formik
                    initialValues={team}
                    validate={(values: TeamInterface) => {
                        const errors: any = {};
                        if (!values.name) {
                            errors.name = 'O nome da pelada deve ser informado!';
                        }
                        if (values.players?.length) {
                            errors.players = values.players?.map((player: TeamPlayerInterface) =>
                                !player.name ? 'O nome do jogador deve ser informado' : ''
                            )
                            if (errors.players.every((_: any) => !_)) delete errors.players;
                        }
                        return errors;
                    }}
                    onSubmit={(
                        values: TeamInterface,
                        {setSubmitting}: FormikHelpers<TeamInterface>
                    ) => {
                        setTimeout(() => {
                            const storeData = async () => {
                                try {
                                    const payload = [...data || [], values];
                                    await AsyncStorage.setItem('teams', JSON.stringify(payload));
                                } catch (e) {
                                    // saving error
                                }
                            };
                            storeData();
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    {({values}) => (
                        <View style={styles.container}>
                            <Text>Nome da pelada:</Text>
                            <TextInput id="name" value={values.name} placeholder="Informe o nome da pelada"/>

                            <FieldArray name="players">
                                {({insert, remove, push}) => (
                                    <View style={styles.players}>
                                        {values.players.length > 0 &&
                                            values.players.map((player, index) => (
                                                <View className="row" style={styles.players.player} key={index}>
                                                    <View className="col">
                                                        <Text>Nome do jogador:</Text>
                                                        <TextInput
                                                            value={values.players[index].name}
                                                            placeholder="Informe o nome do jogador"
                                                        />
                                                    </View>
                                                    <View className="col">
                                                        <Text>Habilidade:</Text>
                                                        <Slider
                                                            style={styles.wFull}
                                                            minimumValue={0}
                                                            maximumValue={100}
                                                            value={values.players[index].rating}
                                                        />
                                                    </View>
                                                    <View style={styles.rowBetween}>
                                                        <View className="col">
                                                            <Text>Goleiro?</Text>
                                                            <Checkbox value={values.players[index].goalkeeper} />
                                                        </View>
                                                        <View className="col">
                                                            <Text>Confimado?</Text>
                                                            <Checkbox value={values.players[index].confirmed} />
                                                        </View>
                                                    </View>
                                                    <View className="col" style={styles.removePlayers}>
                                                        <Button title="X" onPress={() => remove(index)} />
                                                    </View>
                                                </View>
                                            ))}

                                        <Button
                                            style={styles.wFull}
                                            title="Adiconar Jogador"
                                            onPress={() => push(initialTeamPlayer)}
                                        />
                                    </View>
                                )}
                            </FieldArray>

                            <Button style={styles.floatButton} title="Criar Pelada" />
                        </View>
                    )}
                </Formik>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    error: {
        color: 'rgb(195, 0, 0)'
    },
    label: {
        color: '#fff',
        paddingTop: 16
    },
    players: {
        overflow: 'scroll',
        maxHeight: windowHeight - 216,
        player: {
            position: 'relative',
        }
    },
    removePlayers: {
        position: 'absolute',
        top: 20,
        right: 8,
    },
    rowBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wFull: {
        width: '100%'
    },
    floatButton: {
        position: 'absolute',
        backgroundColor: 'rgb(50 149 216)',
        color: '#fff',
        bottom: '0',
        height:  50,
        width: '100%',
    }
});
