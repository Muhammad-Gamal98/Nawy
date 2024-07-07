import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import axios from '../utils/api'; // Assume you have an axios instance set up
import ApartmentCard from './ApartmentCard';

//

const ApartmentList = ({ navigation }) => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetchApartments();
  }, []);

  const fetchApartments = async () => {
    try {
      const response = await axios.get('/apartment');
      // console.log("🚀 ~ fetchApartments ~ response:", response.data);
      setApartments(response.data.data);
      //
    } catch (error) {
      console.error('Error fetching apartments:', error);
    }
  };

  const handleApartmentPress = (apartmentId) => {
    navigation.navigate('ApartmentDetails', { apartmentId });
  };

  return (
    <View>
      <FlatList
        data={apartments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleApartmentPress(item.id)}>
            <ApartmentCard apartment={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ApartmentList;
