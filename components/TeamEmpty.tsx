import React from 'react';

import { Text, View } from '../components/Themed';
import { StyleSheet } from 'react-native';

const TeamCard = () => {


    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Sua lista de time está vázia, crie seu time e divirta-se com os amigos</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: '32px',
        color: '#fff',
        textAlign: 'center'
    },
});

export default TeamCard;
