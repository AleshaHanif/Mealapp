import React from 'react';
import MealList from '../component/MealList';
import {useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import DefaultText from '../component/DefaultText';

const FavoritesScreen = ({navigation}) => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  if (favMeals.length == 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found.Start add some... </DefaultText>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={navigation} />;
};
FavoritesScreen.navigationOptions = {
  headerTitle: 'Favorites',
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default FavoritesScreen;
