import React, {useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import DefaultText from '../component/DefaultText';
import {toggleFavorite} from '../store/actions/meals';
//import Icon from 'react-native-ionicons';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};
const MealDetailScreen = ({route, navigation}) => {
  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = route.params.mealId;
  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id == mealId),
  );
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch]);

  useEffect(() => {
    navigation.setParams({favToggle: toggleFavoriteHandler});
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    navigation.setParams({isFav: currentMealIsFavorite});
  }, [currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient} </ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(steps => (
        <ListItem key={steps}>{steps}</ListItem>
      ))}
    </ScrollView>
  );
};
/*MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  console.log(navigationData);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-star"
          onPress={() => {
            console.log('mark as favorite!!!');
          }}
        />
      </HeaderButtons>
    ),
  };
};*/
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'Langar-Regular',
    fontSize: 22,
    fontWeight: '900',
    alignSelf: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});
export default MealDetailScreen;
