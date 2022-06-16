import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import HOC from '../../components/HigherOrderComponent';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import ListItem from '../../components/ListItem';
import {fetchFavourites} from '../../store/actions/InitializePlacesActions';

const FavouritesScreen = () => {
  const dispatch = useDispatch();
  const favourites = useSelector(state => state.info.favourites);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchFavourites());
    }, []),
  );

  return (
    <HOC>
      {favourites.length > 0 ? (
        <FlatList
          data={favourites}
          renderItem={({item, index}) => (
            <ListItem item={item} from="favourites" />
          )}
          keyExtractor={(item, index) => String(index)}
          style={{flex: 1}}
          contentContainerStyle={styles.contentStyle}
        />
      ) : (
        <View style={styles.nodataStyle}>
          <Text>Not Anything Selected as Favourite</Text>
        </View>
      )}
    </HOC>
  );
};

const styles = StyleSheet.create({
  nodataStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentStyle:{padding: 10}
});

export default FavouritesScreen;
