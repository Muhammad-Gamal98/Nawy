import React from 'react';
import { View } from 'react-native';
import ApartmentDetails from '../components/ApartmentDetails';

const ApartmentDetailsScreen = ({ route }) => {
  const { apartmentId } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <ApartmentDetails apartmentId={apartmentId} />
    </View>
  );
};

export default ApartmentDetailsScreen;
