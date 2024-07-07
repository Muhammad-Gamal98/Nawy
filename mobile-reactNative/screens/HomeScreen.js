import React from 'react';
import { View } from 'react-native';
import ApartmentList from '../components/ApartmentList';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ApartmentList navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
