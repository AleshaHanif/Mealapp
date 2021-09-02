import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

const CategoryGridTile = props => {
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback onPress={props.onSelect}>
        <View
          style={{
            ...styles.container,
            ...{backgroundColor: props.color},
          }}>
          <Text numberOfLines={2} style={styles.title}>
            {props.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 15,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 30,
    padding: 10,
  },
  title: {
    fontFamily: 'Langar-Regular',
    fontSize: 22,
  },
});
export default CategoryGridTile;
