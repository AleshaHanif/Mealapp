import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../component/CategoryGridTile.js';
import HeaderButton from '../component/HeaderButton';
const CategoriesScreen = ({navigation}) => {
  const renderGridItems = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
            categoryTitle:itemData.item.title,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItems}
      numColumns={2}
    />
  );
};
/*CategoriesScreen.navigationOptions = navigationData => {
  return {
    headerTitle: 'Meals Categories',
    headerLeft: () => (
      <HeaderButton HeaderButtonComponent={HeaderButtons}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            console.log('pressed');
          }}
        />
      </HeaderButton>
    ),
  };
};
*/
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoriesScreen;
