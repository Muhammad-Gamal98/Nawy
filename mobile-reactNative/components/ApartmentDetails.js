import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from '../utils/api';

const ApartmentDetails = ({ apartmentId }) => {
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    fetchApartmentDetails();
  }, []);

  const fetchApartmentDetails = async () => {
    try {
      const response = await axios.get(`/apartment/${apartmentId}`);
      setApartment(response.data);
    } catch (error) {
      console.error('Error fetching apartment details:', error);
    }
  };

  if (!apartment) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {apartment.image && (
        <Image
          source={{ uri: apartment.image }} // Assuming apartment.image is the URL of the image
          style={styles.image}
          resizeMode="cover"
          onError={(e) => console.log('Error loading image:', e.nativeEvent.error)}
        />
      )}
      <Text style={styles.title}>Title: {apartment.title}</Text>
      <Text style={styles.text}>Description: {apartment.description}</Text>
      <Text style={styles.text}>Price: {apartment.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default ApartmentDetails;
