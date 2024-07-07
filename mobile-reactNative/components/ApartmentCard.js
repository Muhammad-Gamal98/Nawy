import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ApartmentCard = ({ apartment }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: apartment.image }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{apartment.title}</Text>
                <Text style={styles.description}>{apartment.description}</Text>
                <Text style={styles.price}>Price: ${apartment.price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        margin: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        // width: "100 %",
        height: 100,

        borderRadius: 8,
    },
    details: {
        marginLeft: 10,
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        marginTop: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#4CAF50',
    },
});

export default ApartmentCard;
