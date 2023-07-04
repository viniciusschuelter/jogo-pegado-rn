import React from 'react';
import {TeamInterface, TeamPlayerInterface} from '../interfaces/team.interface';
import {initialTeam, initialTeamPlayer} from '../constants/Team';
import { Formik, Form, Field, FieldArray, ErrorMessage, FormikHelpers } from 'formik';
import { StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Team(props: { team: TeamInterface }) {
    const { team = initialTeam } = props;

    return (
        <Formik
            initialValues={team}
            validate={(values: TeamInterface) => {
                const errors: any = {};
                if (!values.name) {
                    errors.name = 'O nome da pelada deve ser informado!';
                }
                if (values.players?.length) {
                    errors.players = values.players?.map( (player: TeamPlayerInterface) =>
                        !player.name ? 'O nome do jogador deve ser informado' : ''
                    )
                    if (errors.players.every( (_: any) => !_)) delete errors.players;
                }
                return errors;
            }}
            onSubmit={(
                values: TeamInterface,
                { setSubmitting }: FormikHelpers<TeamInterface>
            ) => {
                setTimeout(() => {
                    const storeData = async (value) => {
                        try {
                            await AsyncStorage.setItem('teams', JSON.stringify(values));
                        } catch (e) {
                            // saving error
                        }
                    };
                    console.log(storeData);
                    setSubmitting(false);
                }, 500);
            }}
        >
            {({ values }) => (
            <Form>
                <View style={styles.container}>
                    <label htmlFor="name" style={styles.label}>Nome da Pelada:</label>
                    <Field id="name" name="name" placeholder="Informe o nome da pelada" />
                    <ErrorMessage style={styles.error} name="name" component="div" />
                    <br/>

                    <FieldArray name="players">
                        {({ insert, remove, push }) => (
                            <div style={styles.players}>
                                {values.players.length > 0 &&
                                    values.players.map((player, index) => (
                                        <div className="row" style={styles.players.player} key={index}>
                                            <div className="col">
                                                <label htmlFor={`players.${index}.name`} style={styles.label}>
                                                    Nome do Jogador:
                                                </label><br/>
                                                <Field
                                                    name={`players.${index}.name`}
                                                    placeholder="Informe o nome do jogador"
                                                    type="text"
                                                />
                                                <ErrorMessage
                                                    style={styles.error}
                                                    name={`players.${index}`}
                                                    component="div"
                                                    className="field-error"
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor={`players.${index}.rating`} style={styles.label}>
                                                    Habilidade: {values.players[index].rating}
                                                </label><br/>
                                                <Field
                                                    style={styles.wFull}
                                                    name={`players.${index}.rating`}
                                                    type="range"
                                                    min="0"
                                                    max="100"
                                                />
                                            </div>
                                            <div style={styles.rowBetween}>
                                                <div className="col">
                                                    <label htmlFor={`players.${index}.goalkeeper`} style={styles.label}>
                                                        Goleiro?
                                                    </label>
                                                    <Field type="checkbox" name={`players.${index}.goalkeeper`} />
                                                </div>
                                                <div className="col">
                                                    <label htmlFor={`players.${index}.confirmed`} style={styles.label}>
                                                        Vai jogar?
                                                    </label>
                                                    <Field type="checkbox" name={`players.${index}.confirmed`} />
                                                </div>
                                            </div>
                                            <div className="col" style={styles.removePlayers}>
                                                <button
                                                    type="button"
                                                    className="secondary"
                                                    onClick={() => remove(index)}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                <button
                                    type="button"
                                    className="secondary"
                                    style={styles.wFull}
                                    onClick={() => push(structuredClone(initialTeamPlayer))}
                                >
                                    Adiconar Jogador
                                </button>
                            </div>
                        )}
                    </FieldArray>
                </View>

                <button type="submit" style={styles.floatButton} >Criar Pelada</button>
            </Form>
            )}
        </Formik>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: '16px'
    },
    error: {
        color: 'rgb(195, 0, 0)'
    },
    label: {
        color: '#fff',
        paddingTop: '16px'
    },
    players: {
        overflow: 'scroll',
        maxHeight: 'calc(100vh - 216px)',
        player: {
            position: 'relative',
        }
    },
    removePlayers: {
        position: 'absolute',
        top: '20px',
        right: '8px',
    },
    rowBetween: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    wFull: {
        width: '100%'
    },
    floatButton: {
        position: 'absolute',
        bottom: '0',
        height: '50px',
        width: '100%',
    }
});
