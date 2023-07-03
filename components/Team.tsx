import React from 'react';
import { TeamInterface } from '../interfaces/team.interface';
import {initialTeam, initialTeamPlayer} from '../constants/Team';
import { Formik, Form, Field, FieldArray, ErrorMessage, FormikHelpers } from 'formik';
import {StyleSheet} from "react-native";

export default function Team(props: { team: TeamInterface }) {
    const { team = initialTeam } = props;

    return (
        <Formik
            initialValues={team}
            onSubmit={(
                values: TeamInterface,
                { setSubmitting }: FormikHelpers<TeamInterface>
            ) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
        >
            <Form>
                <label htmlFor="name" style={styles.label}>Nome da Pelada:</label><br/>
                <Field id="name" name="name" placeholder="Informe o nome da pelada" />

                <FieldArray name="players">
                    {({ insert, remove, push }) => (
                        <div>
                            {team.players.length > 0 &&
                                team.players.map((player, index) => (
                                    <div className="row" key={index}>
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
                                                name={`players.${index}.name`}
                                                component="div"
                                                className="field-error"
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
                                        <div className="col">
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
                                onClick={() => push(initialTeamPlayer)}
                            >
                                Adiconar Jogador
                            </button>
                        </div>
                    )}
                </FieldArray>

                {/*<label htmlFor="lastName">Last Name</label>*/}
                {/*<Field id="lastName" name="lastName" placeholder="Doe" />*/}

                <button type="submit" style={styles.floatButton} >Criar Pelada</button>
            </Form>
        </Formik>
    )
}
const styles = StyleSheet.create({
    label: {
        color: '#fff',
        paddingTop: '16px'
    },
    rowBetween: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    floatButton: {
        position: 'absolute',
        bottom: '0',
        height: '50px',
        width: '100%',
    }
});
