import React from 'react';
import {useSelector} from "react-redux";
import {View, FlatList, StyleSheet} from 'react-native';
import MealItem from '../component/MealItem';

const MealList = props => {
  const favoriteMeals=useSelector(state=>state.meals.favoriteMeals);
  const renderMealItems = itemData => {
    const isFavorite= favoriteMeals.find(meal=>meal.id===itemData.item.id);
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate('MealDetail', {
            mealId: itemData.item.id,
            mealTitle:itemData.item.title,
            isFav:isFavorite
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={props.listData}
        renderItem={renderMealItems}
        style={{width: '100%'}}
        // numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default MealList;
