import React, {useState, useCallback} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import HOC from '../../components/HigherOrderComponent';
import {useSelector, useDispatch} from 'react-redux';
import ListItem from '../../components/ListItem';
import {manupilatingFavourites} from '../../store/actions/InitializePlacesActions';

const AllPlacesScreen = () => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const displayPlaces = useSelector(state => state.info.displayingPlaces);

  const loadData = useCallback(() => {
    dispatch({type: 'UPDATE_DISPLAY_LIST', count: count + 1});
    setCount(count + 1);
  }, []);

  const onSelectFavourites = useCallback((index, item, type) => {
    dispatch(manupilatingFavourites(index, item, type));
  }, []);

  return (
    <HOC>
      <FlatList
        data={displayPlaces}
        renderItem={({item, index}) => (
          <ListItem
            item={item}
            onSelectFavourites={onSelectFavourites}
            index={index}
          />
        )}
        keyExtractor={(item, index) => String(index)}
        onEndReached={loadData}
        style={styles.container}
        contentContainerStyle={styles.contentStyle}
      />
    </HOC>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  contentStyle: {padding: 10},
});

export default AllPlacesScreen;
