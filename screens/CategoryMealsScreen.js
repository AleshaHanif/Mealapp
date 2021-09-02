import React from 'react';
import {useSelector} from 'react-redux';
import {CATEGORIES} from '../data/dummy-data';
import MealList from '../component/MealList';
import DefaultText from '../component/DefaultText';
import {View, StyleSheet} from 'react-native';

const CategoryMealsScreen = ({route, navigation}) => {
  const routeParams = route.params ? route.params : {};
  const catId = routeParams.categoryId;
  //const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );
  if (displayedMeals.length == 0)
    return (
      <View style={styles.content}>
        <DefaultText>No meals found.Check your filters...</DefaultText>
      </View>
    );
  return <MealList listData={displayedMeals} navigation={navigation} />;
};
CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.route.params.categoryId;
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoryMealsScreen;
