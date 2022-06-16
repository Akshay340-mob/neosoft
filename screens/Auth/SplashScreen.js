import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import HOC from '../../components/HigherOrderComponent';
import ScalingTextComponent from '../../components/ScalingTextComponent';
import {fetchPlaces} from '../../store/actions/InitializePlacesActions';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.setItem('fav_list', JSON.stringify([]));
    dispatch(fetchPlaces());
  }, []);

  return (
    <HOC>
      <View style={styles.container}>
        <ScalingTextComponent title="Splash Screen" />
      </View>
    </HOC>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default SplashScreen;
